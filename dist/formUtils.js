"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelForm = exports.submitForm = exports.resetFields = exports.validateFields = exports.extractValues = void 0;

function cov_3q2kka8lj() {
  var path = "C:\\Users\\Aleks\\Documents\\GitHub\\react-form-validation\\src\\formUtils.js";
  var hash = "38764cb0bc31c60445a6b18be4c26c28990cdb75";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Aleks\\Documents\\GitHub\\react-form-validation\\src\\formUtils.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 7,
          column: 82
        }
      },
      "1": {
        start: {
          line: 7,
          column: 26
        },
        end: {
          line: 7,
          column: 82
        }
      },
      "2": {
        start: {
          line: 15,
          column: 29
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "3": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 18,
          column: 65
        }
      },
      "4": {
        start: {
          line: 18,
          column: 34
        },
        end: {
          line: 18,
          column: 58
        }
      },
      "5": {
        start: {
          line: 28,
          column: 30
        },
        end: {
          line: 53,
          column: 1
        }
      },
      "6": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 36,
          column: 11
        }
      },
      "7": {
        start: {
          line: 33,
          column: 12
        },
        end: {
          line: 35,
          column: 13
        }
      },
      "8": {
        start: {
          line: 34,
          column: 16
        },
        end: {
          line: 34,
          column: 96
        }
      },
      "9": {
        start: {
          line: 40,
          column: 8
        },
        end: {
          line: 41,
          column: 56
        }
      },
      "10": {
        start: {
          line: 41,
          column: 28
        },
        end: {
          line: 41,
          column: 55
        }
      },
      "11": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 45,
          column: 56
        }
      },
      "12": {
        start: {
          line: 44,
          column: 42
        },
        end: {
          line: 44,
          column: 69
        }
      },
      "13": {
        start: {
          line: 45,
          column: 8
        },
        end: {
          line: 45,
          column: 56
        }
      },
      "14": {
        start: {
          line: 45,
          column: 48
        },
        end: {
          line: 45,
          column: 54
        }
      },
      "15": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 52,
          column: 7
        }
      },
      "16": {
        start: {
          line: 49,
          column: 8
        },
        end: {
          line: 51,
          column: 47
        }
      },
      "17": {
        start: {
          line: 49,
          column: 52
        },
        end: {
          line: 49,
          column: 75
        }
      },
      "18": {
        start: {
          line: 50,
          column: 29
        },
        end: {
          line: 50,
          column: 68
        }
      },
      "19": {
        start: {
          line: 50,
          column: 60
        },
        end: {
          line: 50,
          column: 66
        }
      },
      "20": {
        start: {
          line: 51,
          column: 31
        },
        end: {
          line: 51,
          column: 45
        }
      },
      "21": {
        start: {
          line: 60,
          column: 27
        },
        end: {
          line: 74,
          column: 1
        }
      },
      "22": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 68,
          column: 11
        }
      },
      "23": {
        start: {
          line: 65,
          column: 12
        },
        end: {
          line: 67,
          column: 13
        }
      },
      "24": {
        start: {
          line: 66,
          column: 16
        },
        end: {
          line: 66,
          column: 91
        }
      },
      "25": {
        start: {
          line: 71,
          column: 4
        },
        end: {
          line: 73,
          column: 39
        }
      },
      "26": {
        start: {
          line: 73,
          column: 26
        },
        end: {
          line: 73,
          column: 37
        }
      },
      "27": {
        start: {
          line: 83,
          column: 26
        },
        end: {
          line: 95,
          column: 1
        }
      },
      "28": {
        start: {
          line: 84,
          column: 29
        },
        end: {
          line: 84,
          column: 51
        }
      },
      "29": {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 94,
          column: 5
        }
      },
      "30": {
        start: {
          line: 86,
          column: 8
        },
        end: {
          line: 87,
          column: 44
        }
      },
      "31": {
        start: {
          line: 87,
          column: 12
        },
        end: {
          line: 87,
          column: 44
        }
      },
      "32": {
        start: {
          line: 89,
          column: 8
        },
        end: {
          line: 93,
          column: 11
        }
      },
      "33": {
        start: {
          line: 90,
          column: 12
        },
        end: {
          line: 92,
          column: 13
        }
      },
      "34": {
        start: {
          line: 91,
          column: 16
        },
        end: {
          line: 91,
          column: 48
        }
      },
      "35": {
        start: {
          line: 103,
          column: 26
        },
        end: {
          line: 106,
          column: 1
        }
      },
      "36": {
        start: {
          line: 104,
          column: 4
        },
        end: {
          line: 104,
          column: 24
        }
      },
      "37": {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 105,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 19
          },
          end: {
            line: 7,
            column: 20
          }
        },
        loc: {
          start: {
            line: 7,
            column: 26
          },
          end: {
            line: 7,
            column: 82
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 15,
            column: 29
          },
          end: {
            line: 15,
            column: 30
          }
        },
        loc: {
          start: {
            line: 15,
            column: 41
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 15
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 18,
            column: 16
          },
          end: {
            line: 18,
            column: 17
          }
        },
        loc: {
          start: {
            line: 18,
            column: 34
          },
          end: {
            line: 18,
            column: 58
          }
        },
        line: 18
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 28,
            column: 30
          },
          end: {
            line: 28,
            column: 31
          }
        },
        loc: {
          start: {
            line: 28,
            column: 42
          },
          end: {
            line: 53,
            column: 1
          }
        },
        line: 28
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 32,
            column: 17
          },
          end: {
            line: 32,
            column: 18
          }
        },
        loc: {
          start: {
            line: 32,
            column: 29
          },
          end: {
            line: 36,
            column: 9
          }
        },
        line: 32
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 41,
            column: 19
          },
          end: {
            line: 41,
            column: 20
          }
        },
        loc: {
          start: {
            line: 41,
            column: 28
          },
          end: {
            line: 41,
            column: 55
          }
        },
        line: 41
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 44,
            column: 32
          },
          end: {
            line: 44,
            column: 33
          }
        },
        loc: {
          start: {
            line: 44,
            column: 42
          },
          end: {
            line: 44,
            column: 69
          }
        },
        line: 44
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 45,
            column: 38
          },
          end: {
            line: 45,
            column: 39
          }
        },
        loc: {
          start: {
            line: 45,
            column: 48
          },
          end: {
            line: 45,
            column: 54
          }
        },
        line: 45
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 48,
            column: 23
          },
          end: {
            line: 48,
            column: 24
          }
        },
        loc: {
          start: {
            line: 48,
            column: 44
          },
          end: {
            line: 52,
            column: 5
          }
        },
        line: 48
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 49,
            column: 42
          },
          end: {
            line: 49,
            column: 43
          }
        },
        loc: {
          start: {
            line: 49,
            column: 52
          },
          end: {
            line: 49,
            column: 75
          }
        },
        line: 49
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 50,
            column: 18
          },
          end: {
            line: 50,
            column: 19
          }
        },
        loc: {
          start: {
            line: 50,
            column: 29
          },
          end: {
            line: 50,
            column: 68
          }
        },
        line: 50
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 50,
            column: 50
          },
          end: {
            line: 50,
            column: 51
          }
        },
        loc: {
          start: {
            line: 50,
            column: 60
          },
          end: {
            line: 50,
            column: 66
          }
        },
        line: 50
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 51,
            column: 19
          },
          end: {
            line: 51,
            column: 20
          }
        },
        loc: {
          start: {
            line: 51,
            column: 31
          },
          end: {
            line: 51,
            column: 45
          }
        },
        line: 51
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 60,
            column: 27
          },
          end: {
            line: 60,
            column: 28
          }
        },
        loc: {
          start: {
            line: 60,
            column: 39
          },
          end: {
            line: 74,
            column: 1
          }
        },
        line: 60
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 64,
            column: 17
          },
          end: {
            line: 64,
            column: 18
          }
        },
        loc: {
          start: {
            line: 64,
            column: 29
          },
          end: {
            line: 68,
            column: 9
          }
        },
        line: 64
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 73,
            column: 17
          },
          end: {
            line: 73,
            column: 18
          }
        },
        loc: {
          start: {
            line: 73,
            column: 26
          },
          end: {
            line: 73,
            column: 37
          }
        },
        line: 73
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 83,
            column: 26
          },
          end: {
            line: 83,
            column: 27
          }
        },
        loc: {
          start: {
            line: 83,
            column: 48
          },
          end: {
            line: 95,
            column: 1
          }
        },
        line: 83
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 89,
            column: 30
          },
          end: {
            line: 89,
            column: 31
          }
        },
        loc: {
          start: {
            line: 89,
            column: 43
          },
          end: {
            line: 93,
            column: 9
          }
        },
        line: 89
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 103,
            column: 26
          },
          end: {
            line: 103,
            column: 27
          }
        },
        loc: {
          start: {
            line: 103,
            column: 48
          },
          end: {
            line: 106,
            column: 1
          }
        },
        line: 103
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 33,
            column: 12
          },
          end: {
            line: 35,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 33,
            column: 12
          },
          end: {
            line: 35,
            column: 13
          }
        }, {
          start: {
            line: 33,
            column: 12
          },
          end: {
            line: 35,
            column: 13
          }
        }],
        line: 33
      },
      "1": {
        loc: {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 45,
            column: 56
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 45,
            column: 56
          }
        }, {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 45,
            column: 56
          }
        }],
        line: 44
      },
      "2": {
        loc: {
          start: {
            line: 65,
            column: 12
          },
          end: {
            line: 67,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 65,
            column: 12
          },
          end: {
            line: 67,
            column: 13
          }
        }, {
          start: {
            line: 65,
            column: 12
          },
          end: {
            line: 67,
            column: 13
          }
        }],
        line: 65
      },
      "3": {
        loc: {
          start: {
            line: 85,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 85,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        }, {
          start: {
            line: 85,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        }],
        line: 85
      },
      "4": {
        loc: {
          start: {
            line: 86,
            column: 8
          },
          end: {
            line: 87,
            column: 44
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 86,
            column: 8
          },
          end: {
            line: 87,
            column: 44
          }
        }, {
          start: {
            line: 86,
            column: 8
          },
          end: {
            line: 87,
            column: 44
          }
        }],
        line: 86
      },
      "5": {
        loc: {
          start: {
            line: 90,
            column: 12
          },
          end: {
            line: 92,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 90,
            column: 12
          },
          end: {
            line: 92,
            column: 13
          }
        }, {
          start: {
            line: 90,
            column: 12
          },
          end: {
            line: 92,
            column: 13
          }
        }],
        line: 90
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "38764cb0bc31c60445a6b18be4c26c28990cdb75"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_3q2kka8lj = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_3q2kka8lj();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

cov_3q2kka8lj().s[0]++;

/**
 * Checks whether some value is function or not.
 * 
 * @param {any} f Value that should be checked whether it is function or not
 * @returns true if value is a function, false otherwise 
 */
var isFunction = function isFunction(f) {
  cov_3q2kka8lj().f[0]++;
  cov_3q2kka8lj().s[1]++;
  return Object.prototype.toString.call(f) == '[object Function]';
};
/**
 * Extracts the values from form fields' objects.
 * 
 * @param {Object.<string, any>} fields Form's fields
 * @returns object containing form fields' values
 */


cov_3q2kka8lj().s[2]++;

var extractValues = function extractValues(fields) {
  cov_3q2kka8lj().f[1]++;
  cov_3q2kka8lj().s[3]++;
  return Object.entries(fields).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    cov_3q2kka8lj().f[2]++;
    cov_3q2kka8lj().s[4]++;
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, k, v.value));
  }, {});
};
/**
 * Validates all forms' fields.
 * 
 * @param {Object.<string, Object>} fields Form's fields
 * @returns {boolean|Promise<boolean>} true if there is any error in the form, false otherwise. 
 *                                     Promise with same result when at least one validation function resolved to Promise.
 */


exports.extractValues = extractValues;
cov_3q2kka8lj().s[5]++;

var validateFields = function validateFields(fields) {
  cov_3q2kka8lj().f[3]++;
  cov_3q2kka8lj().s[6]++;
  // Checks whether all fields have correct validation function
  Object.entries(fields).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        k = _ref4[0],
        v = _ref4[1];

    cov_3q2kka8lj().f[4]++;
    cov_3q2kka8lj().s[7]++;

    if (!isFunction(v.validate)) {
      cov_3q2kka8lj().b[0][0]++;
      cov_3q2kka8lj().s[8]++;
      throw new Error("Field ".concat(k, " doesn't have validation function of correct type."));
    } else {
      cov_3q2kka8lj().b[0][1]++;
    }
  }); // Validate all fields

  var validationResults = (cov_3q2kka8lj().s[9]++, Object.values(fields).map(function (field) {
    cov_3q2kka8lj().f[5]++;
    cov_3q2kka8lj().s[10]++;
    return field.validate(field.value);
  })); // When all results are known (not Promise) return true if there are any errors

  cov_3q2kka8lj().s[11]++;

  if (validationResults.every(function (result) {
    cov_3q2kka8lj().f[6]++;
    cov_3q2kka8lj().s[12]++;
    return typeof result === "boolean";
  })) {
    cov_3q2kka8lj().b[1][0]++;
    cov_3q2kka8lj().s[13]++;
    return validationResults.some(function (result) {
      cov_3q2kka8lj().f[7]++;
      cov_3q2kka8lj().s[14]++;
      return result;
    });
  } else {
    cov_3q2kka8lj().b[1][1]++;
  } // Resolve all validation promises and return 


  cov_3q2kka8lj().s[15]++;
  return new Promise(function (resolve, reject) {
    cov_3q2kka8lj().f[8]++;
    cov_3q2kka8lj().s[16]++;
    Promise.all(validationResults.map(function (result) {
      cov_3q2kka8lj().f[9]++;
      cov_3q2kka8lj().s[17]++;
      return Promise.resolve(result);
    })).then(function (results) {
      cov_3q2kka8lj().f[10]++;
      cov_3q2kka8lj().s[18]++;
      return resolve(results.some(function (result) {
        cov_3q2kka8lj().f[11]++;
        cov_3q2kka8lj().s[19]++;
        return result;
      }));
    })["catch"](function (reason) {
      cov_3q2kka8lj().f[12]++;
      cov_3q2kka8lj().s[20]++;
      return reject(reason);
    });
  });
};
/**
 * Resets forms' fields to their initial values.
 * 
 * @param {Object.<string, Object>} fields Form's fields
 */


exports.validateFields = validateFields;
cov_3q2kka8lj().s[21]++;

var resetFields = function resetFields(fields) {
  cov_3q2kka8lj().f[13]++;
  cov_3q2kka8lj().s[22]++;
  // Checks whether all fields have correct validation function
  Object.entries(fields).forEach(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        k = _ref6[0],
        v = _ref6[1];

    cov_3q2kka8lj().f[14]++;
    cov_3q2kka8lj().s[23]++;

    if (!isFunction(v.reset)) {
      cov_3q2kka8lj().b[2][0]++;
      cov_3q2kka8lj().s[24]++;
      throw new Error("Field ".concat(k, " doesn't have reset function of correct type."));
    } else {
      cov_3q2kka8lj().b[2][1]++;
    }
  }); // Validates all fields

  cov_3q2kka8lj().s[25]++;
  Object.values(fields).forEach(function (cur) {
    cov_3q2kka8lj().f[15]++;
    cov_3q2kka8lj().s[26]++;
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
cov_3q2kka8lj().s[27]++;

var submitForm = function submitForm(fields, onSubmit) {
  cov_3q2kka8lj().f[16]++;
  var validationResult = (cov_3q2kka8lj().s[28]++, validateFields(fields));
  cov_3q2kka8lj().s[29]++;

  if (typeof validationResult === "boolean") {
    cov_3q2kka8lj().b[3][0]++;
    cov_3q2kka8lj().s[30]++;

    if (!validationResult) {
      cov_3q2kka8lj().b[4][0]++;
      cov_3q2kka8lj().s[31]++;
      onSubmit(extractValues(fields));
    } else {
      cov_3q2kka8lj().b[4][1]++;
    }
  } else {
    cov_3q2kka8lj().b[3][1]++;
    cov_3q2kka8lj().s[32]++;
    validationResult.then(function (hasErrors) {
      cov_3q2kka8lj().f[17]++;
      cov_3q2kka8lj().s[33]++;

      if (!hasErrors) {
        cov_3q2kka8lj().b[5][0]++;
        cov_3q2kka8lj().s[34]++;
        onSubmit(extractValues(fields));
      } else {
        cov_3q2kka8lj().b[5][1]++;
      }
    });
  }
};
/**
 * Resets the forms' fields and invokes the provided callback.
 * 
 * @param {Object.<string, Object>} fields Form's fields
 * @param {function} onCancel On cancel callback
 */


exports.submitForm = submitForm;
cov_3q2kka8lj().s[35]++;

var cancelForm = function cancelForm(fields, onCancel) {
  cov_3q2kka8lj().f[18]++;
  cov_3q2kka8lj().s[36]++;
  resetFields(fields);
  cov_3q2kka8lj().s[37]++;
  onCancel();
};

exports.cancelForm = cancelForm;