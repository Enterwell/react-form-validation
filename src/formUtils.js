/**
 * Checks whether some value is function or not.
 * 
 * @param {any} f Value that should be checked whether it is function or not
 * @returns true if value is a function, false otherwise 
 */
const isFunction = (f) => Object.prototype.toString.call(f) == '[object Function]';

/**
 * Extracts the values from form fields' objects.
 * 
 * @param {Object.<string, any>} fields Form's fields
 * @returns object containing form fields' values
 */
export const extractValues = (fields) => {
    return Object
        .entries(fields)
        .reduce((acc, [k, v]) => ({ ...acc, [k]: v.value }), {});
};

/**
 * Validates all forms' fields.
 * 
 * @param {Object.<string, Object>} fields Form's fields
 * @returns true if there is any error in the form, false otherwise
 */
export const validateFields = (fields) => {
    // Checks whether all fields have correct validation function
    Object
        .entries(fields)
        .forEach(([k, v]) => {
            if (!isFunction(v.validate)) {
                throw new Error(`Field ${k} doesn't have validation function of correct type.`);
            }
        });

    // Validates all fields
    return Object
        .values(fields)
        .reduce((acc, cur) => cur.validate(cur.value) || acc, false);
};

/**
 * Resets forms' fields to their initial values.
 * 
 * @param {Object.<string, Object>} fields Form's fields
 */
export const resetFields = (fields) => {
    // Checks whether all fields have correct validation function
    Object
        .entries(fields)
        .forEach(([k, v]) => {
            if (!isFunction(v.reset)) {
                throw new Error(`Field ${k} doesn't have reset function of correct type.`);
            }
        });
    
    // Validates all fields
    Object
        .values(fields)
        .forEach((cur) => cur.reset());
};

/**
 * Validates the forms' fields and invokes the provided callback with extracted 
 * form's values.
 * 
 * @param {Object.<string, Object>} fields Form's fields
 * @param {function} onSubmit On submit callback
 */
export const submitForm = (fields, onSubmit) => {    
    if (!validateFields(fields)) {
        onSubmit(extractValues(fields));
    }
};

/**
 * Resets the forms' fields and invokes the provided callback.
 * 
 * @param {Object.<string, Object>} fields Form's fields
 * @param {function} onCancel On cancel callback
 */
export const cancelForm = (fields, onCancel) => {
    resetFields(fields);
    onCancel();
};
