"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useValidation", {
  enumerable: true,
  get: function get() {
    return _useValidation.useValidation;
  }
});
Object.defineProperty(exports, "extractValues", {
  enumerable: true,
  get: function get() {
    return _formUtils.extractValues;
  }
});
Object.defineProperty(exports, "validateFields", {
  enumerable: true,
  get: function get() {
    return _formUtils.validateFields;
  }
});
Object.defineProperty(exports, "resetFields", {
  enumerable: true,
  get: function get() {
    return _formUtils.resetFields;
  }
});
Object.defineProperty(exports, "submitForm", {
  enumerable: true,
  get: function get() {
    return _formUtils.submitForm;
  }
});
Object.defineProperty(exports, "cancelForm", {
  enumerable: true,
  get: function get() {
    return _formUtils.cancelForm;
  }
});
Object.defineProperty(exports, "noError", {
  enumerable: true,
  get: function get() {
    return _validationFunctions.noError;
  }
});
Object.defineProperty(exports, "areEqual", {
  enumerable: true,
  get: function get() {
    return _validationFunctions.areEqual;
  }
});
Object.defineProperty(exports, "isTrue", {
  enumerable: true,
  get: function get() {
    return _validationFunctions.isTrue;
  }
});
Object.defineProperty(exports, "isNotNull", {
  enumerable: true,
  get: function get() {
    return _validationFunctions.isNotNull;
  }
});
Object.defineProperty(exports, "isNonEmptyString", {
  enumerable: true,
  get: function get() {
    return _validationFunctions.isNonEmptyString;
  }
});
Object.defineProperty(exports, "isValidNumber", {
  enumerable: true,
  get: function get() {
    return _validationFunctions.isValidNumber;
  }
});
Object.defineProperty(exports, "isPositiveNumber", {
  enumerable: true,
  get: function get() {
    return _validationFunctions.isPositiveNumber;
  }
});
Object.defineProperty(exports, "isNegativeNumber", {
  enumerable: true,
  get: function get() {
    return _validationFunctions.isNegativeNumber;
  }
});
Object.defineProperty(exports, "isNonEmptyArray", {
  enumerable: true,
  get: function get() {
    return _validationFunctions.isNonEmptyArray;
  }
});

var _useValidation = require("./useValidation");

var _formUtils = require("./formUtils");

var _validationFunctions = require("./validationFunctions");

function cov_1t0gb1f0dw() {
  var path = "C:\\Users\\Aleks\\Documents\\GitHub\\react-form-validation\\src\\index.js";
  var hash = "dd4ac340f5d0ac52d45110228698f805c48d68db";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Aleks\\Documents\\GitHub\\react-form-validation\\src\\index.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "dd4ac340f5d0ac52d45110228698f805c48d68db"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1t0gb1f0dw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1t0gb1f0dw();