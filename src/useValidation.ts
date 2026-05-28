import { useState } from 'react';

/**
 * Configuration for the useValidation hook.
 */
export interface FieldConfig {
    receiveEvent?: boolean;
    reversed?: boolean;
    ignoreDirtiness?: boolean;
}

/**
 * Represents the return type of the useValidation hook.
 */
export interface Field<T = unknown> {
    value: T;
    error: boolean;
    dirty: boolean;
    setValue(v: T): void;
    onChange(e: unknown, config?: FieldConfig): void;
    onBlur(event: unknown, config?: FieldConfig): void;
    validate(v: T, config?: FieldConfig): boolean | Promise<boolean>;
    reset(): void;
    props: {
        value: T;
        onChange: Field<T>['onChange'];
        onBlur: Field<T>['onBlur'];
    };
}

/**
 * Represents a map of form fields.
 */
export interface Fields {
    [key: string]: Field;
}

// Default configuration
const DEFAULT_CONFIG: Required<FieldConfig> = {
    receiveEvent: true,
    reversed: false,
    ignoreDirtiness: false
};

/**
 * Function represents the useValidation hook.
 *
 * @param defaultValue Default value
 * @param validationFn Function used for value validation
 * @param config Hook configuration
 * @returns object containing current value, error flag, onBlur and onChange callbacks, validate function and reset function
 */
export const useValidation = <T = unknown>(
    defaultValue: T,
    validationFn: (v: T) => boolean | Promise<boolean>,
    config?: FieldConfig
): Field<T> => {
    // Checks whether validation function is really function
    if (!(Object.prototype.toString.call(validationFn) == '[object Function]')) {
        throw new Error('Incorrect type of the validation function.')
    }

    const _config: Required<FieldConfig> = {
        ...DEFAULT_CONFIG,
        ...config
    };

    const [resetToValue, setResetToValue] = useState<T>(defaultValue);
    const [value, setValue] = useState<T>(resetToValue);
    const [error, setError] = useState(false);

    // dirty compares current value with initial value
    const dirty = value !== resetToValue;

    const onChange = (e: unknown, config?: FieldConfig) => {
        const activeConfig = config ?? _config;
        const v = activeConfig.receiveEvent ? (e as { target: { value: T } }).target.value : e as T;
        setValue(v);

        // Value is validated on change, only if previously was incorrect
        if (error) {
            validate(v, activeConfig);
        }
    };

    const onBlur = (_event: unknown, config?: FieldConfig) => {
        const activeConfig = config ?? _config;

        // Value is validated if it is dirty or if dirtiness should be ignored
        if (activeConfig.ignoreDirtiness || dirty) {
            validate(value, activeConfig);
        }
    };

    const _handleSetValue = (v: T) => {
        setResetToValue(v);
        setValue(v);
    };

    const _setValidationResult = (isError: boolean, config?: FieldConfig) => {
        const activeConfig = config ?? _config;

        // Applies the reverse logic if needed
        const _error = activeConfig.reversed ? !isError : isError;
        setError(_error);
        return _error;
    };

    const validate = (v: T, config?: FieldConfig) => {
        // Validates the value
        const validationResult = validationFn(v);
        if (typeof validationResult === "boolean") {
            return _setValidationResult(!validationResult, config);
        } else {
            return new Promise<boolean>((resolve, reject) =>
                Promise.resolve(validationResult)
                    .then(result => resolve(_setValidationResult(!result, config)))
                    .catch(reason => reject(reason)));
        }
    };

    const reset = () => {
        setValue(resetToValue);
        setError(false);
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
};
