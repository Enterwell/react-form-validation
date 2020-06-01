"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNonEmptyArray = exports.isNegativeNumber = exports.isPositiveNumber = exports.isValidNumber = exports.isNonEmptyString = exports.isNotNull = exports.isTrue = exports.areEqual = exports.noError = void 0;

/**
 * No error validation function. Always returns false, indicating that field's 
 * value is correct.
 * 
 * @returns true
 */
var noError = function noError() {
  return true;
};
/**
 * Checks whether two value are equal. Should not be used with complex data types
 * such as object or arrays as it will compare their references.
 * 
 * @param {any} v1 First value
 * @param {any} v2 Second value
 * @returns true if values are equal (indicating that no error is present), false otherwise
 */


exports.noError = noError;

var areEqual = function areEqual(v1, v2) {
  return v1 === v2;
};
/**
 * Checks if value is true.
 * 
 * @param {any} v Value
 * @returns true if value is true (indicating that no error is present), false otherwise
 */


exports.areEqual = areEqual;

var isTrue = function isTrue(v) {
  return typeof v === "boolean" || v;
};
/**
 * Checks if value is null.
 * 
 * @param {any} v Value
 * @returns true if value is null (indicating that no error is present), false otherwise
 */


exports.isTrue = isTrue;

var isNotNull = function isNotNull(v) {
  return v !== null;
};
/**
 * Checks if value is non empty string.
 * 
 * @param {any} v Value
 * @returns true if value is non empty string (indicating that no error is present), false otherwise
 */


exports.isNotNull = isNotNull;

var isNonEmptyString = function isNonEmptyString(v) {
  return typeof v === "string" && v.trim() !== '';
};
/**
 * Checks if value is valid number.
 * 
 * @param {any} v Value
 * @returns true if value is valid number (indicating that no error is present), false otherwise
 */


exports.isNonEmptyString = isNonEmptyString;

var isValidNumber = function isValidNumber(v) {
  return !Number.isNaN(parseFloat(v, 10));
};
/**
 * Checks if value is positive number.
 * 
 * @param {any} v Value
 * @returns true if value is positive number (indicating that no error is present), false otherwise
 */


exports.isValidNumber = isValidNumber;

var isPositiveNumber = function isPositiveNumber(v) {
  return isValidNumber(v) && parseFloat(v, 10) >= 0;
};
/**
 * Checks if value is negative number.
 * 
 * @param {any} v Value
 * @returns true if value is negative number (indicating that no error is present), false otherwise
 */


exports.isPositiveNumber = isPositiveNumber;

var isNegativeNumber = function isNegativeNumber(v) {
  return isValidNumber(v) && parseFloat(v, 10) < 0;
};
/**
 * Checks if value is non empty array.
 * 
 * @param {any} v Value
 * @returns true if value is non empty array (indicating that no error is present), false otherwise
 */


exports.isNegativeNumber = isNegativeNumber;

var isNonEmptyArray = function isNonEmptyArray(v) {
  return Array.isArray(v) && v.length > 0;
};

exports.isNonEmptyArray = isNonEmptyArray;