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
 * Sets the values of form fields without changing dirty flag.
 * When form is reset, these values will be used as initial values.
 * 
 * @param {Object.<string, any>} fields Form's fields
 * @param {Object.<string, any>} values Form's fields new values
 */
export const setValues = (fields, values) => {
    Object
        .entries(fields)
        .forEach(([k, v]) => {
            if (values.hasOwnProperty(k)) {
                v.setValue(values[k]);
            }
        });
};

/**
 * Validates all forms' fields.
 * 
 * @param {Object.<string, Object>} fields Form's fields
 * @returns {boolean|Promise<boolean>} true if there is any error in the form, false otherwise. 
 *                                     Promise with same result when at least one validation function resolved to Promise.
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

    // Validate all fields
    var validationResults = 
        Object.values(fields)
              .map(field => field.validate(field.value));

    // When all results are known (not Promise) return true if there are any errors
    if (validationResults.every(result => typeof result === "boolean"))
        return validationResults.some(result => result);

    // Resolve all validation promises and return 
    return new Promise((resolve, reject) => {
        Promise.all(validationResults.map(result => Promise.resolve(result)))
               .then(results => resolve(results.some(result => result)))
               .catch((reason) => reject(reason));
    });
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
    Object.values(fields)
          .forEach((cur) => cur.reset());
};

/**
 * Validates the forms' fields and invokes the provided callback with extracted 
 * form's values.
 * 
 * @param {Object.<string, Object>} fields Form's fields
 * @param {function} onSubmit On submit callback
 * @returns {Promise<unknown> | unknown | undefined} Returns the return value of onSubmit callback, 
 *                                       wrapped in Promise if at least one validation function resolved to Promise. 
 *                                       Returns undefined when form is not valid and onSubmit callback is not invoked or onSubmit function returns void.
 */
export const submitForm = (fields, onSubmit) => {
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
                if (hasErrors) resolve();
                else resolve(onSubmit(extractValues(fields)));
            }).catch(reject);
        });
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
