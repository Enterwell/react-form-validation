import { useState } from 'react';

export type ValidationFunction<T> = (value: T) => boolean | Promise<boolean>;
export type FieldConfiguration = {
    receiveEvent: boolean,
    reversed: boolean,
    ignoreDirtiness: boolean
};

// Default configuration
const DEFAULT_CONFIG: FieldConfiguration = {
    receiveEvent: true,
    reversed: false,
    ignoreDirtiness: false
}

/**
 * Function represents the useValidation hook.
 * 
 * @param defaultValue Default value
 * @param validationFn Function used for value validation
 * @param config Hook configuration
 * @returns object containing current value, error flag, onBlur and onChange callbacks, validate function and reset function
 */
export function useValidation<T>(defaultValue: T, validationFn: ValidationFunction<T>, config: Partial<FieldConfiguration> = {}) {
    // Checks whether validation function is really function
    if (!(Object.prototype.toString.call(validationFn) == '[object Function]')) {
        throw new Error('Incorrect type of the validation function.');
    }

    const _config = {
        ...DEFAULT_CONFIG,
        ...config
    };

    const [resetToValue, setResetToValue] = useState(defaultValue);
    const [value, setValue] = useState<T>(resetToValue);
    const [error, setError] = useState(false);
    const [dirty, setDirty] = useState(false);

    const onChange = (e: T | React.ChangeEvent<HTMLInputElement>, config: Partial<FieldConfiguration> = {}) => {
        const activeConfig = config ?? _config;
        const target = e != null && typeof e === 'object' && 'target' in e && 'value' in e.target ? e.target : null;
        const v = activeConfig.receiveEvent ? (target ? target.value as T : null) : e as T;
        setValue(v ?? defaultValue);

        // Setting dirty flag indicates that value has been changed
        if (!activeConfig.ignoreDirtiness && !dirty) {
            setDirty(true);
        }

        // Value is validated on change, only if previously was incorrect
        if (error) {
            validate(v, activeConfig);
        }
    };

    const onBlur = (_event: unknown, config: Partial<FieldConfiguration> = {}) => {
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

    const _handleSetValue = (v: typeof defaultValue) => {
        setResetToValue(v);
        setValue(v);
    };

    const _setValidationResult = (isError: boolean, config: Partial<FieldConfiguration> = {}) => {
        const activeConfig = config ?? _config;

        // Applies the reverse logic if needed
        const _error = activeConfig.reversed ? !isError : isError;
        setError(_error);
        return _error;
    };

    const validate = (v: T | null, config: Partial<FieldConfiguration> = {}) => {
        // Validates the value
        const validationResult = validationFn(v as T);
        if (typeof validationResult === "boolean") {
            return _setValidationResult(!validationResult, config);
        } else {
            return new Promise((resolve, reject) => Promise.resolve(validationResult)
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
        dirty,
        onChange,
        onBlur,
        setValue: _handleSetValue,
        validate,
        reset,
        props: {
            value,
            onChange,
            onBlur
        }
    };
}
