"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelForm = exports.submitForm = exports.resetFields = exports.validateFields = exports.extractValues = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Checks whether some value is function or not.
 * 
 * @param {any} f Value that should be checked whether it is function or not
 * @returns true if value is a function, false otherwise 
 */
var isFunction = function isFunction(f) {
  return Object.prototype.toString.call(f) == '[object Function]';
};
/**
 * Extracts the values from form fields' objects.
 * 
 * @param {Object.<string, any>} fields Form's fields
 * @returns object containing form fields' values
 */


var extractValues = function extractValues(fields) {
  return Object.entries(fields).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, k, v.value));
  }, {});
};
/**
 * Validates all forms' fields.
 * 
 * @param {Object.<string, Object>} fields Form's fields
 * @returns true if there is any error in the form, false otherwise
 */


exports.extractValues = extractValues;

var validateFields = function validateFields(fields) {
  // Checks whether all fields have correct validation function
  Object.entries(fields).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        k = _ref4[0],
        v = _ref4[1];

    if (!isFunction(v.validate)) {
      throw new Error("Field ".concat(k, " doesn't have validation function of correct type."));
    }
  }); // Validates all fields

  return Object.values(fields).reduce(function (acc, cur) {
    return cur.validate(cur.value) || acc;
  }, false);
};
/**
 * Resets forms' fields to their initial values.
 * 
 * @param {Object.<string, Object>} fields Form's fields
 */


exports.validateFields = validateFields;

var resetFields = function resetFields(fields) {
  // Checks whether all fields have correct validation function
  Object.entries(fields).forEach(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        k = _ref6[0],
        v = _ref6[1];

    if (!isFunction(v.reset)) {
      throw new Error("Field ".concat(k, " doesn't have reset function of correct type."));
    }
  }); // Validates all fields

  Object.values(fields).forEach(function (cur) {
    return cur.reset();
  });
};
/**
 * Validates the forms' fields and invokes the provided callback with extracted 
 * form's values.
 * 
 * @param {Object.<string, Object>} fields Form's fields
 * @param {function} onSubmit On submit callback
 */


exports.resetFields = resetFields;

var submitForm = function submitForm(fields, onSubmit) {
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


exports.submitForm = submitForm;

var cancelForm = function cancelForm(fields, onCancel) {
  resetFields(fields);
  onCancel();
};

exports.cancelForm = cancelForm;