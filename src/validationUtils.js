
const isFunction = (f) => Object.prototype.toString.call(f) == '[object Function]';

export const extractValues = (fields) => {
    return Object
        .entries(fields)
        .reduce((acc, [k, v]) => ({ ...acc, [k]: v.value }), {});
};

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
    return Object
        .values(fields)
        .forEach((cur) => cur.reset());
};

export const submitForm = (fields, onSubmit) => {
    console.log(validateFields(fields));
    
    if (!validateFields(fields)) {
        onSubmit(extractValues(fields));
    }
}

export const cancelForm = (fields, onCancel) => {
    resetFields(fields);
    onCancel();
}
