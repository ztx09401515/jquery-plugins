/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo/jtForm/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/jtForm/entry.js":
/*!******************************!*\
  !*** ./demo/jtForm/entry.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../src/jtForm/jtForm.ts */ "./src/jtForm/jtForm.ts");

$(document).ready(function () {
  $('#root').jtForm({
    map: [{
      name: 'username',
      type: 'text',
      label: '用户名:',
      rules: {
        type: 'string',
        required: true,
        message: '用户名不能为空'
      }
    }, {
      name: 'password',
      type: 'text',
      fieldProps: {
        type: 'password'
      },
      label: '密码:',
      rules: {
        type: 'string',
        required: true,
        message: '密码必填'
      }
    }, [{
      name: 'nickname',
      type: 'text',
      fieldProps: {
        type: 'text'
      },
      label: '昵称:',
      layout: {
        label: 0.2,
        field: 0.8
      },
      rules: {
        type: 'string',
        message: '不接受符号',
        pattern: /^\w*$/
      }
    }, {
      name: 'email',
      type: 'text',
      fieldProps: {
        type: 'text'
      },
      label: 'email:',
      layout: {
        label: 0.15,
        field: 0.8
      },
      rules: {
        type: 'string',
        message: '格式不正确',
        pattern: /^\w+@\w+\.\w+$/
      }
    }], {
      name: 'imageFile',
      type: 'file',
      fieldProps: {
        accept: 'image/*'
      },
      label: '图片文件:',
      rules: {
        required: true,
        message: '图片文件必填'
      }
    }, {
      name: 'cropperImage',
      type: 'image',
      label: '截图',
      rules: {
        required: true,
        message: '截图必填'
      }
    }]
  });
});

/***/ }),

/***/ "./node_modules/async-validator/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/async-validator/es/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js"));

var _util = __webpack_require__(/*! ./util */ "./node_modules/async-validator/es/util.js");

var _validator = _interopRequireDefault(__webpack_require__(/*! ./validator/ */ "./node_modules/async-validator/es/validator/index.js"));

var _messages2 = __webpack_require__(/*! ./messages */ "./node_modules/async-validator/es/messages.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */
function Schema(descriptor) {
  this.rules = null;
  this._messages = _messages2.messages;
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = (0, _util.deepMerge)((0, _messages2.newMessages)(), _messages);
    }

    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if ((typeof rules === 'undefined' ? 'undefined' : (0, _typeof2.default)(rules)) !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    var z = void 0;
    var item = void 0;

    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_) {
    var _this = this;

    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var oc = arguments[2];
    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }

      return;
    }

    function complete(results) {
      var i = void 0;
      var field = void 0;
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          errors = errors.concat.apply(errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        for (i = 0; i < errors.length; i++) {
          field = errors[i].field;
          fields[field] = fields[field] || [];
          fields[field].push(errors[i]);
        }
      }

      callback(errors, fields);
    }

    if (options.messages) {
      var messages = this.messages();

      if (messages === _messages2.messages) {
        messages = (0, _messages2.newMessages)();
      }

      (0, _util.deepMerge)(messages, options.messages);
      options.messages = messages;
    } else {
      options.messages = this.messages();
    }

    var arr = void 0;
    var value = void 0;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = (0, _extends2.default)({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = (0, _extends2.default)({}, rule);
        }

        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);

        if (!rule.validator) {
          return;
        }

        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    (0, _util.asyncMap)(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && ((0, _typeof2.default)(rule.fields) === 'object' || (0, _typeof2.default)(rule.defaultField) === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullfield(key, schema) {
        return (0, _extends2.default)({}, schema, {
          fullField: rule.fullField + '.' + key
        });
      }

      function cb() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var errors = e;

        if (!Array.isArray(errors)) {
          errors = [errors];
        }

        if (errors.length) {
          (0, _util.warning)('async-validator:', errors);
        }

        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }

        errors = errors.map((0, _util.complementError)(rule));

        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }

        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map((0, _util.complementError)(rule));
            } else if (options.error) {
              errors = [options.error(rule, (0, _util.format)(options.messages.required, rule.field))];
            } else {
              errors = [];
            }

            return doIt(errors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }

          fieldsSchema = (0, _extends2.default)({}, fieldsSchema, data.rule.fields);

          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }

          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            doIt(errs && errs.length ? errors.concat(errs) : errs);
          });
        }
      }

      var res = rule.validator(rule, data.value, cb, data.source, options);

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !_validator.default.hasOwnProperty(rule.type)) {
      throw new Error((0, _util.format)('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return _validator.default.required;
    }

    return _validator.default[this.getType(rule)] || false;
  }
};

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  _validator.default[type] = validator;
};

Schema.messages = _messages2.messages;
var _default = Schema;
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/messages.js":
/*!*****************************************************!*\
  !*** ./node_modules/async-validator/es/messages.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newMessages = newMessages;
exports.messages = void 0;

function newMessages() {
  return {
    'default': 'Validation error on field %s',
    required: '%s is required',
    'enum': '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}

var messages = newMessages();
exports.messages = messages;

/***/ }),

/***/ "./node_modules/async-validator/es/rule/enum.js":
/*!******************************************************!*\
  !*** ./node_modules/async-validator/es/rule/enum.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var util = _interopRequireWildcard(__webpack_require__(/*! ../util */ "./node_modules/async-validator/es/util.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ENUM = 'enum';
/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];

  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(util.format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

var _default = enumerable;
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/rule/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/async-validator/es/rule/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _required = _interopRequireDefault(__webpack_require__(/*! ./required */ "./node_modules/async-validator/es/rule/required.js"));

var _whitespace = _interopRequireDefault(__webpack_require__(/*! ./whitespace */ "./node_modules/async-validator/es/rule/whitespace.js"));

var _type = _interopRequireDefault(__webpack_require__(/*! ./type */ "./node_modules/async-validator/es/rule/type.js"));

var _range = _interopRequireDefault(__webpack_require__(/*! ./range */ "./node_modules/async-validator/es/rule/range.js"));

var _enum = _interopRequireDefault(__webpack_require__(/*! ./enum */ "./node_modules/async-validator/es/rule/enum.js"));

var _pattern = _interopRequireDefault(__webpack_require__(/*! ./pattern */ "./node_modules/async-validator/es/rule/pattern.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  required: _required.default,
  whitespace: _whitespace.default,
  type: _type.default,
  range: _range.default,
  'enum': _enum.default,
  pattern: _pattern.default
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/rule/pattern.js":
/*!*********************************************************!*\
  !*** ./node_modules/async-validator/es/rule/pattern.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var util = _interopRequireWildcard(__webpack_require__(/*! ../util */ "./node_modules/async-validator/es/util.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}

var _default = pattern;
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/rule/range.js":
/*!*******************************************************!*\
  !*** ./node_modules/async-validator/es/rule/range.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var util = _interopRequireWildcard(__webpack_require__(/*! ../util */ "./node_modules/async-validator/es/util.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number';
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type


  if (!key) {
    return false;
  }

  if (str || arr) {
    val = value.length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(util.format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(util.format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(util.format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(util.format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}

var _default = range;
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/rule/required.js":
/*!**********************************************************!*\
  !*** ./node_modules/async-validator/es/rule/required.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var util = _interopRequireWildcard(__webpack_require__(/*! ../util */ "./node_modules/async-validator/es/util.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || util.isEmptyValue(value, type || rule.type))) {
    errors.push(util.format(options.messages.required, rule.fullField));
  }
}

var _default = required;
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/rule/type.js":
/*!******************************************************!*\
  !*** ./node_modules/async-validator/es/rule/type.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js"));

var util = _interopRequireWildcard(__webpack_require__(/*! ../util */ "./node_modules/async-validator/es/util.js"));

var _required = _interopRequireDefault(__webpack_require__(/*! ./required */ "./node_modules/async-validator/es/rule/required.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint max-len:0 */
var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  float: function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    return typeof value === 'number';
  },
  object: function object(value) {
    return (typeof value === 'undefined' ? 'undefined' : (0, _typeof2.default)(value)) === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};
/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    (0, _required.default)(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check

  } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : (0, _typeof2.default)(value)) !== rule.type) {
    errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

var _default = type;
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/rule/whitespace.js":
/*!************************************************************!*\
  !*** ./node_modules/async-validator/es/rule/whitespace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var util = _interopRequireWildcard(__webpack_require__(/*! ../util */ "./node_modules/async-validator/es/util.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(util.format(options.messages.whitespace, rule.fullField));
  }
}

var _default = whitespace;
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/util.js":
/*!*************************************************!*\
  !*** ./node_modules/async-validator/es/util.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.format = format;
exports.isEmptyValue = isEmptyValue;
exports.isEmptyObject = isEmptyObject;
exports.asyncMap = asyncMap;
exports.complementError = complementError;
exports.deepMerge = deepMerge;
exports.warning = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatRegExp = /%[sdj%]/g;

var warning = function warning() {}; // don't print warning message when in production env or node runtime


exports.warning = warning;

if ("development" !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  exports.warning = warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}

function format() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;

  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }

  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;
      }
    });

    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += ' ' + arg;
    }

    return str;
  }

  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var flattenArr = flattenObjArr(objArr);
    return asyncSerialArray(flattenArr, func, callback);
  }

  var firstFields = option.firstFields || [];

  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }

  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];

  var next = function next(errors) {
    results.push.apply(results, errors);
    total++;

    if (total === objArrLength) {
      callback(results);
    }
  };

  objArrKeys.forEach(function (key) {
    var arr = objArr[key];

    if (firstFields.indexOf(key) !== -1) {
      asyncSerialArray(arr, func, next);
    } else {
      asyncParallelArray(arr, func, next);
    }
  });
}

function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }

    return {
      message: oe,
      field: oe.field || rule.fullField
    };
  };
}

function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof2.default)(value)) === 'object' && (0, _typeof2.default)(target[s]) === 'object') {
          target[s] = (0, _extends2.default)({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/async-validator/es/validator/array.js":
/*!************************************************************!*\
  !*** ./node_modules/async-validator/es/validator/array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rule = _interopRequireDefault(__webpack_require__(/*! ../rule/ */ "./node_modules/async-validator/es/rule/index.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/async-validator/es/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((0, _util.isEmptyValue)(value, 'array') && !rule.required) {
      return callback();
    }

    _rule.default.required(rule, value, source, errors, options, 'array');

    if (!(0, _util.isEmptyValue)(value, 'array')) {
      _rule.default.type(rule, value, source, errors, options);

      _rule.default.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var _default = array;
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/validator/boolean.js":
/*!**************************************************************!*\
  !*** ./node_modules/async-validator/es/validator/boolean.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = __webpack_require__(/*! ../util */ "./node_modules/async-validator/es/util.js");

var _rule = _interopRequireDefault(__webpack_require__(/*! ../rule/ */ "./node_modules/async-validator/es/rule/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }

    _rule.default.required(rule, value, source, errors, options);

    if (value !== undefined) {
      _rule.default.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var _default = boolean;
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/validator/date.js":
/*!***********************************************************!*\
  !*** ./node_modules/async-validator/es/validator/date.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rule = _interopRequireDefault(__webpack_require__(/*! ../rule/ */ "./node_modules/async-validator/es/rule/index.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/async-validator/es/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }

    _rule.default.required(rule, value, source, errors, options);

    if (!(0, _util.isEmptyValue)(value)) {
      _rule.default.type(rule, value, source, errors, options);

      if (value) {
        _rule.default.range(rule, value.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
}

var _default = date;
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/validator/enum.js":
/*!***********************************************************!*\
  !*** ./node_modules/async-validator/es/validator/enum.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rule = _interopRequireDefault(__webpack_require__(/*! ../rule/ */ "./node_modules/async-validator/es/rule/index.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/async-validator/es/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENUM = 'enum';
/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }

    _rule.default.required(rule, value, source, errors, options);

    if (value) {
      _rule.default[ENUM](rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var _default = enumerable;
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/validator/float.js":
/*!************************************************************!*\
  !*** ./node_modules/async-validator/es/validator/float.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rule = _interopRequireDefault(__webpack_require__(/*! ../rule/ */ "./node_modules/async-validator/es/rule/index.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/async-validator/es/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }

    _rule.default.required(rule, value, source, errors, options);

    if (value !== undefined) {
      _rule.default.type(rule, value, source, errors, options);

      _rule.default.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var _default = floatFn;
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/validator/index.js":
/*!************************************************************!*\
  !*** ./node_modules/async-validator/es/validator/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _string = _interopRequireDefault(__webpack_require__(/*! ./string */ "./node_modules/async-validator/es/validator/string.js"));

var _method = _interopRequireDefault(__webpack_require__(/*! ./method */ "./node_modules/async-validator/es/validator/method.js"));

var _number = _interopRequireDefault(__webpack_require__(/*! ./number */ "./node_modules/async-validator/es/validator/number.js"));

var _boolean = _interopRequireDefault(__webpack_require__(/*! ./boolean */ "./node_modules/async-validator/es/validator/boolean.js"));

var _regexp = _interopRequireDefault(__webpack_require__(/*! ./regexp */ "./node_modules/async-validator/es/validator/regexp.js"));

var _integer = _interopRequireDefault(__webpack_require__(/*! ./integer */ "./node_modules/async-validator/es/validator/integer.js"));

var _float = _interopRequireDefault(__webpack_require__(/*! ./float */ "./node_modules/async-validator/es/validator/float.js"));

var _array = _interopRequireDefault(__webpack_require__(/*! ./array */ "./node_modules/async-validator/es/validator/array.js"));

var _object = _interopRequireDefault(__webpack_require__(/*! ./object */ "./node_modules/async-validator/es/validator/object.js"));

var _enum = _interopRequireDefault(__webpack_require__(/*! ./enum */ "./node_modules/async-validator/es/validator/enum.js"));

var _pattern = _interopRequireDefault(__webpack_require__(/*! ./pattern */ "./node_modules/async-validator/es/validator/pattern.js"));

var _date = _interopRequireDefault(__webpack_require__(/*! ./date */ "./node_modules/async-validator/es/validator/date.js"));

var _required = _interopRequireDefault(__webpack_require__(/*! ./required */ "./node_modules/async-validator/es/validator/required.js"));

var _type = _interopRequireDefault(__webpack_require__(/*! ./type */ "./node_modules/async-validator/es/validator/type.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  string: _string.default,
  method: _method.default,
  number: _number.default,
  boolean: _boolean.default,
  regexp: _regexp.default,
  integer: _integer.default,
  float: _float.default,
  array: _array.default,
  object: _object.default,
  'enum': _enum.default,
  pattern: _pattern.default,
  date: _date.default,
  url: _type.default,
  hex: _type.default,
  email: _type.default,
  required: _required.default
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/validator/integer.js":
/*!**************************************************************!*\
  !*** ./node_modules/async-validator/es/validator/integer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rule = _interopRequireDefault(__webpack_require__(/*! ../rule/ */ "./node_modules/async-validator/es/rule/index.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/async-validator/es/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }

    _rule.default.required(rule, value, source, errors, options);

    if (value !== undefined) {
      _rule.default.type(rule, value, source, errors, options);

      _rule.default.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var _default = integer;
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/validator/method.js":
/*!*************************************************************!*\
  !*** ./node_modules/async-validator/es/validator/method.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rule = _interopRequireDefault(__webpack_require__(/*! ../rule/ */ "./node_modules/async-validator/es/rule/index.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/async-validator/es/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }

    _rule.default.required(rule, value, source, errors, options);

    if (value !== undefined) {
      _rule.default.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var _default = method;
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/validator/number.js":
/*!*************************************************************!*\
  !*** ./node_modules/async-validator/es/validator/number.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rule = _interopRequireDefault(__webpack_require__(/*! ../rule/ */ "./node_modules/async-validator/es/rule/index.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/async-validator/es/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }

    _rule.default.required(rule, value, source, errors, options);

    if (value !== undefined) {
      _rule.default.type(rule, value, source, errors, options);

      _rule.default.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var _default = number;
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/validator/object.js":
/*!*************************************************************!*\
  !*** ./node_modules/async-validator/es/validator/object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rule = _interopRequireDefault(__webpack_require__(/*! ../rule/ */ "./node_modules/async-validator/es/rule/index.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/async-validator/es/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }

    _rule.default.required(rule, value, source, errors, options);

    if (value !== undefined) {
      _rule.default.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var _default = object;
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/validator/pattern.js":
/*!**************************************************************!*\
  !*** ./node_modules/async-validator/es/validator/pattern.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rule = _interopRequireDefault(__webpack_require__(/*! ../rule/ */ "./node_modules/async-validator/es/rule/index.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/async-validator/es/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function pattern(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
      return callback();
    }

    _rule.default.required(rule, value, source, errors, options);

    if (!(0, _util.isEmptyValue)(value, 'string')) {
      _rule.default.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var _default = pattern;
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/validator/regexp.js":
/*!*************************************************************!*\
  !*** ./node_modules/async-validator/es/validator/regexp.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rule = _interopRequireDefault(__webpack_require__(/*! ../rule/ */ "./node_modules/async-validator/es/rule/index.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/async-validator/es/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((0, _util.isEmptyValue)(value) && !rule.required) {
      return callback();
    }

    _rule.default.required(rule, value, source, errors, options);

    if (!(0, _util.isEmptyValue)(value)) {
      _rule.default.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var _default = regexp;
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/validator/required.js":
/*!***************************************************************!*\
  !*** ./node_modules/async-validator/es/validator/required.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js"));

var _rule = _interopRequireDefault(__webpack_require__(/*! ../rule/ */ "./node_modules/async-validator/es/rule/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : (0, _typeof2.default)(value);

  _rule.default.required(rule, value, source, errors, options, type);

  callback(errors);
}

var _default = required;
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/validator/string.js":
/*!*************************************************************!*\
  !*** ./node_modules/async-validator/es/validator/string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rule = _interopRequireDefault(__webpack_require__(/*! ../rule/ */ "./node_modules/async-validator/es/rule/index.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/async-validator/es/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
      return callback();
    }

    _rule.default.required(rule, value, source, errors, options, 'string');

    if (!(0, _util.isEmptyValue)(value, 'string')) {
      _rule.default.type(rule, value, source, errors, options);

      _rule.default.range(rule, value, source, errors, options);

      _rule.default.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        _rule.default.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
}

var _default = string;
exports.default = _default;

/***/ }),

/***/ "./node_modules/async-validator/es/validator/type.js":
/*!***********************************************************!*\
  !*** ./node_modules/async-validator/es/validator/type.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rule = _interopRequireDefault(__webpack_require__(/*! ../rule/ */ "./node_modules/async-validator/es/rule/index.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/async-validator/es/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function type(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((0, _util.isEmptyValue)(value, ruleType) && !rule.required) {
      return callback();
    }

    _rule.default.required(rule, value, source, errors, options, ruleType);

    if (!(0, _util.isEmptyValue)(value, ruleType)) {
      _rule.default.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var _default = type;
exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js"),
  __esModule: true
};

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js"),
  __esModule: true
};

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js"),
  __esModule: true
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && _typeof2(_iterator2.default) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : _typeof2(obj);
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.assign;

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js");

__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js");

__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js");

__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Symbol;

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");

__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");

module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js").f('iterator');

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  /* empty */
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js");

module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var core = module.exports = {
  version: '2.5.7'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");

var document = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");

var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js");

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");

module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;

  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;

    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }

  return result;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue; // export native or passed

    out = own ? target[key] : source[key]; // prevent global pollution for namespaces

    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global) // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();

            case 1:
              return new C(a);

            case 2:
              return new C(a, b);
          }

          return new C(a, b, c);
        }

        return C.apply(this, arguments);
      };

      F[PROTOTYPE] = C[PROTOTYPE];
      return F; // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%

    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out; // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%

      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
}; // type bitmap


$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var document = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;

module.exports = document && document.documentElement;

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js"); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");

module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./_object-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js");

var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");

var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

__webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, {
    next: descriptor(1, next)
  });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");

var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");

var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js");

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');

var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);

  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];

    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };

      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }

    return function entries() {
      return new Constructor(this, kind);
    };
  };

  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype; // Fix native

  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;

    $default = function values() {
      return $native.call(this);
    };
  } // Define iterator


  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  } // Plug for library


  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;

  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }

  return methods;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (done, value) {
  return {
    value: value,
    done: !!done
  };
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = true;

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var META = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js")('meta');

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");

var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;

var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});

var setMeta = function setMeta(it) {
  setDesc(it, META, {
    value: {
      i: 'O' + ++id,
      // object ID
      w: {} // weak collections IDs

    }
  });
};

var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F'; // not necessary to add metadata

    if (!create) return 'E'; // add missing metadata

    setMeta(it); // return object ID
  }

  return it[META].i;
};

var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true; // not necessary to add metadata

    if (!create) return false; // add missing metadata

    setMeta(it); // return hash weak collections IDs
  }

  return it[META].w;
}; // add metadata on freeze-family methods calling


var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};

var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.2.1 Object.assign(target, source, ...)

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");

var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js");

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");

var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");

var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;

  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }

  return T;
} : $assign;

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");

var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

var Empty = function Empty() {
  /* empty */
};

var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('iframe');

  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';

  __webpack_require__(/*! ./_html */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js").appendChild(iframe);

  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);

  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;

  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }

  return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = _createDict();

  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");

var dP = Object.defineProperty;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;

  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }

  return O;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");

var gOPD = Object.getOwnPropertyDescriptor;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {
    /* empty */
  }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");

var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js").f;

var toString = {}.toString;
var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");

var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectProto : null;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");

var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js")(false);

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;

var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");

var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
    configurable: true,
    value: tag
  });
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var shared = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('keys');

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js"); // true  -> String#at
// false -> String#codePointAt


module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");

var max = Math.max;
var min = Math.min;

module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");

module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");

var min = Math.min;

module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");

module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js"); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var id = 0;
var px = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");

var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js");

var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;

module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
    value: wksExt.f(name)
  });
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js");

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('wks');

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");

var _Symbol = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").Symbol;

var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js");

var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js"); // 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()


module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target

  this._i = 0; // next index

  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;

  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }

  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', {
  assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js")
});

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js")(true); // 21.1.3.27 String.prototype[@@iterator]()


__webpack_require__(/*! ./_iter-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target

  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return {
    value: undefined,
    done: true
  };
  point = $at(O, index);
  this._i += point.length;
  return {
    value: point,
    done: false
  };
});

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ECMAScript 6 symbols shim

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js");

var META = __webpack_require__(/*! ./_meta */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js").KEY;

var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js");

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");

var wks = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js");

var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js");

var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js");

var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js");

var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");

var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js");

var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js");

var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js");

var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");

var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");

var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;

var _stringify = $JSON && $JSON.stringify;

var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);

  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return _typeof(it) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);

  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, {
        enumerable: createDesc(0, false)
      });
    }

    return setSymbolDesc(it, key, D);
  }

  return dP(it, key, D);
};

var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;

  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }

  return it;
};

var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};

var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};

var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }

  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }

  return result;
}; // 19.4.1.1 Symbol([description])


if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);

    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };

    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: $set
    });
    return wrap(tag);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });
  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Symbol: $Symbol
});

for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});
$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // 24.3.2 JSON.stringify(value [, replacer [, space]])

$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols

  return _stringify([S]) != '[null]' || _stringify({
    a: S
  }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;

    while (arguments.length > i) {
      args.push(arguments[i++]);
    }

    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

    if (!isArray(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
}); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

setToStringTag(global.JSON, 'JSON', true);

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./_wks-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./_wks-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js")('observable');

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");

var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),

/***/ "./node_modules/cropper/dist/cropper.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/cropper/dist/cropper.esm.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ "jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

var IN_BROWSER = typeof window !== 'undefined';
var WINDOW = IN_BROWSER ? window : {};
var NAMESPACE = 'cropper'; // Actions

var ACTION_ALL = 'all';
var ACTION_CROP = 'crop';
var ACTION_MOVE = 'move';
var ACTION_ZOOM = 'zoom';
var ACTION_EAST = 'e';
var ACTION_WEST = 'w';
var ACTION_SOUTH = 's';
var ACTION_NORTH = 'n';
var ACTION_NORTH_EAST = 'ne';
var ACTION_NORTH_WEST = 'nw';
var ACTION_SOUTH_EAST = 'se';
var ACTION_SOUTH_WEST = 'sw'; // Classes

var CLASS_CROP = NAMESPACE + '-crop';
var CLASS_DISABLED = NAMESPACE + '-disabled';
var CLASS_HIDDEN = NAMESPACE + '-hidden';
var CLASS_HIDE = NAMESPACE + '-hide';
var CLASS_INVISIBLE = NAMESPACE + '-invisible';
var CLASS_MODAL = NAMESPACE + '-modal';
var CLASS_MOVE = NAMESPACE + '-move'; // Data keys

var DATA_ACTION = 'action';
var DATA_PREVIEW = 'preview'; // Drag modes

var DRAG_MODE_CROP = 'crop';
var DRAG_MODE_MOVE = 'move';
var DRAG_MODE_NONE = 'none'; // Events

var EVENT_CROP = 'crop';
var EVENT_CROP_END = 'cropend';
var EVENT_CROP_MOVE = 'cropmove';
var EVENT_CROP_START = 'cropstart';
var EVENT_DBLCLICK = 'dblclick';
var EVENT_LOAD = 'load';
var EVENT_POINTER_DOWN = WINDOW.PointerEvent ? 'pointerdown' : 'touchstart mousedown';
var EVENT_POINTER_MOVE = WINDOW.PointerEvent ? 'pointermove' : 'touchmove mousemove';
var EVENT_POINTER_UP = WINDOW.PointerEvent ? 'pointerup pointercancel' : 'touchend touchcancel mouseup';
var EVENT_READY = 'ready';
var EVENT_RESIZE = 'resize';
var EVENT_WHEEL = 'wheel mousewheel DOMMouseScroll';
var EVENT_ZOOM = 'zoom'; // RegExps

var REGEXP_ACTIONS = /^(?:e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/;
var REGEXP_DATA_URL = /^data:/;
var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
var REGEXP_TAG_NAME = /^(?:img|canvas)$/i;
var DEFAULTS = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: DRAG_MODE_CROP,
  // 'crop', 'move' or 'none'
  // Define the aspect ratio of the crop box
  aspectRatio: NaN,
  // An object with the previous cropping result data
  data: null,
  // A selector for adding extra containers to preview
  preview: '',
  // Re-render the cropper when resize the window
  responsive: true,
  // Restore the cropped area after resize the window
  restore: true,
  // Check if the current image is a cross-origin image
  checkCrossOrigin: true,
  // Check the current image's Exif Orientation information
  checkOrientation: true,
  // Show the black modal
  modal: true,
  // Show the dashed lines for guiding
  guides: true,
  // Show the center indicator for guiding
  center: true,
  // Show the white modal to highlight the crop box
  highlight: true,
  // Show the grid background
  background: true,
  // Enable to crop the image automatically when initialize
  autoCrop: true,
  // Define the percentage of automatic cropping area when initializes
  autoCropArea: 0.8,
  // Enable to move the image
  movable: true,
  // Enable to rotate the image
  rotatable: true,
  // Enable to scale the image
  scalable: true,
  // Enable to zoom the image
  zoomable: true,
  // Enable to zoom the image by dragging touch
  zoomOnTouch: true,
  // Enable to zoom the image by wheeling mouse
  zoomOnWheel: true,
  // Define zoom ratio when zoom the image by wheeling mouse
  wheelZoomRatio: 0.1,
  // Enable to move the crop box
  cropBoxMovable: true,
  // Enable to resize the crop box
  cropBoxResizable: true,
  // Toggle drag mode between "crop" and "move" when click twice on the cropper
  toggleDragModeOnDblclick: true,
  // Size limitation
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: 200,
  minContainerHeight: 100,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
};
var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-action="e"></span>' + '<span class="cropper-line line-n" data-action="n"></span>' + '<span class="cropper-line line-w" data-action="w"></span>' + '<span class="cropper-line line-s" data-action="s"></span>' + '<span class="cropper-point point-e" data-action="e"></span>' + '<span class="cropper-point point-n" data-action="n"></span>' + '<span class="cropper-point point-w" data-action="w"></span>' + '<span class="cropper-point point-s" data-action="s"></span>' + '<span class="cropper-point point-ne" data-action="ne"></span>' + '<span class="cropper-point point-nw" data-action="nw"></span>' + '<span class="cropper-point point-sw" data-action="sw"></span>' + '<span class="cropper-point point-se" data-action="se"></span>' + '</div>' + '</div>';

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var toConsumableArray = function toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return Array.from(arr);
  }
};
/**
 * Check if the given value is not a number.
 */


var isNaN = Number.isNaN || WINDOW.isNaN;
/**
 * Check if the given value is a number.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a number, else `false`.
 */

function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}
/**
 * Check if the given value is undefined.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
 */


function isUndefined(value) {
  return typeof value === 'undefined';
}
/**
 * Check if the given value is an object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is an object, else `false`.
 */


function isObject(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Check if the given value is a plain object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
 */

function isPlainObject(value) {
  if (!isObject(value)) {
    return false;
  }

  try {
    var _constructor = value.constructor;
    var prototype = _constructor.prototype;
    return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
  } catch (e) {
    return false;
  }
}
/**
 * Check if the given value is a function.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a function, else `false`.
 */


function isFunction(value) {
  return typeof value === 'function';
}
/**
 * Iterate the given data.
 * @param {*} data - The data to iterate.
 * @param {Function} callback - The process function for each element.
 * @returns {*} The original data.
 */


function forEach(data, callback) {
  if (data && isFunction(callback)) {
    if (Array.isArray(data) || isNumber(data.length)
    /* array-like */
    ) {
        var length = data.length;
        var i = void 0;

        for (i = 0; i < length; i += 1) {
          if (callback.call(data, data[i], i, data) === false) {
            break;
          }
        }
      } else if (isObject(data)) {
      Object.keys(data).forEach(function (key) {
        callback.call(data, data[key], key, data);
      });
    }
  }

  return data;
}
/**
 * Extend the given object.
 * @param {*} obj - The object to be extended.
 * @param {*} args - The rest objects which will be merged to the first object.
 * @returns {Object} The extended object.
 */


var assign = Object.assign || function assign(obj) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (isObject(obj) && args.length > 0) {
    args.forEach(function (arg) {
      if (isObject(arg)) {
        Object.keys(arg).forEach(function (key) {
          obj[key] = arg[key];
        });
      }
    });
  }

  return obj;
};

var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/i;
/**
 * Normalize decimal number.
 * Check out {@link http://0.30000000000000004.com/}
 * @param {number} value - The value to normalize.
 * @param {number} [times=100000000000] - The times for normalizing.
 * @returns {number} Returns the normalized number.
 */

function normalizeDecimalNumber(value) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
  return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
}

var REGEXP_SUFFIX = /^(?:width|height|left|top|marginLeft|marginTop)$/;
/**
 * Apply styles to the given element.
 * @param {Element} element - The target element.
 * @param {Object} styles - The styles for applying.
 */

function setStyle(element, styles) {
  var style = element.style;
  forEach(styles, function (value, property) {
    if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
      value += 'px';
    }

    style[property] = value;
  });
}
/**
 * Check if the given element has a special class.
 * @param {Element} element - The element to check.
 * @param {string} value - The class to search.
 * @returns {boolean} Returns `true` if the special class was found.
 */


function hasClass(element, value) {
  return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
}
/**
 * Add classes to the given element.
 * @param {Element} element - The target element.
 * @param {string} value - The classes to be added.
 */


function addClass(element, value) {
  if (!value) {
    return;
  }

  if (isNumber(element.length)) {
    forEach(element, function (elem) {
      addClass(elem, value);
    });
    return;
  }

  if (element.classList) {
    element.classList.add(value);
    return;
  }

  var className = element.className.trim();

  if (!className) {
    element.className = value;
  } else if (className.indexOf(value) < 0) {
    element.className = className + ' ' + value;
  }
}
/**
 * Remove classes from the given element.
 * @param {Element} element - The target element.
 * @param {string} value - The classes to be removed.
 */


function removeClass(element, value) {
  if (!value) {
    return;
  }

  if (isNumber(element.length)) {
    forEach(element, function (elem) {
      removeClass(elem, value);
    });
    return;
  }

  if (element.classList) {
    element.classList.remove(value);
    return;
  }

  if (element.className.indexOf(value) >= 0) {
    element.className = element.className.replace(value, '');
  }
}
/**
 * Add or remove classes from the given element.
 * @param {Element} element - The target element.
 * @param {string} value - The classes to be toggled.
 * @param {boolean} added - Add only.
 */


function toggleClass(element, value, added) {
  if (!value) {
    return;
  }

  if (isNumber(element.length)) {
    forEach(element, function (elem) {
      toggleClass(elem, value, added);
    });
    return;
  } // IE10-11 doesn't support the second parameter of `classList.toggle`


  if (added) {
    addClass(element, value);
  } else {
    removeClass(element, value);
  }
}

var REGEXP_HYPHENATE = /([a-z\d])([A-Z])/g;
/**
 * Transform the given string from camelCase to kebab-case
 * @param {string} value - The value to transform.
 * @returns {string} The transformed value.
 */

function hyphenate(value) {
  return value.replace(REGEXP_HYPHENATE, '$1-$2').toLowerCase();
}
/**
 * Get data from the given element.
 * @param {Element} element - The target element.
 * @param {string} name - The data key to get.
 * @returns {string} The data value.
 */


function getData(element, name) {
  if (isObject(element[name])) {
    return element[name];
  } else if (element.dataset) {
    return element.dataset[name];
  }

  return element.getAttribute('data-' + hyphenate(name));
}
/**
 * Set data to the given element.
 * @param {Element} element - The target element.
 * @param {string} name - The data key to set.
 * @param {string} data - The data value.
 */


function setData(element, name, data) {
  if (isObject(data)) {
    element[name] = data;
  } else if (element.dataset) {
    element.dataset[name] = data;
  } else {
    element.setAttribute('data-' + hyphenate(name), data);
  }
}
/**
 * Remove data from the given element.
 * @param {Element} element - The target element.
 * @param {string} name - The data key to remove.
 */


function removeData(element, name) {
  if (isObject(element[name])) {
    try {
      delete element[name];
    } catch (e) {
      element[name] = undefined;
    }
  } else if (element.dataset) {
    // #128 Safari not allows to delete dataset property
    try {
      delete element.dataset[name];
    } catch (e) {
      element.dataset[name] = undefined;
    }
  } else {
    element.removeAttribute('data-' + hyphenate(name));
  }
}

var REGEXP_SPACES = /\s\s*/;

var onceSupported = function () {
  var supported = false;

  if (IN_BROWSER) {
    var once = false;

    var listener = function listener() {};

    var options = Object.defineProperty({}, 'once', {
      get: function get$$1() {
        supported = true;
        return once;
      },

      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function set$$1(value) {
        once = value;
      }
    });
    WINDOW.addEventListener('test', listener, options);
    WINDOW.removeEventListener('test', listener, options);
  }

  return supported;
}();
/**
 * Remove event listener from the target element.
 * @param {Element} element - The event target.
 * @param {string} type - The event type(s).
 * @param {Function} listener - The event listener.
 * @param {Object} options - The event options.
 */


function removeListener(element, type, listener) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var handler = listener;
  type.trim().split(REGEXP_SPACES).forEach(function (event) {
    if (!onceSupported) {
      var listeners = element.listeners;

      if (listeners && listeners[event] && listeners[event][listener]) {
        handler = listeners[event][listener];
        delete listeners[event][listener];

        if (Object.keys(listeners[event]).length === 0) {
          delete listeners[event];
        }

        if (Object.keys(listeners).length === 0) {
          delete element.listeners;
        }
      }
    }

    element.removeEventListener(event, handler, options);
  });
}
/**
 * Add event listener to the target element.
 * @param {Element} element - The event target.
 * @param {string} type - The event type(s).
 * @param {Function} listener - The event listener.
 * @param {Object} options - The event options.
 */


function addListener(element, type, listener) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _handler = listener;
  type.trim().split(REGEXP_SPACES).forEach(function (event) {
    if (options.once && !onceSupported) {
      var _element$listeners = element.listeners,
          listeners = _element$listeners === undefined ? {} : _element$listeners;

      _handler = function handler() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        delete listeners[event][listener];
        element.removeEventListener(event, _handler, options);
        listener.apply(element, args);
      };

      if (!listeners[event]) {
        listeners[event] = {};
      }

      if (listeners[event][listener]) {
        element.removeEventListener(event, listeners[event][listener], options);
      }

      listeners[event][listener] = _handler;
      element.listeners = listeners;
    }

    element.addEventListener(event, _handler, options);
  });
}
/**
 * Dispatch event on the target element.
 * @param {Element} element - The event target.
 * @param {string} type - The event type(s).
 * @param {Object} data - The additional event data.
 * @returns {boolean} Indicate if the event is default prevented or not.
 */


function dispatchEvent(element, type, data) {
  var event = void 0; // Event and CustomEvent on IE9-11 are global objects, not constructors

  if (isFunction(Event) && isFunction(CustomEvent)) {
    event = new CustomEvent(type, {
      detail: data,
      bubbles: true,
      cancelable: true
    });
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(type, true, true, data);
  }

  return element.dispatchEvent(event);
}
/**
 * Get the offset base on the document.
 * @param {Element} element - The target element.
 * @returns {Object} The offset data.
 */


function getOffset(element) {
  var box = element.getBoundingClientRect();
  return {
    left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: box.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}

var location = WINDOW.location;
var REGEXP_ORIGINS = /^(https?:)\/\/([^:/?#]+):?(\d*)/i;
/**
 * Check if the given URL is a cross origin URL.
 * @param {string} url - The target URL.
 * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
 */

function isCrossOriginURL(url) {
  var parts = url.match(REGEXP_ORIGINS);
  return parts && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
}
/**
 * Add timestamp to the given URL.
 * @param {string} url - The target URL.
 * @returns {string} The result URL.
 */


function addTimestamp(url) {
  var timestamp = 'timestamp=' + new Date().getTime();
  return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
}
/**
 * Get transforms base on the given object.
 * @param {Object} obj - The target object.
 * @returns {string} A string contains transform values.
 */


function getTransforms(_ref) {
  var rotate = _ref.rotate,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      translateX = _ref.translateX,
      translateY = _ref.translateY;
  var values = [];

  if (isNumber(translateX) && translateX !== 0) {
    values.push('translateX(' + translateX + 'px)');
  }

  if (isNumber(translateY) && translateY !== 0) {
    values.push('translateY(' + translateY + 'px)');
  } // Rotate should come first before scale to match orientation transform


  if (isNumber(rotate) && rotate !== 0) {
    values.push('rotate(' + rotate + 'deg)');
  }

  if (isNumber(scaleX) && scaleX !== 1) {
    values.push('scaleX(' + scaleX + ')');
  }

  if (isNumber(scaleY) && scaleY !== 1) {
    values.push('scaleY(' + scaleY + ')');
  }

  var transform = values.length ? values.join(' ') : 'none';
  return {
    WebkitTransform: transform,
    msTransform: transform,
    transform: transform
  };
}
/**
 * Get the max ratio of a group of pointers.
 * @param {string} pointers - The target pointers.
 * @returns {number} The result ratio.
 */


function getMaxZoomRatio(pointers) {
  var pointers2 = assign({}, pointers);
  var ratios = [];
  forEach(pointers, function (pointer, pointerId) {
    delete pointers2[pointerId];
    forEach(pointers2, function (pointer2) {
      var x1 = Math.abs(pointer.startX - pointer2.startX);
      var y1 = Math.abs(pointer.startY - pointer2.startY);
      var x2 = Math.abs(pointer.endX - pointer2.endX);
      var y2 = Math.abs(pointer.endY - pointer2.endY);
      var z1 = Math.sqrt(x1 * x1 + y1 * y1);
      var z2 = Math.sqrt(x2 * x2 + y2 * y2);
      var ratio = (z2 - z1) / z1;
      ratios.push(ratio);
    });
  });
  ratios.sort(function (a, b) {
    return Math.abs(a) < Math.abs(b);
  });
  return ratios[0];
}
/**
 * Get a pointer from an event object.
 * @param {Object} event - The target event object.
 * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
 * @returns {Object} The result pointer contains start and/or end point coordinates.
 */


function getPointer(_ref2, endOnly) {
  var pageX = _ref2.pageX,
      pageY = _ref2.pageY;
  var end = {
    endX: pageX,
    endY: pageY
  };
  return endOnly ? end : assign({
    startX: pageX,
    startY: pageY
  }, end);
}
/**
 * Get the center point coordinate of a group of pointers.
 * @param {Object} pointers - The target pointers.
 * @returns {Object} The center point coordinate.
 */


function getPointersCenter(pointers) {
  var pageX = 0;
  var pageY = 0;
  var count = 0;
  forEach(pointers, function (_ref3) {
    var startX = _ref3.startX,
        startY = _ref3.startY;
    pageX += startX;
    pageY += startY;
    count += 1;
  });
  pageX /= count;
  pageY /= count;
  return {
    pageX: pageX,
    pageY: pageY
  };
}
/**
 * Check if the given value is a finite number.
 */


var isFinite = Number.isFinite || WINDOW.isFinite;
/**
 * Get the max sizes in a rectangle under the given aspect ratio.
 * @param {Object} data - The original sizes.
 * @param {string} [type='contain'] - The adjust type.
 * @returns {Object} The result sizes.
 */

function getAdjustedSizes(_ref4) // or 'cover'
{
  var aspectRatio = _ref4.aspectRatio,
      height = _ref4.height,
      width = _ref4.width;
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';

  var isValidNumber = function isValidNumber(value) {
    return isFinite(value) && value > 0;
  };

  if (isValidNumber(width) && isValidNumber(height)) {
    var adjustedWidth = height * aspectRatio;

    if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
      height = width / aspectRatio;
    } else {
      width = height * aspectRatio;
    }
  } else if (isValidNumber(width)) {
    height = width / aspectRatio;
  } else if (isValidNumber(height)) {
    width = height * aspectRatio;
  }

  return {
    width: width,
    height: height
  };
}
/**
 * Get the new sizes of a rectangle after rotated.
 * @param {Object} data - The original sizes.
 * @returns {Object} The result sizes.
 */


function getRotatedSizes(_ref5) {
  var width = _ref5.width,
      height = _ref5.height,
      degree = _ref5.degree;
  degree = Math.abs(degree) % 180;

  if (degree === 90) {
    return {
      width: height,
      height: width
    };
  }

  var arc = degree % 90 * Math.PI / 180;
  var sinArc = Math.sin(arc);
  var cosArc = Math.cos(arc);
  var newWidth = width * cosArc + height * sinArc;
  var newHeight = width * sinArc + height * cosArc;
  return degree > 90 ? {
    width: newHeight,
    height: newWidth
  } : {
    width: newWidth,
    height: newHeight
  };
}
/**
 * Get a canvas which drew the given image.
 * @param {HTMLImageElement} image - The image for drawing.
 * @param {Object} imageData - The image data.
 * @param {Object} canvasData - The canvas data.
 * @param {Object} options - The options.
 * @returns {HTMLCanvasElement} The result canvas.
 */


function getSourceCanvas(image, _ref6, _ref7, _ref8) {
  var imageAspectRatio = _ref6.aspectRatio,
      imageNaturalWidth = _ref6.naturalWidth,
      imageNaturalHeight = _ref6.naturalHeight,
      _ref6$rotate = _ref6.rotate,
      rotate = _ref6$rotate === undefined ? 0 : _ref6$rotate,
      _ref6$scaleX = _ref6.scaleX,
      scaleX = _ref6$scaleX === undefined ? 1 : _ref6$scaleX,
      _ref6$scaleY = _ref6.scaleY,
      scaleY = _ref6$scaleY === undefined ? 1 : _ref6$scaleY;
  var aspectRatio = _ref7.aspectRatio,
      naturalWidth = _ref7.naturalWidth,
      naturalHeight = _ref7.naturalHeight;
  var _ref8$fillColor = _ref8.fillColor,
      fillColor = _ref8$fillColor === undefined ? 'transparent' : _ref8$fillColor,
      _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
      imageSmoothingEnabled = _ref8$imageSmoothingE === undefined ? true : _ref8$imageSmoothingE,
      _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
      imageSmoothingQuality = _ref8$imageSmoothingQ === undefined ? 'low' : _ref8$imageSmoothingQ,
      _ref8$maxWidth = _ref8.maxWidth,
      maxWidth = _ref8$maxWidth === undefined ? Infinity : _ref8$maxWidth,
      _ref8$maxHeight = _ref8.maxHeight,
      maxHeight = _ref8$maxHeight === undefined ? Infinity : _ref8$maxHeight,
      _ref8$minWidth = _ref8.minWidth,
      minWidth = _ref8$minWidth === undefined ? 0 : _ref8$minWidth,
      _ref8$minHeight = _ref8.minHeight,
      minHeight = _ref8$minHeight === undefined ? 0 : _ref8$minHeight;
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  var maxSizes = getAdjustedSizes({
    aspectRatio: aspectRatio,
    width: maxWidth,
    height: maxHeight
  });
  var minSizes = getAdjustedSizes({
    aspectRatio: aspectRatio,
    width: minWidth,
    height: minHeight
  }, 'cover');
  var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
  var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight)); // Note: should always use image's natural sizes for drawing as
  // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90

  var destMaxSizes = getAdjustedSizes({
    aspectRatio: imageAspectRatio,
    width: maxWidth,
    height: maxHeight
  });
  var destMinSizes = getAdjustedSizes({
    aspectRatio: imageAspectRatio,
    width: minWidth,
    height: minHeight
  }, 'cover');
  var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
  var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
  var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
  canvas.width = normalizeDecimalNumber(width);
  canvas.height = normalizeDecimalNumber(height);
  context.fillStyle = fillColor;
  context.fillRect(0, 0, width, height);
  context.save();
  context.translate(width / 2, height / 2);
  context.rotate(rotate * Math.PI / 180);
  context.scale(scaleX, scaleY);
  context.imageSmoothingEnabled = imageSmoothingEnabled;
  context.imageSmoothingQuality = imageSmoothingQuality;
  context.drawImage.apply(context, [image].concat(toConsumableArray(params.map(function (param) {
    return Math.floor(normalizeDecimalNumber(param));
  }))));
  context.restore();
  return canvas;
}

var fromCharCode = String.fromCharCode;
/**
 * Get string from char code in data view.
 * @param {DataView} dataView - The data view for read.
 * @param {number} start - The start index.
 * @param {number} length - The read length.
 * @returns {string} The read result.
 */

function getStringFromCharCode(dataView, start, length) {
  var str = '';
  var i = void 0;
  length += start;

  for (i = start; i < length; i += 1) {
    str += fromCharCode(dataView.getUint8(i));
  }

  return str;
}

var REGEXP_DATA_URL_HEAD = /^data:.*,/;
/**
 * Transform Data URL to array buffer.
 * @param {string} dataURL - The Data URL to transform.
 * @returns {ArrayBuffer} The result array buffer.
 */

function dataURLToArrayBuffer(dataURL) {
  var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
  var binary = atob(base64);
  var arrayBuffer = new ArrayBuffer(binary.length);
  var uint8 = new Uint8Array(arrayBuffer);
  forEach(uint8, function (value, i) {
    uint8[i] = binary.charCodeAt(i);
  });
  return arrayBuffer;
}
/**
 * Transform array buffer to Data URL.
 * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
 * @param {string} mimeType - The mime type of the Data URL.
 * @returns {string} The result Data URL.
 */


function arrayBufferToDataURL(arrayBuffer, mimeType) {
  var uint8 = new Uint8Array(arrayBuffer);
  var data = ''; // TypedArray.prototype.forEach is not supported in some browsers.

  forEach(uint8, function (value) {
    data += fromCharCode(value);
  });
  return 'data:' + mimeType + ';base64,' + btoa(data);
}
/**
 * Get orientation value from given array buffer.
 * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
 * @returns {number} The read orientation value.
 */


function getOrientation(arrayBuffer) {
  var dataView = new DataView(arrayBuffer);
  var orientation = void 0;
  var littleEndian = void 0;
  var app1Start = void 0;
  var ifdStart = void 0; // Only handle JPEG image (start by 0xFFD8)

  if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
    var length = dataView.byteLength;
    var offset = 2;

    while (offset < length) {
      if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
        app1Start = offset;
        break;
      }

      offset += 1;
    }
  }

  if (app1Start) {
    var exifIDCode = app1Start + 4;
    var tiffOffset = app1Start + 10;

    if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
      var endianness = dataView.getUint16(tiffOffset);
      littleEndian = endianness === 0x4949;

      if (littleEndian || endianness === 0x4D4D
      /* bigEndian */
      ) {
          if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
            var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

            if (firstIFDOffset >= 0x00000008) {
              ifdStart = tiffOffset + firstIFDOffset;
            }
          }
        }
    }
  }

  if (ifdStart) {
    var _length = dataView.getUint16(ifdStart, littleEndian);

    var _offset = void 0;

    var i = void 0;

    for (i = 0; i < _length; i += 1) {
      _offset = ifdStart + i * 12 + 2;

      if (dataView.getUint16(_offset, littleEndian) === 0x0112
      /* Orientation */
      ) {
          // 8 is the offset of the current tag's value
          _offset += 8; // Get the original orientation value

          orientation = dataView.getUint16(_offset, littleEndian); // Override the orientation with its default value

          dataView.setUint16(_offset, 1, littleEndian);
          break;
        }
    }
  }

  return orientation;
}
/**
 * Parse Exif Orientation value.
 * @param {number} orientation - The orientation to parse.
 * @returns {Object} The parsed result.
 */


function parseOrientation(orientation) {
  var rotate = 0;
  var scaleX = 1;
  var scaleY = 1;

  switch (orientation) {
    // Flip horizontal
    case 2:
      scaleX = -1;
      break;
    // Rotate left 180°

    case 3:
      rotate = -180;
      break;
    // Flip vertical

    case 4:
      scaleY = -1;
      break;
    // Flip vertical and rotate right 90°

    case 5:
      rotate = 90;
      scaleY = -1;
      break;
    // Rotate right 90°

    case 6:
      rotate = 90;
      break;
    // Flip horizontal and rotate right 90°

    case 7:
      rotate = 90;
      scaleX = -1;
      break;
    // Rotate left 90°

    case 8:
      rotate = -90;
      break;

    default:
  }

  return {
    rotate: rotate,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

var render = {
  render: function render() {
    this.initContainer();
    this.initCanvas();
    this.initCropBox();
    this.renderCanvas();

    if (this.cropped) {
      this.renderCropBox();
    }
  },
  initContainer: function initContainer() {
    var element = this.element,
        options = this.options,
        container = this.container,
        cropper = this.cropper;
    addClass(cropper, CLASS_HIDDEN);
    removeClass(element, CLASS_HIDDEN);
    var containerData = {
      width: Math.max(container.offsetWidth, Number(options.minContainerWidth) || 200),
      height: Math.max(container.offsetHeight, Number(options.minContainerHeight) || 100)
    };
    this.containerData = containerData;
    setStyle(cropper, {
      width: containerData.width,
      height: containerData.height
    });
    addClass(element, CLASS_HIDDEN);
    removeClass(cropper, CLASS_HIDDEN);
  },
  // Canvas (image wrapper)
  initCanvas: function initCanvas() {
    var containerData = this.containerData,
        imageData = this.imageData;
    var viewMode = this.options.viewMode;
    var rotated = Math.abs(imageData.rotate) % 180 === 90;
    var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
    var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
    var aspectRatio = naturalWidth / naturalHeight;
    var canvasWidth = containerData.width;
    var canvasHeight = containerData.height;

    if (containerData.height * aspectRatio > containerData.width) {
      if (viewMode === 3) {
        canvasWidth = containerData.height * aspectRatio;
      } else {
        canvasHeight = containerData.width / aspectRatio;
      }
    } else if (viewMode === 3) {
      canvasHeight = containerData.width / aspectRatio;
    } else {
      canvasWidth = containerData.height * aspectRatio;
    }

    var canvasData = {
      aspectRatio: aspectRatio,
      naturalWidth: naturalWidth,
      naturalHeight: naturalHeight,
      width: canvasWidth,
      height: canvasHeight
    };
    canvasData.left = (containerData.width - canvasWidth) / 2;
    canvasData.top = (containerData.height - canvasHeight) / 2;
    canvasData.oldLeft = canvasData.left;
    canvasData.oldTop = canvasData.top;
    this.canvasData = canvasData;
    this.limited = viewMode === 1 || viewMode === 2;
    this.limitCanvas(true, true);
    this.initialImageData = assign({}, imageData);
    this.initialCanvasData = assign({}, canvasData);
  },
  limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
    var options = this.options,
        containerData = this.containerData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;
    var viewMode = options.viewMode;
    var aspectRatio = canvasData.aspectRatio;
    var cropped = this.cropped && cropBoxData;

    if (sizeLimited) {
      var minCanvasWidth = Number(options.minCanvasWidth) || 0;
      var minCanvasHeight = Number(options.minCanvasHeight) || 0;

      if (viewMode > 1) {
        minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
        minCanvasHeight = Math.max(minCanvasHeight, containerData.height);

        if (viewMode === 3) {
          if (minCanvasHeight * aspectRatio > minCanvasWidth) {
            minCanvasWidth = minCanvasHeight * aspectRatio;
          } else {
            minCanvasHeight = minCanvasWidth / aspectRatio;
          }
        }
      } else if (viewMode > 0) {
        if (minCanvasWidth) {
          minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
        } else if (minCanvasHeight) {
          minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
        } else if (cropped) {
          minCanvasWidth = cropBoxData.width;
          minCanvasHeight = cropBoxData.height;

          if (minCanvasHeight * aspectRatio > minCanvasWidth) {
            minCanvasWidth = minCanvasHeight * aspectRatio;
          } else {
            minCanvasHeight = minCanvasWidth / aspectRatio;
          }
        }
      }

      var _getAdjustedSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: minCanvasWidth,
        height: minCanvasHeight
      });

      minCanvasWidth = _getAdjustedSizes.width;
      minCanvasHeight = _getAdjustedSizes.height;
      canvasData.minWidth = minCanvasWidth;
      canvasData.minHeight = minCanvasHeight;
      canvasData.maxWidth = Infinity;
      canvasData.maxHeight = Infinity;
    }

    if (positionLimited) {
      if (viewMode) {
        var newCanvasLeft = containerData.width - canvasData.width;
        var newCanvasTop = containerData.height - canvasData.height;
        canvasData.minLeft = Math.min(0, newCanvasLeft);
        canvasData.minTop = Math.min(0, newCanvasTop);
        canvasData.maxLeft = Math.max(0, newCanvasLeft);
        canvasData.maxTop = Math.max(0, newCanvasTop);

        if (cropped && this.limited) {
          canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
          canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
          canvasData.maxLeft = cropBoxData.left;
          canvasData.maxTop = cropBoxData.top;

          if (viewMode === 2) {
            if (canvasData.width >= containerData.width) {
              canvasData.minLeft = Math.min(0, newCanvasLeft);
              canvasData.maxLeft = Math.max(0, newCanvasLeft);
            }

            if (canvasData.height >= containerData.height) {
              canvasData.minTop = Math.min(0, newCanvasTop);
              canvasData.maxTop = Math.max(0, newCanvasTop);
            }
          }
        }
      } else {
        canvasData.minLeft = -canvasData.width;
        canvasData.minTop = -canvasData.height;
        canvasData.maxLeft = containerData.width;
        canvasData.maxTop = containerData.height;
      }
    }
  },
  renderCanvas: function renderCanvas(changed, transformed) {
    var canvasData = this.canvasData,
        imageData = this.imageData;

    if (transformed) {
      var _getRotatedSizes = getRotatedSizes({
        width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
        height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
        degree: imageData.rotate || 0
      }),
          naturalWidth = _getRotatedSizes.width,
          naturalHeight = _getRotatedSizes.height;

      var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
      var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
      canvasData.left -= (width - canvasData.width) / 2;
      canvasData.top -= (height - canvasData.height) / 2;
      canvasData.width = width;
      canvasData.height = height;
      canvasData.aspectRatio = naturalWidth / naturalHeight;
      canvasData.naturalWidth = naturalWidth;
      canvasData.naturalHeight = naturalHeight;
      this.limitCanvas(true, false);
    }

    if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
      canvasData.left = canvasData.oldLeft;
    }

    if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
      canvasData.top = canvasData.oldTop;
    }

    canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
    canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
    this.limitCanvas(false, true);
    canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
    canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
    canvasData.oldLeft = canvasData.left;
    canvasData.oldTop = canvasData.top;
    setStyle(this.canvas, assign({
      width: canvasData.width,
      height: canvasData.height
    }, getTransforms({
      translateX: canvasData.left,
      translateY: canvasData.top
    })));
    this.renderImage(changed);

    if (this.cropped && this.limited) {
      this.limitCropBox(true, true);
    }
  },
  renderImage: function renderImage(changed) {
    var canvasData = this.canvasData,
        imageData = this.imageData;
    var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
    var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
    assign(imageData, {
      width: width,
      height: height,
      left: (canvasData.width - width) / 2,
      top: (canvasData.height - height) / 2
    });
    setStyle(this.image, assign({
      width: imageData.width,
      height: imageData.height
    }, getTransforms(assign({
      translateX: imageData.left,
      translateY: imageData.top
    }, imageData))));

    if (changed) {
      this.output();
    }
  },
  initCropBox: function initCropBox() {
    var options = this.options,
        canvasData = this.canvasData;
    var aspectRatio = options.aspectRatio;
    var autoCropArea = Number(options.autoCropArea) || 0.8;
    var cropBoxData = {
      width: canvasData.width,
      height: canvasData.height
    };

    if (aspectRatio) {
      if (canvasData.height * aspectRatio > canvasData.width) {
        cropBoxData.height = cropBoxData.width / aspectRatio;
      } else {
        cropBoxData.width = cropBoxData.height * aspectRatio;
      }
    }

    this.cropBoxData = cropBoxData;
    this.limitCropBox(true, true); // Initialize auto crop area

    cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
    cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight); // The width/height of auto crop area must large than "minWidth/Height"

    cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
    cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
    cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
    cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
    cropBoxData.oldLeft = cropBoxData.left;
    cropBoxData.oldTop = cropBoxData.top;
    this.initialCropBoxData = assign({}, cropBoxData);
  },
  limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
    var options = this.options,
        containerData = this.containerData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData,
        limited = this.limited;
    var aspectRatio = options.aspectRatio;

    if (sizeLimited) {
      var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
      var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
      var maxCropBoxWidth = Math.min(containerData.width, limited ? canvasData.width : containerData.width);
      var maxCropBoxHeight = Math.min(containerData.height, limited ? canvasData.height : containerData.height); // The min/maxCropBoxWidth/Height must be less than container's width/height

      minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
      minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);

      if (aspectRatio) {
        if (minCropBoxWidth && minCropBoxHeight) {
          if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }
        } else if (minCropBoxWidth) {
          minCropBoxHeight = minCropBoxWidth / aspectRatio;
        } else if (minCropBoxHeight) {
          minCropBoxWidth = minCropBoxHeight * aspectRatio;
        }

        if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
          maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
        } else {
          maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
        }
      } // The minWidth/Height must be less than maxWidth/Height


      cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
      cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
      cropBoxData.maxWidth = maxCropBoxWidth;
      cropBoxData.maxHeight = maxCropBoxHeight;
    }

    if (positionLimited) {
      if (limited) {
        cropBoxData.minLeft = Math.max(0, canvasData.left);
        cropBoxData.minTop = Math.max(0, canvasData.top);
        cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
        cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
      } else {
        cropBoxData.minLeft = 0;
        cropBoxData.minTop = 0;
        cropBoxData.maxLeft = containerData.width - cropBoxData.width;
        cropBoxData.maxTop = containerData.height - cropBoxData.height;
      }
    }
  },
  renderCropBox: function renderCropBox() {
    var options = this.options,
        containerData = this.containerData,
        cropBoxData = this.cropBoxData;

    if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
      cropBoxData.left = cropBoxData.oldLeft;
    }

    if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
      cropBoxData.top = cropBoxData.oldTop;
    }

    cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
    cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
    this.limitCropBox(false, true);
    cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
    cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
    cropBoxData.oldLeft = cropBoxData.left;
    cropBoxData.oldTop = cropBoxData.top;

    if (options.movable && options.cropBoxMovable) {
      // Turn to move the canvas when the crop box is equal to the container
      setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
    }

    setStyle(this.cropBox, assign({
      width: cropBoxData.width,
      height: cropBoxData.height
    }, getTransforms({
      translateX: cropBoxData.left,
      translateY: cropBoxData.top
    })));

    if (this.cropped && this.limited) {
      this.limitCanvas(true, true);
    }

    if (!this.disabled) {
      this.output();
    }
  },
  output: function output() {
    this.preview();
    dispatchEvent(this.element, EVENT_CROP, this.getData());
  }
};
var preview = {
  initPreview: function initPreview() {
    var crossOrigin = this.crossOrigin;
    var preview = this.options.preview;
    var url = crossOrigin ? this.crossOriginUrl : this.url;
    var image = document.createElement('img');

    if (crossOrigin) {
      image.crossOrigin = crossOrigin;
    }

    image.src = url;
    this.viewBox.appendChild(image);
    this.viewBoxImage = image;

    if (!preview) {
      return;
    }

    var previews = preview;

    if (typeof preview === 'string') {
      previews = this.element.ownerDocument.querySelectorAll(preview);
    } else if (preview.querySelector) {
      previews = [preview];
    }

    this.previews = previews;
    forEach(previews, function (el) {
      var img = document.createElement('img'); // Save the original size for recover

      setData(el, DATA_PREVIEW, {
        width: el.offsetWidth,
        height: el.offsetHeight,
        html: el.innerHTML
      });

      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }

      img.src = url;
      /**
       * Override img element styles
       * Add `display:block` to avoid margin top issue
       * Add `height:auto` to override `height` attribute on IE8
       * (Occur only when margin-top <= -height)
       */

      img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
      el.innerHTML = '';
      el.appendChild(img);
    });
  },
  resetPreview: function resetPreview() {
    forEach(this.previews, function (element) {
      var data = getData(element, DATA_PREVIEW);
      setStyle(element, {
        width: data.width,
        height: data.height
      });
      element.innerHTML = data.html;
      removeData(element, DATA_PREVIEW);
    });
  },
  preview: function preview() {
    var imageData = this.imageData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;
    var cropBoxWidth = cropBoxData.width,
        cropBoxHeight = cropBoxData.height;
    var width = imageData.width,
        height = imageData.height;
    var left = cropBoxData.left - canvasData.left - imageData.left;
    var top = cropBoxData.top - canvasData.top - imageData.top;

    if (!this.cropped || this.disabled) {
      return;
    }

    setStyle(this.viewBoxImage, assign({
      width: width,
      height: height
    }, getTransforms(assign({
      translateX: -left,
      translateY: -top
    }, imageData))));
    forEach(this.previews, function (element) {
      var data = getData(element, DATA_PREVIEW);
      var originalWidth = data.width;
      var originalHeight = data.height;
      var newWidth = originalWidth;
      var newHeight = originalHeight;
      var ratio = 1;

      if (cropBoxWidth) {
        ratio = originalWidth / cropBoxWidth;
        newHeight = cropBoxHeight * ratio;
      }

      if (cropBoxHeight && newHeight > originalHeight) {
        ratio = originalHeight / cropBoxHeight;
        newWidth = cropBoxWidth * ratio;
        newHeight = originalHeight;
      }

      setStyle(element, {
        width: newWidth,
        height: newHeight
      });
      setStyle(element.getElementsByTagName('img')[0], assign({
        width: width * ratio,
        height: height * ratio
      }, getTransforms(assign({
        translateX: -left * ratio,
        translateY: -top * ratio
      }, imageData))));
    });
  }
};
var events = {
  bind: function bind() {
    var element = this.element,
        options = this.options,
        cropper = this.cropper;

    if (isFunction(options.cropstart)) {
      addListener(element, EVENT_CROP_START, options.cropstart);
    }

    if (isFunction(options.cropmove)) {
      addListener(element, EVENT_CROP_MOVE, options.cropmove);
    }

    if (isFunction(options.cropend)) {
      addListener(element, EVENT_CROP_END, options.cropend);
    }

    if (isFunction(options.crop)) {
      addListener(element, EVENT_CROP, options.crop);
    }

    if (isFunction(options.zoom)) {
      addListener(element, EVENT_ZOOM, options.zoom);
    }

    addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));

    if (options.zoomable && options.zoomOnWheel) {
      addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this));
    }

    if (options.toggleDragModeOnDblclick) {
      addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
    }

    addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
    addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));

    if (options.responsive) {
      addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
    }
  },
  unbind: function unbind() {
    var element = this.element,
        options = this.options,
        cropper = this.cropper;

    if (isFunction(options.cropstart)) {
      removeListener(element, EVENT_CROP_START, options.cropstart);
    }

    if (isFunction(options.cropmove)) {
      removeListener(element, EVENT_CROP_MOVE, options.cropmove);
    }

    if (isFunction(options.cropend)) {
      removeListener(element, EVENT_CROP_END, options.cropend);
    }

    if (isFunction(options.crop)) {
      removeListener(element, EVENT_CROP, options.crop);
    }

    if (isFunction(options.zoom)) {
      removeListener(element, EVENT_ZOOM, options.zoom);
    }

    removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);

    if (options.zoomable && options.zoomOnWheel) {
      removeListener(cropper, EVENT_WHEEL, this.onWheel);
    }

    if (options.toggleDragModeOnDblclick) {
      removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
    }

    removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
    removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);

    if (options.responsive) {
      removeListener(window, EVENT_RESIZE, this.onResize);
    }
  }
};
var handlers = {
  resize: function resize() {
    var options = this.options,
        container = this.container,
        containerData = this.containerData;
    var minContainerWidth = Number(options.minContainerWidth) || 200;
    var minContainerHeight = Number(options.minContainerHeight) || 100;

    if (this.disabled || containerData.width <= minContainerWidth || containerData.height <= minContainerHeight) {
      return;
    }

    var ratio = container.offsetWidth / containerData.width; // Resize when width changed or height changed

    if (ratio !== 1 || container.offsetHeight !== containerData.height) {
      var canvasData = void 0;
      var cropBoxData = void 0;

      if (options.restore) {
        canvasData = this.getCanvasData();
        cropBoxData = this.getCropBoxData();
      }

      this.render();

      if (options.restore) {
        this.setCanvasData(forEach(canvasData, function (n, i) {
          canvasData[i] = n * ratio;
        }));
        this.setCropBoxData(forEach(cropBoxData, function (n, i) {
          cropBoxData[i] = n * ratio;
        }));
      }
    }
  },
  dblclick: function dblclick() {
    if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
      return;
    }

    this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
  },
  wheel: function wheel(e) {
    var _this = this;

    var ratio = Number(this.options.wheelZoomRatio) || 0.1;
    var delta = 1;

    if (this.disabled) {
      return;
    }

    e.preventDefault(); // Limit wheel speed to prevent zoom too fast (#21)

    if (this.wheeling) {
      return;
    }

    this.wheeling = true;
    setTimeout(function () {
      _this.wheeling = false;
    }, 50);

    if (e.deltaY) {
      delta = e.deltaY > 0 ? 1 : -1;
    } else if (e.wheelDelta) {
      delta = -e.wheelDelta / 120;
    } else if (e.detail) {
      delta = e.detail > 0 ? 1 : -1;
    }

    this.zoom(-delta * ratio, e);
  },
  cropStart: function cropStart(e) {
    if (this.disabled) {
      return;
    }

    var options = this.options,
        pointers = this.pointers;
    var action = void 0;

    if (e.changedTouches) {
      // Handle touch event
      forEach(e.changedTouches, function (touch) {
        pointers[touch.identifier] = getPointer(touch);
      });
    } else {
      // Handle mouse event and pointer event
      pointers[e.pointerId || 0] = getPointer(e);
    }

    if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
      action = ACTION_ZOOM;
    } else {
      action = getData(e.target, DATA_ACTION);
    }

    if (!REGEXP_ACTIONS.test(action)) {
      return;
    }

    if (dispatchEvent(this.element, EVENT_CROP_START, {
      originalEvent: e,
      action: action
    }) === false) {
      return;
    }

    e.preventDefault();
    this.action = action;
    this.cropping = false;

    if (action === ACTION_CROP) {
      this.cropping = true;
      addClass(this.dragBox, CLASS_MODAL);
    }
  },
  cropMove: function cropMove(e) {
    var action = this.action;

    if (this.disabled || !action) {
      return;
    }

    var pointers = this.pointers;
    e.preventDefault();

    if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
      originalEvent: e,
      action: action
    }) === false) {
      return;
    }

    if (e.changedTouches) {
      forEach(e.changedTouches, function (touch) {
        assign(pointers[touch.identifier], getPointer(touch, true));
      });
    } else {
      assign(pointers[e.pointerId || 0], getPointer(e, true));
    }

    this.change(e);
  },
  cropEnd: function cropEnd(e) {
    if (this.disabled) {
      return;
    }

    var action = this.action,
        pointers = this.pointers;

    if (e.changedTouches) {
      forEach(e.changedTouches, function (touch) {
        delete pointers[touch.identifier];
      });
    } else {
      delete pointers[e.pointerId || 0];
    }

    if (!action) {
      return;
    }

    e.preventDefault();

    if (!Object.keys(pointers).length) {
      this.action = '';
    }

    if (this.cropping) {
      this.cropping = false;
      toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
    }

    dispatchEvent(this.element, EVENT_CROP_END, {
      originalEvent: e,
      action: action
    });
  }
};
var change = {
  change: function change(e) {
    var options = this.options,
        canvasData = this.canvasData,
        containerData = this.containerData,
        cropBoxData = this.cropBoxData,
        pointers = this.pointers;
    var action = this.action;
    var aspectRatio = options.aspectRatio;
    var left = cropBoxData.left,
        top = cropBoxData.top,
        width = cropBoxData.width,
        height = cropBoxData.height;
    var right = left + width;
    var bottom = top + height;
    var minLeft = 0;
    var minTop = 0;
    var maxWidth = containerData.width;
    var maxHeight = containerData.height;
    var renderable = true;
    var offset = void 0; // Locking aspect ratio in "free mode" by holding shift key

    if (!aspectRatio && e.shiftKey) {
      aspectRatio = width && height ? width / height : 1;
    }

    if (this.limited) {
      minLeft = cropBoxData.minLeft;
      minTop = cropBoxData.minTop;
      maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
      maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
    }

    var pointer = pointers[Object.keys(pointers)[0]];
    var range = {
      x: pointer.endX - pointer.startX,
      y: pointer.endY - pointer.startY
    };

    var check = function check(side) {
      switch (side) {
        case ACTION_EAST:
          if (right + range.x > maxWidth) {
            range.x = maxWidth - right;
          }

          break;

        case ACTION_WEST:
          if (left + range.x < minLeft) {
            range.x = minLeft - left;
          }

          break;

        case ACTION_NORTH:
          if (top + range.y < minTop) {
            range.y = minTop - top;
          }

          break;

        case ACTION_SOUTH:
          if (bottom + range.y > maxHeight) {
            range.y = maxHeight - bottom;
          }

          break;

        default:
      }
    };

    switch (action) {
      // Move crop box
      case ACTION_ALL:
        left += range.x;
        top += range.y;
        break;
      // Resize crop box

      case ACTION_EAST:
        if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
          renderable = false;
          break;
        }

        check(ACTION_EAST);
        width += range.x;

        if (aspectRatio) {
          height = width / aspectRatio;
          top -= range.x / aspectRatio / 2;
        }

        if (width < 0) {
          action = ACTION_WEST;
          width = 0;
        }

        break;

      case ACTION_NORTH:
        if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
          renderable = false;
          break;
        }

        check(ACTION_NORTH);
        height -= range.y;
        top += range.y;

        if (aspectRatio) {
          width = height * aspectRatio;
          left += range.y * aspectRatio / 2;
        }

        if (height < 0) {
          action = ACTION_SOUTH;
          height = 0;
        }

        break;

      case ACTION_WEST:
        if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
          renderable = false;
          break;
        }

        check(ACTION_WEST);
        width -= range.x;
        left += range.x;

        if (aspectRatio) {
          height = width / aspectRatio;
          top += range.x / aspectRatio / 2;
        }

        if (width < 0) {
          action = ACTION_EAST;
          width = 0;
        }

        break;

      case ACTION_SOUTH:
        if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
          renderable = false;
          break;
        }

        check(ACTION_SOUTH);
        height += range.y;

        if (aspectRatio) {
          width = height * aspectRatio;
          left -= range.y * aspectRatio / 2;
        }

        if (height < 0) {
          action = ACTION_NORTH;
          height = 0;
        }

        break;

      case ACTION_NORTH_EAST:
        if (aspectRatio) {
          if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
            renderable = false;
            break;
          }

          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;
          width = height * aspectRatio;
        } else {
          check(ACTION_NORTH);
          check(ACTION_EAST);

          if (range.x >= 0) {
            if (right < maxWidth) {
              width += range.x;
            } else if (range.y <= 0 && top <= minTop) {
              renderable = false;
            }
          } else {
            width += range.x;
          }

          if (range.y <= 0) {
            if (top > minTop) {
              height -= range.y;
              top += range.y;
            }
          } else {
            height -= range.y;
            top += range.y;
          }
        }

        if (width < 0 && height < 0) {
          action = ACTION_SOUTH_WEST;
          height = 0;
          width = 0;
        } else if (width < 0) {
          action = ACTION_NORTH_WEST;
          width = 0;
        } else if (height < 0) {
          action = ACTION_SOUTH_EAST;
          height = 0;
        }

        break;

      case ACTION_NORTH_WEST:
        if (aspectRatio) {
          if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
            renderable = false;
            break;
          }

          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;
          width = height * aspectRatio;
          left += range.y * aspectRatio;
        } else {
          check(ACTION_NORTH);
          check(ACTION_WEST);

          if (range.x <= 0) {
            if (left > minLeft) {
              width -= range.x;
              left += range.x;
            } else if (range.y <= 0 && top <= minTop) {
              renderable = false;
            }
          } else {
            width -= range.x;
            left += range.x;
          }

          if (range.y <= 0) {
            if (top > minTop) {
              height -= range.y;
              top += range.y;
            }
          } else {
            height -= range.y;
            top += range.y;
          }
        }

        if (width < 0 && height < 0) {
          action = ACTION_SOUTH_EAST;
          height = 0;
          width = 0;
        } else if (width < 0) {
          action = ACTION_NORTH_EAST;
          width = 0;
        } else if (height < 0) {
          action = ACTION_SOUTH_WEST;
          height = 0;
        }

        break;

      case ACTION_SOUTH_WEST:
        if (aspectRatio) {
          if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
            renderable = false;
            break;
          }

          check(ACTION_WEST);
          width -= range.x;
          left += range.x;
          height = width / aspectRatio;
        } else {
          check(ACTION_SOUTH);
          check(ACTION_WEST);

          if (range.x <= 0) {
            if (left > minLeft) {
              width -= range.x;
              left += range.x;
            } else if (range.y >= 0 && bottom >= maxHeight) {
              renderable = false;
            }
          } else {
            width -= range.x;
            left += range.x;
          }

          if (range.y >= 0) {
            if (bottom < maxHeight) {
              height += range.y;
            }
          } else {
            height += range.y;
          }
        }

        if (width < 0 && height < 0) {
          action = ACTION_NORTH_EAST;
          height = 0;
          width = 0;
        } else if (width < 0) {
          action = ACTION_SOUTH_EAST;
          width = 0;
        } else if (height < 0) {
          action = ACTION_NORTH_WEST;
          height = 0;
        }

        break;

      case ACTION_SOUTH_EAST:
        if (aspectRatio) {
          if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
            renderable = false;
            break;
          }

          check(ACTION_EAST);
          width += range.x;
          height = width / aspectRatio;
        } else {
          check(ACTION_SOUTH);
          check(ACTION_EAST);

          if (range.x >= 0) {
            if (right < maxWidth) {
              width += range.x;
            } else if (range.y >= 0 && bottom >= maxHeight) {
              renderable = false;
            }
          } else {
            width += range.x;
          }

          if (range.y >= 0) {
            if (bottom < maxHeight) {
              height += range.y;
            }
          } else {
            height += range.y;
          }
        }

        if (width < 0 && height < 0) {
          action = ACTION_NORTH_WEST;
          height = 0;
          width = 0;
        } else if (width < 0) {
          action = ACTION_SOUTH_WEST;
          width = 0;
        } else if (height < 0) {
          action = ACTION_NORTH_EAST;
          height = 0;
        }

        break;
      // Move canvas

      case ACTION_MOVE:
        this.move(range.x, range.y);
        renderable = false;
        break;
      // Zoom canvas

      case ACTION_ZOOM:
        this.zoom(getMaxZoomRatio(pointers), e);
        renderable = false;
        break;
      // Create crop box

      case ACTION_CROP:
        if (!range.x || !range.y) {
          renderable = false;
          break;
        }

        offset = getOffset(this.cropper);
        left = pointer.startX - offset.left;
        top = pointer.startY - offset.top;
        width = cropBoxData.minWidth;
        height = cropBoxData.minHeight;

        if (range.x > 0) {
          action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
        } else if (range.x < 0) {
          left -= width;
          action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
        }

        if (range.y < 0) {
          top -= height;
        } // Show the crop box if is hidden


        if (!this.cropped) {
          removeClass(this.cropBox, CLASS_HIDDEN);
          this.cropped = true;

          if (this.limited) {
            this.limitCropBox(true, true);
          }
        }

        break;

      default:
    }

    if (renderable) {
      cropBoxData.width = width;
      cropBoxData.height = height;
      cropBoxData.left = left;
      cropBoxData.top = top;
      this.action = action;
      this.renderCropBox();
    } // Override


    forEach(pointers, function (p) {
      p.startX = p.endX;
      p.startY = p.endY;
    });
  }
};
var methods = {
  // Show the crop box manually
  crop: function crop() {
    if (this.ready && !this.cropped && !this.disabled) {
      this.cropped = true;
      this.limitCropBox(true, true);

      if (this.options.modal) {
        addClass(this.dragBox, CLASS_MODAL);
      }

      removeClass(this.cropBox, CLASS_HIDDEN);
      this.setCropBoxData(this.initialCropBoxData);
    }

    return this;
  },
  // Reset the image and crop box to their initial states
  reset: function reset() {
    if (this.ready && !this.disabled) {
      this.imageData = assign({}, this.initialImageData);
      this.canvasData = assign({}, this.initialCanvasData);
      this.cropBoxData = assign({}, this.initialCropBoxData);
      this.renderCanvas();

      if (this.cropped) {
        this.renderCropBox();
      }
    }

    return this;
  },
  // Clear the crop box
  clear: function clear() {
    if (this.cropped && !this.disabled) {
      assign(this.cropBoxData, {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      });
      this.cropped = false;
      this.renderCropBox();
      this.limitCanvas(true, true); // Render canvas after crop box rendered

      this.renderCanvas();
      removeClass(this.dragBox, CLASS_MODAL);
      addClass(this.cropBox, CLASS_HIDDEN);
    }

    return this;
  },

  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function replace(url) {
    var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!this.disabled && url) {
      if (this.isImg) {
        this.element.src = url;
      }

      if (hasSameSize) {
        this.url = url;
        this.image.src = url;

        if (this.ready) {
          this.viewBoxImage.src = url;
          forEach(this.previews, function (element) {
            element.getElementsByTagName('img')[0].src = url;
          });
        }
      } else {
        if (this.isImg) {
          this.replaced = true;
        }

        this.options.data = null;
        this.uncreate();
        this.load(url);
      }
    }

    return this;
  },
  // Enable (unfreeze) the cropper
  enable: function enable() {
    if (this.ready && this.disabled) {
      this.disabled = false;
      removeClass(this.cropper, CLASS_DISABLED);
    }

    return this;
  },
  // Disable (freeze) the cropper
  disable: function disable() {
    if (this.ready && !this.disabled) {
      this.disabled = true;
      addClass(this.cropper, CLASS_DISABLED);
    }

    return this;
  },

  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function destroy() {
    var element = this.element;

    if (!getData(element, NAMESPACE)) {
      return this;
    }

    if (this.isImg && this.replaced) {
      element.src = this.originalUrl;
    }

    this.uncreate();
    removeData(element, NAMESPACE);
    return this;
  },

  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function move(offsetX) {
    var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
    var _canvasData = this.canvasData,
        left = _canvasData.left,
        top = _canvasData.top;
    return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
  },

  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function moveTo(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
    var canvasData = this.canvasData;
    var changed = false;
    x = Number(x);
    y = Number(y);

    if (this.ready && !this.disabled && this.options.movable) {
      if (isNumber(x)) {
        canvasData.left = x;
        changed = true;
      }

      if (isNumber(y)) {
        canvasData.top = y;
        changed = true;
      }

      if (changed) {
        this.renderCanvas(true);
      }
    }

    return this;
  },

  /**
   * Zoom the canvas with a relative ratio
   * @param {number} ratio - The target ratio.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoom: function zoom(ratio, _originalEvent) {
    var canvasData = this.canvasData;
    ratio = Number(ratio);

    if (ratio < 0) {
      ratio = 1 / (1 - ratio);
    } else {
      ratio = 1 + ratio;
    }

    return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
  },

  /**
   * Zoom the canvas to an absolute ratio
   * @param {number} ratio - The target ratio.
   * @param {Object} pivot - The zoom pivot point coordinate.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
    var options = this.options,
        canvasData = this.canvasData;
    var width = canvasData.width,
        height = canvasData.height,
        naturalWidth = canvasData.naturalWidth,
        naturalHeight = canvasData.naturalHeight;
    ratio = Number(ratio);

    if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
      var newWidth = naturalWidth * ratio;
      var newHeight = naturalHeight * ratio;

      if (dispatchEvent(this.element, EVENT_ZOOM, {
        originalEvent: _originalEvent,
        oldRatio: width / naturalWidth,
        ratio: newWidth / naturalWidth
      }) === false) {
        return this;
      }

      if (_originalEvent) {
        var pointers = this.pointers;
        var offset = getOffset(this.cropper);
        var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
          pageX: _originalEvent.pageX,
          pageY: _originalEvent.pageY
        }; // Zoom from the triggering point of the event

        canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
        canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
      } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
        canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
        canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
      } else {
        // Zoom from the center of the canvas
        canvasData.left -= (newWidth - width) / 2;
        canvasData.top -= (newHeight - height) / 2;
      }

      canvasData.width = newWidth;
      canvasData.height = newHeight;
      this.renderCanvas(true);
    }

    return this;
  },

  /**
   * Rotate the canvas with a relative degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotate: function rotate(degree) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
  },

  /**
   * Rotate the canvas to an absolute degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotateTo: function rotateTo(degree) {
    degree = Number(degree);

    if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
      this.imageData.rotate = degree % 360;
      this.renderCanvas(true, true);
    }

    return this;
  },

  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function scaleX(_scaleX) {
    var scaleY = this.imageData.scaleY;
    return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
  },

  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function scaleY(_scaleY) {
    var scaleX = this.imageData.scaleX;
    return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
  },

  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function scale(scaleX) {
    var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
    var imageData = this.imageData;
    var transformed = false;
    scaleX = Number(scaleX);
    scaleY = Number(scaleY);

    if (this.ready && !this.disabled && this.options.scalable) {
      if (isNumber(scaleX)) {
        imageData.scaleX = scaleX;
        transformed = true;
      }

      if (isNumber(scaleY)) {
        imageData.scaleY = scaleY;
        transformed = true;
      }

      if (transformed) {
        this.renderCanvas(true, true);
      }
    }

    return this;
  },

  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function getData$$1() {
    var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var options = this.options,
        imageData = this.imageData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;
    var data = void 0;

    if (this.ready && this.cropped) {
      data = {
        x: cropBoxData.left - canvasData.left,
        y: cropBoxData.top - canvasData.top,
        width: cropBoxData.width,
        height: cropBoxData.height
      };
      var ratio = imageData.width / imageData.naturalWidth;
      forEach(data, function (n, i) {
        n /= ratio;
        data[i] = rounded ? Math.round(n) : n;
      });
    } else {
      data = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }

    if (options.rotatable) {
      data.rotate = imageData.rotate || 0;
    }

    if (options.scalable) {
      data.scaleX = imageData.scaleX || 1;
      data.scaleY = imageData.scaleY || 1;
    }

    return data;
  },

  /**
   * Set the cropped area position and size with new data
   * @param {Object} data - The new data.
   * @returns {Cropper} this
   */
  setData: function setData$$1(data) {
    var options = this.options,
        imageData = this.imageData,
        canvasData = this.canvasData;
    var cropBoxData = {};

    if (this.ready && !this.disabled && isPlainObject(data)) {
      var transformed = false;

      if (options.rotatable) {
        if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
          imageData.rotate = data.rotate;
          transformed = true;
        }
      }

      if (options.scalable) {
        if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
          imageData.scaleX = data.scaleX;
          transformed = true;
        }

        if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
          imageData.scaleY = data.scaleY;
          transformed = true;
        }
      }

      if (transformed) {
        this.renderCanvas(true, true);
      }

      var ratio = imageData.width / imageData.naturalWidth;

      if (isNumber(data.x)) {
        cropBoxData.left = data.x * ratio + canvasData.left;
      }

      if (isNumber(data.y)) {
        cropBoxData.top = data.y * ratio + canvasData.top;
      }

      if (isNumber(data.width)) {
        cropBoxData.width = data.width * ratio;
      }

      if (isNumber(data.height)) {
        cropBoxData.height = data.height * ratio;
      }

      this.setCropBoxData(cropBoxData);
    }

    return this;
  },

  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function getContainerData() {
    return this.ready ? assign({}, this.containerData) : {};
  },

  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function getImageData() {
    return this.sized ? assign({}, this.imageData) : {};
  },

  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function getCanvasData() {
    var canvasData = this.canvasData;
    var data = {};

    if (this.ready) {
      forEach(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
        data[n] = canvasData[n];
      });
    }

    return data;
  },

  /**
   * Set the canvas position and size with new data.
   * @param {Object} data - The new canvas data.
   * @returns {Cropper} this
   */
  setCanvasData: function setCanvasData(data) {
    var canvasData = this.canvasData;
    var aspectRatio = canvasData.aspectRatio;

    if (this.ready && !this.disabled && isPlainObject(data)) {
      if (isNumber(data.left)) {
        canvasData.left = data.left;
      }

      if (isNumber(data.top)) {
        canvasData.top = data.top;
      }

      if (isNumber(data.width)) {
        canvasData.width = data.width;
        canvasData.height = data.width / aspectRatio;
      } else if (isNumber(data.height)) {
        canvasData.height = data.height;
        canvasData.width = data.height * aspectRatio;
      }

      this.renderCanvas(true);
    }

    return this;
  },

  /**
   * Get the crop box position and size data.
   * @returns {Object} The result crop box data.
   */
  getCropBoxData: function getCropBoxData() {
    var cropBoxData = this.cropBoxData;
    var data = void 0;

    if (this.ready && this.cropped) {
      data = {
        left: cropBoxData.left,
        top: cropBoxData.top,
        width: cropBoxData.width,
        height: cropBoxData.height
      };
    }

    return data || {};
  },

  /**
   * Set the crop box position and size with new data.
   * @param {Object} data - The new crop box data.
   * @returns {Cropper} this
   */
  setCropBoxData: function setCropBoxData(data) {
    var cropBoxData = this.cropBoxData;
    var aspectRatio = this.options.aspectRatio;
    var widthChanged = void 0;
    var heightChanged = void 0;

    if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
      if (isNumber(data.left)) {
        cropBoxData.left = data.left;
      }

      if (isNumber(data.top)) {
        cropBoxData.top = data.top;
      }

      if (isNumber(data.width) && data.width !== cropBoxData.width) {
        widthChanged = true;
        cropBoxData.width = data.width;
      }

      if (isNumber(data.height) && data.height !== cropBoxData.height) {
        heightChanged = true;
        cropBoxData.height = data.height;
      }

      if (aspectRatio) {
        if (widthChanged) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else if (heightChanged) {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }

      this.renderCropBox();
    }

    return this;
  },

  /**
   * Get a canvas drawn the cropped image.
   * @param {Object} [options={}] - The config options.
   * @returns {HTMLCanvasElement} - The result canvas.
   */
  getCroppedCanvas: function getCroppedCanvas() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!this.ready || !window.HTMLCanvasElement) {
      return null;
    }

    var canvasData = this.canvasData;
    var source = getSourceCanvas(this.image, this.imageData, canvasData, options); // Returns the source canvas if it is not cropped.

    if (!this.cropped) {
      return source;
    }

    var _getData = this.getData(),
        initialX = _getData.x,
        initialY = _getData.y,
        initialWidth = _getData.width,
        initialHeight = _getData.height;

    var ratio = source.width / Math.floor(canvasData.naturalWidth);

    if (ratio !== 1) {
      initialX *= ratio;
      initialY *= ratio;
      initialWidth *= ratio;
      initialHeight *= ratio;
    }

    var aspectRatio = initialWidth / initialHeight;
    var maxSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: options.maxWidth || Infinity,
      height: options.maxHeight || Infinity
    });
    var minSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: options.minWidth || 0,
      height: options.minHeight || 0
    }, 'cover');

    var _getAdjustedSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: options.width || (ratio !== 1 ? source.width : initialWidth),
      height: options.height || (ratio !== 1 ? source.height : initialHeight)
    }),
        width = _getAdjustedSizes.width,
        height = _getAdjustedSizes.height;

    width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
    height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = options.fillColor || 'transparent';
    context.fillRect(0, 0, width, height);
    var _options$imageSmoothi = options.imageSmoothingEnabled,
        imageSmoothingEnabled = _options$imageSmoothi === undefined ? true : _options$imageSmoothi,
        imageSmoothingQuality = options.imageSmoothingQuality;
    context.imageSmoothingEnabled = imageSmoothingEnabled;

    if (imageSmoothingQuality) {
      context.imageSmoothingQuality = imageSmoothingQuality;
    } // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage


    var sourceWidth = source.width;
    var sourceHeight = source.height; // Source canvas parameters

    var srcX = initialX;
    var srcY = initialY;
    var srcWidth = void 0;
    var srcHeight = void 0; // Destination canvas parameters

    var dstX = void 0;
    var dstY = void 0;
    var dstWidth = void 0;
    var dstHeight = void 0;

    if (srcX <= -initialWidth || srcX > sourceWidth) {
      srcX = 0;
      srcWidth = 0;
      dstX = 0;
      dstWidth = 0;
    } else if (srcX <= 0) {
      dstX = -srcX;
      srcX = 0;
      srcWidth = Math.min(sourceWidth, initialWidth + srcX);
      dstWidth = srcWidth;
    } else if (srcX <= sourceWidth) {
      dstX = 0;
      srcWidth = Math.min(initialWidth, sourceWidth - srcX);
      dstWidth = srcWidth;
    }

    if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
      srcY = 0;
      srcHeight = 0;
      dstY = 0;
      dstHeight = 0;
    } else if (srcY <= 0) {
      dstY = -srcY;
      srcY = 0;
      srcHeight = Math.min(sourceHeight, initialHeight + srcY);
      dstHeight = srcHeight;
    } else if (srcY <= sourceHeight) {
      dstY = 0;
      srcHeight = Math.min(initialHeight, sourceHeight - srcY);
      dstHeight = srcHeight;
    }

    var params = [srcX, srcY, srcWidth, srcHeight]; // Avoid "IndexSizeError"

    if (dstWidth > 0 && dstHeight > 0) {
      var scale = width / initialWidth;
      params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
    } // All the numerical parameters should be integer for `drawImage`
    // https://github.com/fengyuanchen/cropper/issues/476


    context.drawImage.apply(context, [source].concat(toConsumableArray(params.map(function (param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    return canvas;
  },

  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function setAspectRatio(aspectRatio) {
    var options = this.options;

    if (!this.disabled && !isUndefined(aspectRatio)) {
      // 0 -> NaN
      options.aspectRatio = Math.max(0, aspectRatio) || NaN;

      if (this.ready) {
        this.initCropBox();

        if (this.cropped) {
          this.renderCropBox();
        }
      }
    }

    return this;
  },

  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function setDragMode(mode) {
    var options = this.options,
        dragBox = this.dragBox,
        face = this.face;

    if (this.ready && !this.disabled) {
      var croppable = mode === DRAG_MODE_CROP;
      var movable = options.movable && mode === DRAG_MODE_MOVE;
      mode = croppable || movable ? mode : DRAG_MODE_NONE;
      options.dragMode = mode;
      setData(dragBox, DATA_ACTION, mode);
      toggleClass(dragBox, CLASS_CROP, croppable);
      toggleClass(dragBox, CLASS_MOVE, movable);

      if (!options.cropBoxMovable) {
        // Sync drag mode to crop box when it is not movable
        setData(face, DATA_ACTION, mode);
        toggleClass(face, CLASS_CROP, croppable);
        toggleClass(face, CLASS_MOVE, movable);
      }
    }

    return this;
  }
};
var AnotherCropper = WINDOW.Cropper;

var Cropper = function () {
  /**
   * Create a new Cropper.
   * @param {Element} element - The target element for cropping.
   * @param {Object} [options={}] - The configuration options.
   */
  function Cropper(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Cropper);

    if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
      throw new Error('The first argument is required and must be an <img> or <canvas> element.');
    }

    this.element = element;
    this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
    this.cropped = false;
    this.disabled = false;
    this.pointers = {};
    this.ready = false;
    this.reloading = false;
    this.replaced = false;
    this.sized = false;
    this.sizing = false;
    this.init();
  }

  createClass(Cropper, [{
    key: 'init',
    value: function init() {
      var element = this.element;
      var tagName = element.tagName.toLowerCase();
      var url = void 0;

      if (getData(element, NAMESPACE)) {
        return;
      }

      setData(element, NAMESPACE, this);

      if (tagName === 'img') {
        this.isImg = true; // e.g.: "img/picture.jpg"

        url = element.getAttribute('src') || '';
        this.originalUrl = url; // Stop when it's a blank image

        if (!url) {
          return;
        } // e.g.: "http://example.com/img/picture.jpg"


        url = element.src;
      } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
        url = element.toDataURL();
      }

      this.load(url);
    }
  }, {
    key: 'load',
    value: function load(url) {
      var _this = this;

      if (!url) {
        return;
      }

      this.url = url;
      this.imageData = {};
      var element = this.element,
          options = this.options;

      if (!options.checkOrientation || !window.ArrayBuffer) {
        this.clone();
        return;
      } // XMLHttpRequest disallows to open a Data URL in some browsers like IE11 and Safari


      if (REGEXP_DATA_URL.test(url)) {
        if (REGEXP_DATA_URL_JPEG.test(url)) {
          this.read(dataURLToArrayBuffer(url));
        } else {
          this.clone();
        }

        return;
      }

      var xhr = new XMLHttpRequest();
      this.reloading = true;
      this.xhr = xhr;

      var done = function done() {
        _this.reloading = false;
        _this.xhr = null;
      };

      xhr.ontimeout = done;
      xhr.onabort = done;

      xhr.onerror = function () {
        done();

        _this.clone();
      };

      xhr.onload = function () {
        done();

        _this.read(xhr.response);
      }; // Bust cache when there is a "crossOrigin" property


      if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
        url = addTimestamp(url);
      }

      xhr.open('get', url);
      xhr.responseType = 'arraybuffer';
      xhr.withCredentials = element.crossOrigin === 'use-credentials';
      xhr.send();
    }
  }, {
    key: 'read',
    value: function read(arrayBuffer) {
      var options = this.options,
          imageData = this.imageData;
      var orientation = getOrientation(arrayBuffer);
      var rotate = 0;
      var scaleX = 1;
      var scaleY = 1;

      if (orientation > 1) {
        this.url = arrayBufferToDataURL(arrayBuffer, 'image/jpeg');

        var _parseOrientation = parseOrientation(orientation);

        rotate = _parseOrientation.rotate;
        scaleX = _parseOrientation.scaleX;
        scaleY = _parseOrientation.scaleY;
      }

      if (options.rotatable) {
        imageData.rotate = rotate;
      }

      if (options.scalable) {
        imageData.scaleX = scaleX;
        imageData.scaleY = scaleY;
      }

      this.clone();
    }
  }, {
    key: 'clone',
    value: function clone() {
      var element = this.element,
          url = this.url;
      var crossOrigin = void 0;
      var crossOriginUrl = void 0;

      if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
        crossOrigin = element.crossOrigin;

        if (crossOrigin) {
          crossOriginUrl = url;
        } else {
          crossOrigin = 'anonymous'; // Bust cache when there is not a "crossOrigin" property

          crossOriginUrl = addTimestamp(url);
        }
      }

      this.crossOrigin = crossOrigin;
      this.crossOriginUrl = crossOriginUrl;
      var image = document.createElement('img');

      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }

      image.src = crossOriginUrl || url;
      var start = this.start.bind(this);
      var stop = this.stop.bind(this);
      this.image = image;
      this.onStart = start;
      this.onStop = stop;

      if (this.isImg) {
        if (element.complete) {
          // start asynchronously to keep `this.cropper` is accessible in `ready` event handler.
          this.timeout = setTimeout(start, 0);
        } else {
          addListener(element, EVENT_LOAD, start, {
            once: true
          });
        }
      } else {
        image.onload = start;
        image.onerror = stop;
        addClass(image, CLASS_HIDE);
        element.parentNode.insertBefore(image, element.nextSibling);
      }
    }
  }, {
    key: 'start',
    value: function start(event) {
      var _this2 = this;

      var image = this.isImg ? this.element : this.image;

      if (event) {
        image.onload = null;
        image.onerror = null;
      }

      this.sizing = true;
      var IS_SAFARI = WINDOW.navigator && /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(WINDOW.navigator.userAgent);

      var done = function done(naturalWidth, naturalHeight) {
        assign(_this2.imageData, {
          naturalWidth: naturalWidth,
          naturalHeight: naturalHeight,
          aspectRatio: naturalWidth / naturalHeight
        });
        _this2.sizing = false;
        _this2.sized = true;

        _this2.build();
      }; // Modern browsers (except Safari)


      if (image.naturalWidth && !IS_SAFARI) {
        done(image.naturalWidth, image.naturalHeight);
        return;
      }

      var sizingImage = document.createElement('img');
      var body = document.body || document.documentElement;
      this.sizingImage = sizingImage;

      sizingImage.onload = function () {
        done(sizingImage.width, sizingImage.height);

        if (!IS_SAFARI) {
          body.removeChild(sizingImage);
        }
      };

      sizingImage.src = image.src; // iOS Safari will convert the image automatically
      // with its orientation once append it into DOM (#279)

      if (!IS_SAFARI) {
        sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
        body.appendChild(sizingImage);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var image = this.image;
      image.onload = null;
      image.onerror = null;
      image.parentNode.removeChild(image);
      this.image = null;
    }
  }, {
    key: 'build',
    value: function build() {
      if (!this.sized || this.ready) {
        return;
      }

      var element = this.element,
          options = this.options,
          image = this.image; // Create cropper elements

      var container = element.parentNode;
      var template = document.createElement('div');
      template.innerHTML = TEMPLATE;
      var cropper = template.querySelector('.' + NAMESPACE + '-container');
      var canvas = cropper.querySelector('.' + NAMESPACE + '-canvas');
      var dragBox = cropper.querySelector('.' + NAMESPACE + '-drag-box');
      var cropBox = cropper.querySelector('.' + NAMESPACE + '-crop-box');
      var face = cropBox.querySelector('.' + NAMESPACE + '-face');
      this.container = container;
      this.cropper = cropper;
      this.canvas = canvas;
      this.dragBox = dragBox;
      this.cropBox = cropBox;
      this.viewBox = cropper.querySelector('.' + NAMESPACE + '-view-box');
      this.face = face;
      canvas.appendChild(image); // Hide the original image

      addClass(element, CLASS_HIDDEN); // Inserts the cropper after to the current image

      container.insertBefore(cropper, element.nextSibling); // Show the image if is hidden

      if (!this.isImg) {
        removeClass(image, CLASS_HIDE);
      }

      this.initPreview();
      this.bind();
      options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
      options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
      addClass(cropBox, CLASS_HIDDEN);

      if (!options.guides) {
        addClass(cropBox.getElementsByClassName(NAMESPACE + '-dashed'), CLASS_HIDDEN);
      }

      if (!options.center) {
        addClass(cropBox.getElementsByClassName(NAMESPACE + '-center'), CLASS_HIDDEN);
      }

      if (options.background) {
        addClass(cropper, NAMESPACE + '-bg');
      }

      if (!options.highlight) {
        addClass(face, CLASS_INVISIBLE);
      }

      if (options.cropBoxMovable) {
        addClass(face, CLASS_MOVE);
        setData(face, DATA_ACTION, ACTION_ALL);
      }

      if (!options.cropBoxResizable) {
        addClass(cropBox.getElementsByClassName(NAMESPACE + '-line'), CLASS_HIDDEN);
        addClass(cropBox.getElementsByClassName(NAMESPACE + '-point'), CLASS_HIDDEN);
      }

      this.render();
      this.ready = true;
      this.setDragMode(options.dragMode);

      if (options.autoCrop) {
        this.crop();
      }

      this.setData(options.data);

      if (isFunction(options.ready)) {
        addListener(element, EVENT_READY, options.ready, {
          once: true
        });
      }

      dispatchEvent(element, EVENT_READY);
    }
  }, {
    key: 'unbuild',
    value: function unbuild() {
      if (!this.ready) {
        return;
      }

      this.ready = false;
      this.unbind();
      this.resetPreview();
      this.cropper.parentNode.removeChild(this.cropper);
      removeClass(this.element, CLASS_HIDDEN);
    }
  }, {
    key: 'uncreate',
    value: function uncreate() {
      var element = this.element;

      if (this.ready) {
        this.unbuild();
        this.ready = false;
        this.cropped = false;
      } else if (this.sizing) {
        this.sizingImage.onload = null;
        this.sizing = false;
        this.sized = false;
      } else if (this.reloading) {
        this.xhr.abort();
      } else if (this.isImg) {
        if (element.complete) {
          clearTimeout(this.timeout);
        } else {
          removeListener(element, EVENT_LOAD, this.onStart);
        }
      } else if (this.image) {
        this.stop();
      }
    }
    /**
     * Get the no conflict cropper class.
     * @returns {Cropper} The cropper class.
     */

  }], [{
    key: 'noConflict',
    value: function noConflict() {
      window.Cropper = AnotherCropper;
      return Cropper;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */

  }, {
    key: 'setDefaults',
    value: function setDefaults(options) {
      assign(DEFAULTS, isPlainObject(options) && options);
    }
  }]);
  return Cropper;
}();

assign(Cropper.prototype, render, preview, events, handlers, change, methods);

if (_jquery.default.fn) {
  var AnotherCropper$1 = _jquery.default.fn.cropper;
  var NAMESPACE$1 = 'cropper';

  _jquery.default.fn.cropper = function jQueryCropper(option) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var result = void 0;
    this.each(function (i, element) {
      var $element = (0, _jquery.default)(element);
      var isDestroy = option === 'destroy';
      var cropper = $element.data(NAMESPACE$1);

      if (!cropper) {
        if (isDestroy) {
          return;
        }

        var options = _jquery.default.extend({}, $element.data(), _jquery.default.isPlainObject(option) && option);

        cropper = new Cropper(element, options);
        $element.data(NAMESPACE$1, cropper);
      }

      if (typeof option === 'string') {
        var fn = cropper[option];

        if (_jquery.default.isFunction(fn)) {
          result = fn.apply(cropper, args);

          if (result === cropper) {
            result = undefined;
          }

          if (isDestroy) {
            $element.removeData(NAMESPACE$1);
          }
        }
      }
    });
    return result !== undefined ? result : this;
  };

  _jquery.default.fn.cropper.Constructor = Cropper;
  _jquery.default.fn.cropper.setDefaults = Cropper.setDefaults;

  _jquery.default.fn.cropper.noConflict = function noConflict() {
    _jquery.default.fn.cropper = AnotherCropper$1;
    return this;
  };
}

/***/ }),

/***/ "./node_modules/cropperjs/dist/cropper.css":
/*!*************************************************!*\
  !*** ./node_modules/cropperjs/dist/cropper.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"cropper-container":"cropper-container","cropper-wrap-box":"cropper-wrap-box","cropper-canvas":"cropper-canvas","cropper-drag-box":"cropper-drag-box","cropper-crop-box":"cropper-crop-box","cropper-modal":"cropper-modal","cropper-view-box":"cropper-view-box","cropper-dashed":"cropper-dashed","dashed-h":"dashed-h","dashed-v":"dashed-v","cropper-center":"cropper-center","cropper-face":"cropper-face","cropper-line":"cropper-line","cropper-point":"cropper-point","line-e":"line-e","line-n":"line-n","line-w":"line-w","line-s":"line-s","point-e":"point-e","point-n":"point-n","point-w":"point-w","point-s":"point-s","point-ne":"point-ne","point-nw":"point-nw","point-sw":"point-sw","point-se":"point-se","cropper-invisible":"cropper-invisible","cropper-bg":"cropper-bg","cropper-hide":"cropper-hide","cropper-hidden":"cropper-hidden","cropper-move":"cropper-move","cropper-crop":"cropper-crop","cropper-disabled":"cropper-disabled"};

/***/ }),

/***/ "./src/appendLink/appendLink.js":
/*!**************************************!*\
  !*** ./src/appendLink/appendLink.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$.fn.appendLink = function (children) {
  var contents;

  if (typeof children === 'string') {
    contents = $(children);
  } else {
    contents = children;
  }

  this.append(contents);
  return $(contents);
};

/***/ }),

/***/ "./src/component/component.ts":
/*!************************************!*\
  !*** ./src/component/component.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Component =
/*#__PURE__*/
function () {
  function Component(props) {
    _classCallCheck(this, Component);

    _defineProperty(this, "props", {});

    _defineProperty(this, "state", {});

    this.props = this.constructor.defaultProps ? _objectSpread({}, this.constructor.defaultProps, props) : props;
  }

  _createClass(Component, [{
    key: "mergeClassName",
    value: function mergeClassName() {
      var re = '';

      for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
        classNames[_key] = arguments[_key];
      }

      for (var _i = 0; _i < classNames.length; _i++) {
        var classname = classNames[_i];
        re = classname ? re + ' ' + classname : re;
      }

      return re;
    }
  }]);

  return Component;
}();

var _default = Component;
exports.default = _default;

/***/ }),

/***/ "./src/getFileURL/getFileURL.js":
/*!**************************************!*\
  !*** ./src/getFileURL/getFileURL.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getFileURL(fileorinput) {
  var url;

  if (navigator.userAgent.indexOf("MSIE") >= 1) {
    // IE
    url = fileorinput.value;
  } else if (navigator.userAgent.indexOf("Firefox") > 0) {
    // Firefox
    url = window.URL.createObjectURL(fileorinput);
  } else if (navigator.userAgent.indexOf("Chrome") > 0) {
    // Chrome
    url = window.URL.createObjectURL(fileorinput);
  }

  return url;
}

module.exports = getFileURL;

/***/ }),

/***/ "./src/jt-file-dragger/jt-file-dragger.ts":
/*!************************************************!*\
  !*** ./src/jt-file-dragger/jt-file-dragger.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _component = _interopRequireDefault(__webpack_require__(/*! ../component/component.ts */ "./src/component/component.ts"));

__webpack_require__(/*! ../appendLink/appendLink */ "./src/appendLink/appendLink.js");

var _styles = _interopRequireDefault(__webpack_require__(/*! ./styles.css */ "./src/jt-file-dragger/styles.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JtFileDragger =
/*#__PURE__*/
function (_Component) {
  _inherits(JtFileDragger, _Component);

  _createClass(JtFileDragger, [{
    key: "handlerFileChange",
    value: function handlerFileChange(files) {
      this.props.onFileChange ? this.props.onFileChange.call(this, files) : null;
    }
  }, {
    key: "rerangeList",
    value: function rerangeList() {
      var _this2 = this;

      if (!this.props.displayList) {
        return;
      }

      this.$list.children().remove();
      this.state.files.forEach(function (file) {
        _this2.$list.appendLink('<div></div>').addClass(_styles.default.fileItem).text(file.name).appendLink('<span></span>').click(function (e) {
          _this2.removeFile(file);
        }).addClass(_this2.mergeClassName('fas fa-minus-circle', _styles.default.deleteBtn));
      });
    }
  }, {
    key: "removeFile",
    value: function removeFile(file) {
      if (this.props.multi) {
        var stateFiles = this.state.files;

        if (stateFiles) {
          var nStateFiles = [];
          stateFiles.forEach(function (stateFile, index) {
            if (stateFile !== file) {
              nStateFiles.push(stateFile);
            }
          });
          this.state.files = nStateFiles;
          this.$input.val(null);
          this.handlerFileChange(this.state.files);
          this.rerangeList();
        }
      } else {
        var stateFile = this.state.files[0];

        if (stateFile && stateFile === file) {
          this.state.files = [];
          this.$input.val(null);
          this.handlerFileChange(this.state.files[0]);
          this.rerangeList();
        }
      }
    }
  }, {
    key: "measureFile",
    value: function measureFile(files, multiCallback, singleCallback) {
      if (this.props.multi) {
        var stateFiles = this.state.files;

        if (!stateFiles) {
          stateFiles = [];
        }

        for (var i = 0; i < files.length; i++) {
          var file = files[i];

          if (!stateFiles.find(function (stateFile) {
            return stateFile.name === file.name;
          })) {
            stateFiles.push(file);
          }
        }

        this.state.files = stateFiles;
        this.$input.val(null);
        this.handlerFileChange(this.state.files);
        multiCallback ? multiCallback() : null;
      } else {
        var stateFile = this.state.files[0];

        if (!stateFile || stateFile.name !== files[0].name) {
          stateFile = files[0];
        }

        this.state.files = [stateFile];
        this.$input.val(null);
        this.handlerFileChange(this.state.files[0]);
        singleCallback ? singleCallback() : null;
      }
    }
  }, {
    key: "addFiles",
    value: function addFiles(files) {
      var _this3 = this;

      this.measureFile(files, function () {
        _this3.rerangeList();
      }, function () {
        _this3.rerangeList();
      });
    }
  }, {
    key: "showDragArea",
    value: function showDragArea() {
      this.$btn.hide();
      this.$dragArea.show();
    }
  }, {
    key: "hideDragArea",
    value: function hideDragArea() {
      this.$btn.show();
      this.$dragArea.hide();
    }
  }]);

  function JtFileDragger(props) {
    var _this;

    _classCallCheck(this, JtFileDragger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JtFileDragger).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "board", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "$input", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "$dragArea", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "$btn", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "$list", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      files: []
    });

    _this.board = document.createElement('div');
    $(props.container).append(_this.board);
    var $board = $(_this.board),
        props = _this.props;
    $board.addClass(_this.mergeClassName(props.className));
    if (props.style) $board.css(props.style);
    _this.$input = $board.appendLink('<input type="file" hidden/>').attr('accept', props.accept).attr('multiple', _this.props.multi).change(function (e) {
      var files = e.target.files;

      _this.addFiles(files);
    });
    _this.$dragArea = $board.appendLink('<div></div>').addClass(_styles.default.upLoadCoverDragBox).on('click', function () {
      _this.$input.click();
    }).on('dragenter', function (e) {
      e.originalEvent.preventDefault();
    }).on('dragover', function (e) {
      e.originalEvent.preventDefault();

      _this.$dragArea.addClass(_styles.default.upLoadDragOver);
    }).on('dragleave', function (e) {
      e.originalEvent.preventDefault();

      _this.$dragArea.removeClass(_styles.default.upLoadDragOver);
    }).on('drop', function (e) {
      e.originalEvent.preventDefault();

      _this.$dragArea.removeClass(_styles.default.upLoadDragOver);

      e.originalEvent.dataTransfer.dropEffect = 'move';
      var files = e.originalEvent.dataTransfer.files;

      _this.addFiles(files);
    });

    var $dragContent = _this.$dragArea.appendLink('<div></div>').addClass(_styles.default.dragContent);

    $dragContent.appendLink('<p></p>').addClass(_this.mergeClassName('fas fa-upload', _styles.default.uploadIcon));
    $dragContent.appendLink('<p></p>').text(_this.props.text);
    $dragContent.appendLink('<p></p>').text('拖动到此处或点击');
    _this.$btn = $board.appendLink('<button></button>').addClass(_styles.default.uploadBtn).text(_this.props.text).click(function () {
      _this.$input.click();

      return false;
    });

    if (_this.props.dragArea) {
      _this.$btn.hide();
    } else {
      _this.$dragArea.hide();
    }

    if (_this.props.displayList) {
      _this.$list = $board.appendLink('<div></div>').addClass(_styles.default.uploadFileList);
    }

    return _this;
  }

  return JtFileDragger;
}(_component.default);

_defineProperty(JtFileDragger, "defaultProps", {
  text: '上传文件',
  displayList: true,
  multi: false,
  dragArea: true
});

$.fn.jtFileDragger = function (options) {
  var re = [];
  this.each(function (index, el) {
    var dragger = new JtFileDragger(_objectSpread({
      container: el
    }, options));
    re.push(dragger);
  });
  return re;
};

var _default = JtFileDragger;
exports.default = _default;

/***/ }),

/***/ "./src/jt-file-dragger/styles.css":
/*!****************************************!*\
  !*** ./src/jt-file-dragger/styles.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"divider":"divider","uploadBtn":"uploadBtn","upLoadCoverDragBox":"upLoadCoverDragBox","dragContent":"dragContent","uploadIcon":"uploadIcon","upLoadDragOver":"upLoadDragOver","uploadFileList":"uploadFileList","fileItem":"fileItem","deleteBtn":"deleteBtn"};

/***/ }),

/***/ "./src/jtCropper/jtCropper.css":
/*!*************************************!*\
  !*** ./src/jtCropper/jtCropper.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"divider":"divider","jtCropperBoard":"jtCropperBoard","jtCropperImageContainer":"jtCropperImageContainer","cropperCanvasContainer":"cropperCanvasContainer","previewContianer":"previewContianer","previewContent":"previewContent","submitContainer":"submitContainer","submitBtn":"submitBtn"};

/***/ }),

/***/ "./src/jtCropper/jtCropper.ts":
/*!************************************!*\
  !*** ./src/jtCropper/jtCropper.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _component = _interopRequireDefault(__webpack_require__(/*! ../component/component.ts */ "./src/component/component.ts"));

__webpack_require__(/*! ../appendLink/appendLink */ "./src/appendLink/appendLink.js");

__webpack_require__(/*! ../jt-file-dragger/jt-file-dragger.ts */ "./src/jt-file-dragger/jt-file-dragger.ts");

__webpack_require__(/*! cropper */ "./node_modules/cropper/dist/cropper.esm.js");

var _getFileURL = _interopRequireDefault(__webpack_require__(/*! ../getFileURL/getFileURL.js */ "./src/getFileURL/getFileURL.js"));

var _jtCropper = _interopRequireDefault(__webpack_require__(/*! ./jtCropper.css */ "./src/jtCropper/jtCropper.css"));

__webpack_require__(/*! cropperjs/dist/cropper.css */ "./node_modules/cropperjs/dist/cropper.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JtCropper =
/*#__PURE__*/
function (_Component) {
  _inherits(JtCropper, _Component);

  _createClass(JtCropper, [{
    key: "submitImage",
    value: function submitImage() {
      var base64str = $(this.imageEl).cropper('getCroppedCanvas').toDataURL('image/jpeg');
      this.handleChange(base64str);
    }
  }, {
    key: "handleChange",
    value: function handleChange(base64str) {
      this.props.onChange ? this.props.onChange(base64str) : null;
    }
  }]);

  function JtCropper(props) {
    var _this;

    _classCallCheck(this, JtCropper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JtCropper).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "board", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "dragger", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "file", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "imageEl", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cropper", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "init", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "previewEl", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "$cropperContainer", null);

    _this.board = document.createElement('div');
    $(props.container).append(_this.board);
    var $board = $(_this.board);
    $board.addClass(_this.mergeClassName(_jtCropper.default.jtCropperBoard, props.className));
    if (props.style) $board.css(props.style);
    _this.dragger = $board.jtFileDragger({
      displayList: false,
      onFileChange: function onFileChange(files) {
        _this.file = files;

        if (_this.init) {
          $(_this.imageEl).cropper('replace', (0, _getFileURL.default)(files));
        } else {
          $(_this.imageEl).attr('src', (0, _getFileURL.default)(files));
          $(_this.imageEl).cropper(_objectSpread({
            preview: _this.previewEl
          }, _this.props.cropperOptions));

          _this.dragger[0].hideDragArea();

          _this.$cropperContainer.show();

          $board.appendLink('<div></div>').addClass(_jtCropper.default.submitContainer).appendLink('<button>确认</button>').addClass(_jtCropper.default.submitBtn).on('click', function (e) {
            _this.submitImage();

            return false;
          });
          _this.init = true;
        }
      }
    });
    _this.$cropperContainer = $board.appendLink('<div></div>').addClass(_jtCropper.default.jtCropperImageContainer).hide();
    _this.imageEl = _this.$cropperContainer.appendLink('<div></div>').addClass(_jtCropper.default.cropperCanvasContainer).appendLink('<img/>').hide()[0];
    _this.previewEl = _this.$cropperContainer.appendLink('<div></div>').addClass(_jtCropper.default.previewContianer).appendLink('<div></div>').addClass(_jtCropper.default.previewContent)[0];
    return _this;
  }

  return JtCropper;
}(_component.default);

$.fn.jtCropper = function (options) {
  this.each(function (index, el) {
    new JtCropper(_objectSpread({
      container: el
    }, options));
  });
};

var _default = JtCropper;
exports.default = _default;

/***/ }),

/***/ "./src/jtForm/jtForm.css":
/*!*******************************!*\
  !*** ./src/jtForm/jtForm.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"divider":"divider","jtFormBoard":"jtFormBoard","jtFormRow":"jtFormRow","jtFormItem":"jtFormItem","jtFormLabelWrap":"jtFormLabelWrap","labelContent":"labelContent","required":"required","jtFormFieldWrap":"jtFormFieldWrap","jtFormField":"jtFormField","fieldCheck":"fieldCheck","errorMessage":"errorMessage","correct":"correct","error":"error","submitBtnRow":"submitBtnRow","submitBtn":"submitBtn"};

/***/ }),

/***/ "./src/jtForm/jtForm.ts":
/*!******************************!*\
  !*** ./src/jtForm/jtForm.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _component = _interopRequireDefault(__webpack_require__(/*! ../component/component.ts */ "./src/component/component.ts"));

var _asyncValidator = _interopRequireDefault(__webpack_require__(/*! async-validator */ "./node_modules/async-validator/es/index.js"));

__webpack_require__(/*! ../appendLink/appendLink */ "./src/appendLink/appendLink.js");

var _jtForm = _interopRequireDefault(__webpack_require__(/*! ./jtForm.css */ "./src/jtForm/jtForm.css"));

__webpack_require__(/*! ../jt-file-dragger/jt-file-dragger.ts */ "./src/jt-file-dragger/jt-file-dragger.ts");

__webpack_require__(/*! ../jtCropper/jtCropper.ts */ "./src/jtCropper/jtCropper.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JtForm =
/*#__PURE__*/
function (_Component) {
  _inherits(JtForm, _Component);

  _createClass(JtForm, [{
    key: "validate",
    value: function validate(obj, field) {
      var _this2 = this;

      this.validateSchema.validate(obj, {
        first: this.props.validateFirst,
        firstFields: this.props.validateFirstFields
      }, function (errors, fields) {
        console.log(errors);

        if (errors) {
          var tarerror = errors.find(function (error) {
            return error.field === field.name;
          });

          if (tarerror) {
            _this2.formData[tarerror.field].$fieldWrap.addClass('error');

            _this2.formData[tarerror.field].$fieldMessage.text(tarerror.message);
          } else {
            _this2.formData[field.name].$fieldWrap.removeClass('error').addClass('correct');
          }
        }
      });
    }
  }, {
    key: "eachField",
    value: function eachField(field, $rootEl, count) {
      var _this3 = this;

      this.formData[field.name] = {};
      this.formData[field.name].value = field.initialValue !== null || field.initialValue !== undefined ? field.initialValue : null;
      this.validateObj[field.name] = field.rules;
      var $formItem = $rootEl.appendLink('<div></div>').css({
        position: 'relative',
        width: field.widthRatio ? field.widthRatio * 100 + '%' : 100 / count + '%'
      }).addClass(_jtForm.default.jtFormItem);
      var labelRat = 0;
      labelRat = field.layout && typeof field.layout.label === 'number' ? field.layout.label : JtForm.defaultLayout.label;
      var $labelWrap = $formItem.appendLink('<span></span>').addClass(_jtForm.default.jtFormLabelWrap).css({
        display: 'inline-block',
        position: 'absolute',
        textAlign: 'right',
        width: 100 * labelRat + '%'
      });
      this.formData[field.name].$label = $labelWrap;
      var $label = $labelWrap.appendLink('<label></label>').attr('title', field.label).addClass(_jtForm.default.labelContent).text(field.label);
      var requiredRule;

      if (field.rules instanceof Array) {
        requiredRule = field.rules.find(function (rule) {
          return rule.required === true;
        });
      } else {
        requiredRule = field.rules.required === true ? field.rules : null;
      }

      if (requiredRule) {
        $label.addClass('required');
      }

      var fieldRat = field.layout && typeof field.layout.field === 'number' ? field.layout.field : JtForm.defaultLayout.field;
      var $fieldWrap = $formItem.appendLink('<span></span>').addClass(_jtForm.default.jtFormFieldWrap).css({
        display: 'inline-block',
        marginLeft: 100 * (1 - fieldRat) + '%',
        width: 100 * fieldRat + '%'
      });
      this.formData[field.name].$fieldWrap = $fieldWrap;
      this.formData[field.name].$fieldMessage = $fieldWrap.appendLink('<span></span>').addClass(_jtForm.default.errorMessage);
      this.formData[field.name].$fieldCheck = $fieldWrap.appendLink('<span></span>').addClass(this.mergeClassName('fas fa-check-circle', _jtForm.default.fieldCheck));
      var $field;

      switch (field.type) {
        case 'text':
          $field = $fieldWrap.appendLink('<input/>').addClass(_jtForm.default.jtFormField).val(this.formData[field.name].value);
          var trigger = field.trigger || 'change';
          var validateTrigger = field.validateTrigger || 'blur';
          $field.on(trigger, function (e) {
            var value = e.target.value;
            _this3.formData[field.name].value = value;
          }).on(validateTrigger, function (e) {
            var value = _this3.formData[field.name].value;
            var va = {};
            va[field.name] = value;

            _this3.validate(va, field);
          });

          if (field.fieldProps) {
            for (var attrIndex in field.fieldProps) {
              $field.attr(attrIndex, field.fieldProps[attrIndex]);
            }
          }

          break;

        case 'file':
          var fileProps = _objectSpread({
            onFileChange: function onFileChange(files) {
              _this3.formData[field.name].value = files;
              var va = {};
              va[field.name] = files;

              _this3.validate(va, field);
            },
            className: _jtForm.default.jtFormField
          }, field.fieldProps);

          $fieldWrap.jtFileDragger(fileProps);
          break;

        case 'image':
          $fieldWrap.jtCropper({
            onChange: function onChange(base64str) {
              _this3.formData[field.name].value = base64str;
              var va = {};
              va[field.name] = base64str;

              _this3.validate(va, field);
            }
          });
          break;
      }

      this.formData[field.name].$field = $field;
    }
  }]);

  function JtForm(props) {
    var _this;

    _classCallCheck(this, JtForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JtForm).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "board", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "formData", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "validateObj", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "validateSchema", null);

    _this.board = document.createElement('form');
    $(props.container).append(_this.board);
    $(_this.board).addClass(_this.mergeClassName(_jtForm.default.jtFormBoard, props.className));
    if (props.style) $(_this.board).css(props.style);

    _this.props.map.forEach(function (field, num) {
      var $row = $(_this.board).appendLink('<div></div>').addClass(_jtForm.default.jtFormRow);

      if (field instanceof Array) {
        field.forEach(function (f, index) {
          _this.eachField(f, $row, field.length);
        });
      } else {
        _this.eachField(field, $row, 1);
      }
    });

    _this.validateSchema = new _asyncValidator.default(_this.validateObj);
    $(_this.board).appendLink('<div></div>').addClass(_jtForm.default.submitBtnRow).appendLink('<button></button>').text(_this.props.submitText).addClass(_jtForm.default.submitBtn);
    return _this;
  }

  return JtForm;
}(_component.default);

_defineProperty(JtForm, "defaultLayout", {
  label: 0.1,
  field: 0.9
});

_defineProperty(JtForm, "defaultProps", {
  validateFirst: false,
  validateFirstFields: false,
  submitText: '提交'
});

$.fn.jtForm = function (options) {
  this.each(function (index, el) {
    new JtForm(_objectSpread({
      container: el
    }, options));
  });
};

var _default = JtForm;
exports.default = _default;

/***/ }),

/***/ "jquery":
/*!********************!*\
  !*** external "$" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = $;

/***/ })

/******/ });
//# sourceMappingURL=jtForm.js.map