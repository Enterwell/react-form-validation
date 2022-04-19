import { useState } from 'react';

// Default configuration
const DEFAULT_CONFIG = {
    receiveEvent: true,
    reversed: false,
    ignoreDirtiness: false
}

/**
 * Function represents the useValidation hook.
 * 
 * @param {any} defaultValue Default value
 * @param {function} validationFn Function used for value validation
 * @param {Object} config Hook configuration
 * @returns object containing current value, error flag, onBlur and onChange callbacks, validate function and reset function
 */
export const useValidation = (defaultValue, validationFn, config) => {
    // Checks whether validation function is really function
    if (!(Object.prototype.toString.call(validationFn) == '[object Function]')) {
        throw new Error('Incorrect type of the validation function.')
    }

    const _config = {
        ...DEFAULT_CONFIG,
        ...config
    };

    const [value, setValue] = useState(defaultValue);
    const [error, setError] = useState(false);
    const [dirty, setDirty] = useState(false);

    const onChange = (e, config) => {
        const activeConfig = config ?? _config;
        const v = activeConfig.receiveEvent ? e.target.value : e;
        setValue(v);

        // Setting dirty flag indicates that value has been changed
        if (!activeConfig.ignoreDirtiness && !dirty) {
            setDirty(true);
        }

        // Value is validated on change, only if previously was incorrect
        if (error) {
            validate(v, activeConfig);
        }
    };

    const onBlur = (config) => {
        const activeConfig = config ?? _config;

        // Value is validated if it is dirty or if dirtiness should be ignored
        if (activeConfig.ignoreDirtiness || dirty) {
            validate(value, activeConfig);
        }

        // Resets the dirty flag
        if (!activeConfig.ignoreDirtiness && !dirty) {
            setDirty(false);
        }
    };

    const _setValidationResult = (isError, config) => {
        const activeConfig = config ?? _config;

        // Applies the reverse logic if needed
        const _error = activeConfig.reversed ? !isError : isError;
        setError(_error);
        return _error;
    }

    const validate = (v, config) => {
        // Validates the value
        const validationResult = validationFn(v);
        if (typeof validationResult === "boolean") {
            return _setValidationResult(!validationResult, config);
        } else {
            return new Promise((resolve, reject) =>
                Promise.resolve(validationResult)
                    .then(result => resolve(_setValidationResult(!result, config)))
                    .catch(reason => reject(reason)));
        }
    };

    const reset = () => {
        setValue(defaultValue);
        setError(false);
        setDirty(false);
    };

    return {
        value,
        error,
        onChange,
        onBlur,
        validate,
        reset
    };
};
