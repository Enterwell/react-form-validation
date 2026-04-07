import type { Fields } from './useValidation';

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
export const extractValues = (fields: Fields): Record<string, unknown> => {
    return Object
        .entries(fields)
        .reduce<Record<string, unknown>>((acc, [k, v]) => ({ ...acc, [k]: v.value }), {});
};

/**
 * Sets the values of form fields without changing dirty flag.
 * When form is reset, these values will be used as initial values.
 *
 * @param fields Form's fields
 * @param values Form's fields new values
 */
export const setValues = (fields: Fields, values: Record<string, unknown>): void => {
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
export const validateFields = (fields: Fields): boolean | Promise<boolean> => {
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
export const isDirty = (fields: Fields): boolean => {
    return Object.values(fields).some(field => field.dirty);
};

/**
 * Resets forms' fields to their initial values.
 *
 * @param fields Form's fields
 */
export const resetFields = (fields: Fields): void => {
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
export const submitForm = (fields: Fields, onSubmit: (values: Record<string, unknown>) => unknown): Promise<unknown> | unknown | undefined => {
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
export const cancelForm = (fields: Fields, onCancel: () => void): void => {
    resetFields(fields);
    onCancel();
};
