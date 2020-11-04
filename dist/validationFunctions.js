"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNonEmptyArray = exports.isNegativeNumber = exports.isPositiveNumber = exports.isValidNumber = exports.isNonEmptyString = exports.isNotNull = exports.isTrue = exports.areEqual = exports.noError = void 0;

function cov_kvc5ctvd4() {
  var path = "C:\\Users\\Aleks\\Documents\\GitHub\\react-form-validation\\src\\validationFunctions.js";
  var hash = "2f2116586f558e8ed137f58966a62a9895830ba6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Aleks\\Documents\\GitHub\\react-form-validation\\src\\validationFunctions.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 23
        },
        end: {
          line: 7,
          column: 33
        }
      },
      "1": {
        start: {
          line: 7,
          column: 29
        },
        end: {
          line: 7,
          column: 33
        }
      },
      "2": {
        start: {
          line: 17,
          column: 24
        },
        end: {
          line: 17,
          column: 45
        }
      },
      "3": {
        start: {
          line: 17,
          column: 36
        },
        end: {
          line: 17,
          column: 45
        }
      },
      "4": {
        start: {
          line: 25,
          column: 22
        },
        end: {
          line: 25,
          column: 56
        }
      },
      "5": {
        start: {
          line: 25,
          column: 29
        },
        end: {
          line: 25,
          column: 56
        }
      },
      "6": {
        start: {
          line: 33,
          column: 25
        },
        end: {
          line: 33,
          column: 42
        }
      },
      "7": {
        start: {
          line: 33,
          column: 32
        },
        end: {
          line: 33,
          column: 42
        }
      },
      "8": {
        start: {
          line: 41,
          column: 32
        },
        end: {
          line: 41,
          column: 79
        }
      },
      "9": {
        start: {
          line: 41,
          column: 39
        },
        end: {
          line: 41,
          column: 79
        }
      },
      "10": {
        start: {
          line: 49,
          column: 29
        },
        end: {
          line: 49,
          column: 68
        }
      },
      "11": {
        start: {
          line: 49,
          column: 36
        },
        end: {
          line: 49,
          column: 68
        }
      },
      "12": {
        start: {
          line: 57,
          column: 32
        },
        end: {
          line: 57,
          column: 81
        }
      },
      "13": {
        start: {
          line: 57,
          column: 39
        },
        end: {
          line: 57,
          column: 81
        }
      },
      "14": {
        start: {
          line: 65,
          column: 32
        },
        end: {
          line: 65,
          column: 80
        }
      },
      "15": {
        start: {
          line: 65,
          column: 39
        },
        end: {
          line: 65,
          column: 80
        }
      },
      "16": {
        start: {
          line: 73,
          column: 31
        },
        end: {
          line: 73,
          column: 70
        }
      },
      "17": {
        start: {
          line: 73,
          column: 38
        },
        end: {
          line: 73,
          column: 70
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 23
          },
          end: {
            line: 7,
            column: 24
          }
        },
        loc: {
          start: {
            line: 7,
            column: 29
          },
          end: {
            line: 7,
            column: 33
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 17,
            column: 24
          },
          end: {
            line: 17,
            column: 25
          }
        },
        loc: {
          start: {
            line: 17,
            column: 36
          },
          end: {
            line: 17,
            column: 45
          }
        },
        line: 17
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 25,
            column: 22
          },
          end: {
            line: 25,
            column: 23
          }
        },
        loc: {
          start: {
            line: 25,
            column: 29
          },
          end: {
            line: 25,
            column: 56
          }
        },
        line: 25
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 33,
            column: 25
          },
          end: {
            line: 33,
            column: 26
          }
        },
        loc: {
          start: {
            line: 33,
            column: 32
          },
          end: {
            line: 33,
            column: 42
          }
        },
        line: 33
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 41,
            column: 32
          },
          end: {
            line: 41,
            column: 33
          }
        },
        loc: {
          start: {
            line: 41,
            column: 39
          },
          end: {
            line: 41,
            column: 79
          }
        },
        line: 41
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 49,
            column: 29
          },
          end: {
            line: 49,
            column: 30
          }
        },
        loc: {
          start: {
            line: 49,
            column: 36
          },
          end: {
            line: 49,
            column: 68
          }
        },
        line: 49
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 57,
            column: 32
          },
          end: {
            line: 57,
            column: 33
          }
        },
        loc: {
          start: {
            line: 57,
            column: 39
          },
          end: {
            line: 57,
            column: 81
          }
        },
        line: 57
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 65,
            column: 32
          },
          end: {
            line: 65,
            column: 33
          }
        },
        loc: {
          start: {
            line: 65,
            column: 39
          },
          end: {
            line: 65,
            column: 80
          }
        },
        line: 65
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 73,
            column: 31
          },
          end: {
            line: 73,
            column: 32
          }
        },
        loc: {
          start: {
            line: 73,
            column: 38
          },
          end: {
            line: 73,
            column: 70
          }
        },
        line: 73
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 25,
            column: 29
          },
          end: {
            line: 25,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 25,
            column: 29
          },
          end: {
            line: 25,
            column: 51
          }
        }, {
          start: {
            line: 25,
            column: 55
          },
          end: {
            line: 25,
            column: 56
          }
        }],
        line: 25
      },
      "1": {
        loc: {
          start: {
            line: 41,
            column: 39
          },
          end: {
            line: 41,
            column: 79
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 41,
            column: 39
          },
          end: {
            line: 41,
            column: 60
          }
        }, {
          start: {
            line: 41,
            column: 64
          },
          end: {
            line: 41,
            column: 79
          }
        }],
        line: 41
      },
      "2": {
        loc: {
          start: {
            line: 57,
            column: 39
          },
          end: {
            line: 57,
            column: 81
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 57,
            column: 39
          },
          end: {
            line: 57,
            column: 55
          }
        }, {
          start: {
            line: 57,
            column: 59
          },
          end: {
            line: 57,
            column: 81
          }
        }],
        line: 57
      },
      "3": {
        loc: {
          start: {
            line: 65,
            column: 39
          },
          end: {
            line: 65,
            column: 80
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 65,
            column: 39
          },
          end: {
            line: 65,
            column: 55
          }
        }, {
          start: {
            line: 65,
            column: 59
          },
          end: {
            line: 65,
            column: 80
          }
        }],
        line: 65
      },
      "4": {
        loc: {
          start: {
            line: 73,
            column: 38
          },
          end: {
            line: 73,
            column: 70
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 73,
            column: 38
          },
          end: {
            line: 73,
            column: 54
          }
        }, {
          start: {
            line: 73,
            column: 58
          },
          end: {
            line: 73,
            column: 70
          }
        }],
        line: 73
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
      "17": 0
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
      "8": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2f2116586f558e8ed137f58966a62a9895830ba6"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_kvc5ctvd4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_kvc5ctvd4();
cov_kvc5ctvd4().s[0]++;

/**
 * No error validation function. Always returns false, indicating that field's 
 * value is correct.
 * 
 * @returns true
 */
var noError = function noError() {
  cov_kvc5ctvd4().f[0]++;
  cov_kvc5ctvd4().s[1]++;
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
cov_kvc5ctvd4().s[2]++;

var areEqual = function areEqual(v1, v2) {
  cov_kvc5ctvd4().f[1]++;
  cov_kvc5ctvd4().s[3]++;
  return v1 === v2;
};
/**
 * Checks if value is true.
 * 
 * @param {any} v Value
 * @returns true if value is true (indicating that no error is present), false otherwise
 */


exports.areEqual = areEqual;
cov_kvc5ctvd4().s[4]++;

var isTrue = function isTrue(v) {
  cov_kvc5ctvd4().f[2]++;
  cov_kvc5ctvd4().s[5]++;
  return (cov_kvc5ctvd4().b[0][0]++, typeof v === "boolean") || (cov_kvc5ctvd4().b[0][1]++, v);
};
/**
 * Checks if value is null.
 * 
 * @param {any} v Value
 * @returns true if value is null (indicating that no error is present), false otherwise
 */


exports.isTrue = isTrue;
cov_kvc5ctvd4().s[6]++;

var isNotNull = function isNotNull(v) {
  cov_kvc5ctvd4().f[3]++;
  cov_kvc5ctvd4().s[7]++;
  return v !== null;
};
/**
 * Checks if value is non empty string.
 * 
 * @param {any} v Value
 * @returns true if value is non empty string (indicating that no error is present), false otherwise
 */


exports.isNotNull = isNotNull;
cov_kvc5ctvd4().s[8]++;

var isNonEmptyString = function isNonEmptyString(v) {
  cov_kvc5ctvd4().f[4]++;
  cov_kvc5ctvd4().s[9]++;
  return (cov_kvc5ctvd4().b[1][0]++, typeof v === "string") && (cov_kvc5ctvd4().b[1][1]++, v.trim() !== '');
};
/**
 * Checks if value is valid number.
 * 
 * @param {any} v Value
 * @returns true if value is valid number (indicating that no error is present), false otherwise
 */


exports.isNonEmptyString = isNonEmptyString;
cov_kvc5ctvd4().s[10]++;

var isValidNumber = function isValidNumber(v) {
  cov_kvc5ctvd4().f[5]++;
  cov_kvc5ctvd4().s[11]++;
  return !Number.isNaN(parseFloat(v, 10));
};
/**
 * Checks if value is positive number.
 * 
 * @param {any} v Value
 * @returns true if value is positive number (indicating that no error is present), false otherwise
 */


exports.isValidNumber = isValidNumber;
cov_kvc5ctvd4().s[12]++;

var isPositiveNumber = function isPositiveNumber(v) {
  cov_kvc5ctvd4().f[6]++;
  cov_kvc5ctvd4().s[13]++;
  return (cov_kvc5ctvd4().b[2][0]++, isValidNumber(v)) && (cov_kvc5ctvd4().b[2][1]++, parseFloat(v, 10) >= 0);
};
/**
 * Checks if value is negative number.
 * 
 * @param {any} v Value
 * @returns true if value is negative number (indicating that no error is present), false otherwise
 */


exports.isPositiveNumber = isPositiveNumber;
cov_kvc5ctvd4().s[14]++;

var isNegativeNumber = function isNegativeNumber(v) {
  cov_kvc5ctvd4().f[7]++;
  cov_kvc5ctvd4().s[15]++;
  return (cov_kvc5ctvd4().b[3][0]++, isValidNumber(v)) && (cov_kvc5ctvd4().b[3][1]++, parseFloat(v, 10) < 0);
};
/**
 * Checks if value is non empty array.
 * 
 * @param {any} v Value
 * @returns true if value is non empty array (indicating that no error is present), false otherwise
 */


exports.isNegativeNumber = isNegativeNumber;
cov_kvc5ctvd4().s[16]++;

var isNonEmptyArray = function isNonEmptyArray(v) {
  cov_kvc5ctvd4().f[8]++;
  cov_kvc5ctvd4().s[17]++;
  return (cov_kvc5ctvd4().b[4][0]++, Array.isArray(v)) && (cov_kvc5ctvd4().b[4][1]++, v.length > 0);
};

exports.isNonEmptyArray = isNonEmptyArray;