/**
 * No error validation function. Always returns true, indicating that field's
 * value is correct.
 *
 * @returns true
 */
export const noError = () => true as const;

/**
 * Checks whether two value are equal. Should not be used with complex data types
 * such as object or arrays as it will compare their references.
 *
 * @param v1 First value
 * @param v2 Second value
 * @returns true if values are equal (indicating that no error is present), false otherwise
 */
export const areEqual = (v1: unknown, v2: unknown) => v1 === v2;

/**
 * Checks if value is true.
 *
 * @param v Value
 * @returns true if value is true (indicating that no error is present), false otherwise
 */
export const isTrue = (v: unknown) => typeof v === "boolean" && v;

/**
 * Checks if value is null.
 *
 * @param v Value
 * @returns true if value is null (indicating that no error is present), false otherwise
 */
export const isNotNull = (v: unknown) => v !== null;

/**
 * Checks if value is non empty string.
 *
 * @param v Value
 * @returns true if value is non empty string (indicating that no error is present), false otherwise
 */
export const isNonEmptyString = (v: unknown) => typeof v === "string" && v.trim() !== '';

/**
 * Checks if value is valid number.
 *
 * @param v Value
 * @returns true if value is valid number (indicating that no error is present), false otherwise
 */
export const isValidNumber = (v: unknown) => !Number.isNaN(parseFloat(v as string));

/**
 * Checks if value is positive number.
 *
 * @param v Value
 * @returns true if value is positive number (indicating that no error is present), false otherwise
 */
export const isPositiveNumber = (v: unknown) => isValidNumber(v) && parseFloat(v as string) >= 0;

/**
 * Checks if value is negative number.
 *
 * @param v Value
 * @returns true if value is negative number (indicating that no error is present), false otherwise
 */
export const isNegativeNumber = (v: unknown) => isValidNumber(v) && parseFloat(v as string) < 0;

/**
 * Checks if value is non empty array.
 *
 * @param v Value
 * @returns true if value is non empty array (indicating that no error is present), false otherwise
 */
export const isNonEmptyArray = (v: unknown) => Array.isArray(v) && v.length > 0;

// Source: https://stackoverflow.com/a/201378/563228
const emailRegex = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i);

/**
 * Checks if value is valid email address (RFC 5322).
 *
 * @param v Value
 * @returns true if value is valid email address (RFC 5322), false otherwise
 */
export const isValidEmail = (v: unknown) => isNonEmptyString(v) && emailRegex.test(v as string);

/**
 * Checks if the value is a valid IPv4 or IPv6 address.
 *
 * @param v Value
 * @returns true if the value is a valid IPv4 or IPv6 address, false otherwise
 */
export const isValidIpAddress = (v: unknown) => {
  const ipv4RegExp = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6RegExp = /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i;

  if (typeof v !== 'string') return false;

  if (ipv4RegExp.test(v)) {
    return v.split('.').every((part) => parseInt(part) <= 255);
  }

  if (ipv6RegExp.test(v)) {
    return v.split(':').every((part) => part.length <= 4);
  }

  return false;
};
