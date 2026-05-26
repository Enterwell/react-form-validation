import type { Field, Fields } from './useValidation';

type FieldCollection<TFields> = {
    [K in keyof TFields]: TFields[K] extends Field<infer _TValue>
        ? TFields[K]
        : never;
};

type FieldEntries<TFields extends FieldCollection<TFields>> = {
    [K in keyof TFields]: TFields[K] extends Field<infer TValue>
        ? [K, Field<TValue>]
        : never;
}[keyof TFields][];

export type ExtractedValues<TFields extends FieldCollection<TFields>> = {
    [K in keyof TFields]: TFields[K] extends Field<infer TValue>
        ? TValue
        : never;
};

/**
 * Checks whether some value is function or not.
 *
 * @param f Value that should be checked whether it is function or not
 * @returns true if value is a function, false otherwise
 */
const isFunction = (f: unknown): f is Function => Object.prototype.toString.call(f) == '[object Function]';

/**
 * Extracts the values from form fields' objects.
 *
 * @param fields Form's fields
 * @returns object containing form fields' values
 */
export const extractValues = <TFields extends FieldCollection<TFields>>(fields: TFields): ExtractedValues<TFields> => {
    const fieldEntries = Object.entries(fields) as FieldEntries<TFields>;

    return fieldEntries
        .reduce(
            (acc, [k, field]) => ({ ...acc, [k]: field.value }),
            {} as ExtractedValues<TFields>
        );
};

/**
 * Sets the values of form fields without changing dirty flag.
 * When form is reset, these values will be used as initial values.
 *
 * @param fields Form's fields
 * @param values Form's fields new values
 */
export const setValues = (fields: Fields, values: Record<string, unknown>) => {
    Object
        .entries(fields)
        .forEach(([k, v]) => {
            if (Object.prototype.hasOwnProperty.call(values, k)) {
                v.setValue(values[k]);
            }
        });
};

/**
 * Validates all forms' fields.
 *
 * @param fields Form's fields
 * @returns true if there is any error in the form, false otherwise.
 *          Promise with same result when at least one validation function resolved to Promise.
 */
export const validateFields = (fields: Fields) => {
    // Checks whether all fields have correct validation function
    Object
        .entries(fields)
        .forEach(([k, v]) => {
            if (!isFunction(v.validate)) {
                throw new Error(`Field ${k} doesn't have validation function of correct type.`);
            }
        });

    // Validate all fields
    const validationResults =
        Object.values(fields)
              .map(field => field.validate(field.value));

    // When all results are known (not Promise) return true if there are any errors
    if (validationResults.every(result => typeof result === "boolean"))
        return validationResults.some(result => result);

    // Resolve all validation promises and return
    return new Promise<boolean>((resolve, reject) => {
        Promise.all(validationResults.map(result => Promise.resolve(result)))
               .then(results => resolve(results.some(result => result)))
               .catch((reason) => reject(reason));
    });
};

/**
 * Checks if any of the form fields are dirty (have changed from initial values).
 *
 * @param fields Form's fields
 * @returns true if any field is dirty, false otherwise
 */
export const isDirty = (fields: Fields) => {
    return Object.values(fields).some(field => field.dirty);
};

/**
 * Resets forms' fields to their initial values.
 *
 * @param fields Form's fields
 */
export const resetFields = (fields: Fields) => {
    // Checks whether all fields have correct validation function
    Object
        .entries(fields)
        .forEach(([k, v]) => {
            if (!isFunction(v.reset)) {
                throw new Error(`Field ${k} doesn't have reset function of correct type.`);
            }
        });

    // Resets all fields
    Object.values(fields)
          .forEach((cur) => cur.reset());
};

/**
 * Validates the forms' fields and invokes the provided callback with extracted
 * form's values.
 *
 * @param fields Form's fields
 * @param onSubmit On submit callback
 * @returns Returns the return value of onSubmit callback,
 *          wrapped in Promise if at least one validation function resolved to Promise.
 *          Returns undefined when form is not valid and onSubmit callback is not invoked or onSubmit function returns void.
 */
export const submitForm = <TFields extends FieldCollection<TFields>>(fields: TFields, onSubmit: (values: ExtractedValues<TFields>) => unknown) => {
    const validationResultHasErrors = validateFields(fields);
    if (typeof validationResultHasErrors === "boolean") {
        if (validationResultHasErrors) {
            return undefined;
        } else {
            return onSubmit(extractValues(fields));
        }
    } else {
        return new Promise((resolve, reject) => {
            validationResultHasErrors.then(hasErrors => {
                if (hasErrors) resolve(undefined);
                else resolve(onSubmit(extractValues(fields)));
            }).catch(reject);
        });
    }
};

/**
 * Resets the forms' fields and invokes the provided callback.
 *
 * @param fields Form's fields
 * @param onCancel On cancel callback
 */
export const cancelForm = (fields: Fields, onCancel: () => void) => {
    resetFields(fields);
    onCancel();
};
