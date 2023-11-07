export declare interface FieldConfig {
    receiveEvent: boolean,
    reversed: boolean,
    ignoreDirtiness: boolean
}

export declare interface Field {
    value: any,
    error: boolean,
    onChange: (v: any, config: FieldConfig) => void,
    onBlur: (event: any, config: FieldConfig) => void,
    validate: (v: any, config: FieldConfig) => boolean | Promise<boolean>,
    reset: () => void,
    props: {
        value: Field['value'],
        onChange: Field['onChange'],
        onBlur: Field['onBlur']
    }
}

export declare interface Fields {
    [key: string]: Field
}

export declare function useValidation(initialValue: any, validationFn: (() => boolean) | (() => Promise<boolean>), config: FieldConfig): Field;

export declare function extractValues(fields: Fields): object;

export declare function setValues(fields: Fields, values: object): void;

export declare function validateFields(fields: Fields): boolean | Promise<boolean>;

export declare function resetFields(fields: Fields): void;

export declare function submitForm(fields: Fields, onSubmit: (values: object) => object): Promise<object> | object | undefined;

export declare function cancelForm(fields: Fields, onCancel: () => void): void;

export declare function noError(): true;

export declare function areEqual(v1: any, v2: any): boolean;

export declare function isTrue(v: any): boolean;

export declare function isNotNull(v: any): boolean;

export declare function isNonEmptyString(v: any): boolean;

export declare function isValidNumber(v: any): boolean;

export declare function isPositiveNumber(v: any): boolean;

export declare function isNegativeNumber(v: any): boolean;

export declare function isNonEmptyArray(v: any): boolean;

export declare function isValidEmail(v: any): boolean;
