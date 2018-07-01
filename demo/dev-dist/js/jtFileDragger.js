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
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo/jt-file-dragger/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/jt-file-dragger/entry.js":
/*!***************************************!*\
  !*** ./demo/jt-file-dragger/entry.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../src/jt-file-dragger/jt-file-dragger.ts */ "./src/jt-file-dragger/jt-file-dragger.ts");

$(document).ready(function () {
  $('#root').jtFileDragger();
});

/***/ }),

/***/ "./src/appendLink/appendLink.js":
/*!**************************************!*\
  !*** ./src/appendLink/appendLink.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @author 杰瑞
 * @param children
 * @returns {JQuery<TElement extends Node> | jQuery | HTMLElement}
 */
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

/***/ })

/******/ });
//# sourceMappingURL=jtFileDragger.js.map