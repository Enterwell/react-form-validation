/**
 * No error validation function. Always returns false, indicating that field's 
 * value is correct.
 * 
 * @returns true
 */
export const noError = () => true;

/**
 * Checks whether two value are equal. Should not be used with complex data types
 * such as object or arrays as it will compare their references.
 * 
 * @param {any} v1 First value
 * @param {any} v2 Second value
 * @returns true if values are equal (indicating that no error is present), false otherwise
 */
export const areEqual = (v1, v2) => v1 === v2;

/**
 * Checks if value is true.
 * 
 * @param {any} v Value
 * @returns true if value is true (indicating that no error is present), false otherwise
 */
export const isTrue = (v) => typeof v === "boolean" || v;

/**
 * Checks if value is null.
 * 
 * @param {any} v Value
 * @returns true if value is null (indicating that no error is present), false otherwise
 */
export const isNotNull = (v) => v !== null;

/**
 * Checks if value is non empty string.
 * 
 * @param {any} v Value
 * @returns true if value is non empty string (indicating that no error is present), false otherwise
 */
export const isNonEmptyString = (v) => typeof v === "string" && v.trim() !== '';

/**
 * Checks if value is valid number.
 * 
 * @param {any} v Value
 * @returns true if value is valid number (indicating that no error is present), false otherwise
 */
export const isValidNumber = (v) => !Number.isNaN(parseFloat(v, 10));

/**
 * Checks if value is positive number.
 * 
 * @param {any} v Value
 * @returns true if value is positive number (indicating that no error is present), false otherwise
 */
export const isPositiveNumber = (v) => isValidNumber(v) && parseFloat(v, 10) >= 0;

/**
 * Checks if value is negative number.
 * 
 * @param {any} v Value
 * @returns true if value is negative number (indicating that no error is present), false otherwise
 */
export const isNegativeNumber = (v) => isValidNumber(v) && parseFloat(v, 10) < 0;

/**
 * Checks if value is non empty array.
 * 
 * @param {any} v Value
 * @returns true if value is non empty array (indicating that no error is present), false otherwise
 */
export const isNonEmptyArray = (v) => Array.isArray(v) && v.length > 0;
