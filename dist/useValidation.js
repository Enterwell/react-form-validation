"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useValidation = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Default configuration
var DEFAULT_CONFIG = {
  reversed: false,
  ignoreDirtiness: false
};
/**
 * Function represents the useValidation hook.
 * 
 * @param {any} defaultValue Default value
 * @param {function} validationFn Function used for value validation
 * @param {Object} config Hook configuration
 * @returns object containing current value, error flag, onBlur and onChange callbacks, validate function and reset function
 */

var useValidation = function useValidation(defaultValue, validationFn, config) {
  // Checks whether validation function is really funcion
  if (!Object.prototype.toString.call(validationFn) == '[object Function]') {
    throw new Error('Incorrect type of the validation function.');
  }

  var _config = _objectSpread(_objectSpread({}, DEFAULT_CONFIG), config);

  var _useState = (0, _react.useState)(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      dirty = _useState6[0],
      setDirty = _useState6[1];

  var onChange = function onChange(v) {
    setValue(v); // Setting dirty flag indicates that value has been changed

    if (!_config.ignoreDirtiness && !dirty) {
      setDirty(true);
    } // Value is validated on change, only if previously was incorrect


    if (error) {
      validate(v);
    }
  };

  var onBlur = function onBlur() {
    // Value is validated if it is dirty or if dirtiness should be ignored
    if (_config.ignoreDirtiness || dirty) {
      validate(value);
    } // Resets the dirty flag


    if (!_config.ignoreDirtiness && !dirty) {
      setDirty(false);
    }
  };

  var validate = function validate(v) {
    // Validates the value and applies the reverse logic if needed
    var _error = !validationFn(v);

    _error = _config.reversed ? !_error : _error;
    setError(_error);
    return _error;
  };

  var reset = function reset() {
    setValue(defaultValue);
    setError(false);
    setDirty(false);
  };

  return {
    value: value,
    error: error,
    onChange: onChange,
    onBlur: onBlur,
    validate: validate,
    reset: reset
  };
};

exports.useValidation = useValidation;