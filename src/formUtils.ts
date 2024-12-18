import { useValidation } from "./useValidation.js";

/**
 * Checks whether some value is function or not.
 * 
 * @param f Value that should be checked whether it is function or not
 * @returns true if value is a function, false otherwise 
 */
function isFunction(f: unknown) {
    return Object.prototype.toString.call(f) == '[object Function]';
}

export type Field<T> = ReturnType<typeof useValidation<T>>;
export type Fields = Record<string, Field<any>>;
export type FieldsValues<TFields extends Fields> = {
    [K in keyof TFields]: TFields[K]['value'];
};

/**
 * Extracts the values from form fields' objects.
 * 
 * @param fields Form's fields
 * @returns object containing form fields' values
 */
export function extractValues<TFields extends Fields>(fields: TFields): FieldsValues<typeof fields> {
    return Object
        .entries(fields)
        .reduce<FieldsValues<TFields>>((acc, [k, v]) => ({ ...acc, [k]: v.value }), {} as FieldsValues<TFields>);
}

/**
 * Sets the values of form fields without changing dirty flag.
 * When form is reset, these values will be used as initial values.
 * 
 * @param fields Form's fields
 * @param values Form's fields new values
 */
export function setValues<TFields extends Fields>(fields: TFields, values: FieldsValues<typeof fields>) {
    Object
        .entries(fields)
        .forEach(([key, value]) => {
            if (key in values) {
                value.setValue(values[key]);
            }
        });
}

/**
 * Validates all forms' fields.
 * 
 * @param fields Form's fields
 * @returns true if there is any error in the form, false otherwise. 
 *                                     Promise with same result when at least one validation function resolved to Promise.
 */
export function validateFields<TFields extends Fields>(fields: TFields) {
    // Checks whether all fields have correct validation function
    Object
        .entries(fields)
        .forEach(([k, v]) => {
            if (!isFunction(v.validate)) {
                throw new Error(`Field ${k} doesn't have validation function of correct type.`);
            }
        });

    // Validate all fields
    var validationResults = Object.values(fields)
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
}

/**
 * Resets forms' fields to their initial values.
 * 
 * @param fields Form's fields
 */
export function resetFields<TFields extends Fields>(fields: TFields) {
    // Checks whether all fields have correct validation function
    Object
        .entries(fields)
        .forEach(([k, v]) => {
            if (!isFunction(v.reset)) {
                throw new Error(`Field ${k} doesn't have reset function of correct type.`);
            }
        });

    // Validates all fields
    Object.values(fields)
        .forEach((cur) => cur.reset());
}

/**
 * Validates the forms' fields and invokes the provided callback with extracted 
 * form's values.
 * 
 * @param fields Form's fields
 * @param onSubmit On submit callback
 * @returns Returns the return value of onSubmit callback, 
 *                                       wrapped in Promise if at least one validation function resolved to Promise. 
 *                                       Returns undefined when form is not valid and onSubmit callback is not invoked or onSubmit function returns void.
 */
export function submitForm<TResponse, TFields extends Fields>(
    fields: TFields,
    onSubmit: (values: FieldsValues<typeof fields>) => TResponse | Promise<TResponse>) {
    const validationResultHasErrors = validateFields(fields);
    if (typeof validationResultHasErrors === "boolean") {
        if (validationResultHasErrors) {
            return undefined;
        } else {
            return onSubmit(extractValues(fields));
        }
    } else {
        return new Promise<TResponse | null>((resolve, reject) => {
            validationResultHasErrors.then(hasErrors => {
                if (hasErrors) resolve(null);
                else resolve(onSubmit(extractValues(fields)));
            }).catch(reject);
        });
    }
}

/**
 * Resets the forms' fields and invokes the provided callback.
 * 
 * @param fields Form's fields
 * @param onCancel On cancel callback
 */
export function cancelForm<TFields extends Fields>(fields: TFields, onCancel: () => void) {
    resetFields(fields);
    onCancel();
}
