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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _home = __webpack_require__(3);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ROOT file of server
var app = (0, _express2.default)();
app.use(_express2.default.static('public'));
app.get('/', function (req, res) {
  //res.send("asasasasa");
  var toDoData = [{
    "id": "1",
    "task": "get milk",
    "status": "Pending",
    "isDeleted": "false"
  }, {
    "id": "2",
    "task": "meeting",
    "status": "Pending",
    "isDeleted": "false"
  }, {
    "id": "3",
    "task": "Buy News paper",
    "status": "Completed",
    "isDeleted": "false"
  }];
  res.send((0, _home2.default)(toDoData));
});

app.listen(3000, function () {
  console.log('Listening on port 3000....');
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(4);

var _Home = __webpack_require__(5);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

    var content = (0, _server.renderToString)(_react2.default.createElement(_Home2.default, { toDoData: props }));
    console.log(content);
    return '\n        <html>\n        <head>\n        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">\n        </head>\n        <body>\n            <div id="root">' + content + '</div>\n            <script>\n                window.__PRELOADED_STATE__ = ' + JSON.stringify(props).replace(/</g, '\\u003c') + '\n            </script>\n            <script src="bundle.js"></script>\n            \n        </body>\n        </html>\n     ';
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _uuid = __webpack_require__(6);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    console.log("Home constructor");
    _this.onChange = _this.onChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    _this.onDelete = _this.onDelete.bind(_this);
    _this.onEdit = _this.onEdit.bind(_this);
    _this.changeStatus = _this.changeStatus.bind(_this);
    _this.state = {
      newTask: '',
      id: '',
      toDoData: _this.props ? _this.props.toDoData : []
      // toDoData: [
      //   {
      //     "id": "1",
      //     "task": "get milk",
      //     "status": "Pending",
      //     "isDeleted": "false"
      //   },
      //   {
      //     "id": "2",
      //     "task": "meeting",
      //     "status": "Pending",
      //     "isDeleted": "false"
      //   },
      //   {
      //     "id": "3",
      //     "task": "Buy News paper",
      //     "status": "Completed",
      //     "isDeleted": "false"
      //   }
      // ]
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'onChange',
    value: function onChange(e) {
      var value = e.target.value;
      var name = e.target.name;
      this.setState(_extends({}, this.state.newTask, _defineProperty({}, name, value)));
    }
  }, {
    key: 'onDelete',
    value: function onDelete(id) {
      var data = this.state.toDoData;
      var filterData = data.filter(function (element) {
        return element.id != id;
      });
      this.setState({
        toDoData: filterData
      });
    }
  }, {
    key: 'changeStatus',
    value: function changeStatus(id) {
      var data = this.state.toDoData;
      data.forEach(function (element, index) {
        if (element.id === id) {
          if (element.status == "Pending") {
            element.status = "Completed";
          } else if (element.status == "Completed") {
            element.status = "Pending";
          }
        };
      });
      this.setState({
        toDoData: data
      });
    }
  }, {
    key: 'onEdit',
    value: function onEdit(id) {
      var data = this.state.toDoData;
      var filterData = data.filter(function (element) {
        return element.id == id;
      });
      this.setState({
        newTask: filterData[0].task,
        id: id
      });
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(id) {
      var _this2 = this;

      var data = this.state.toDoData;
      if (id) {
        data.forEach(function (element, index) {
          if (element.id === id) {
            element.task = _this2.state.newTask;
          };
        });
        this.setState({
          toDoData: data,
          newTask: ''
        });
      } else {
        var _id = (0, _uuid2.default)();
        var task = this.state.newTask;
        var status = "Pending";
        var isDeleted = "false";
        var newData = [];
        newData = {
          id: _id,
          task: task,
          status: status,
          isDeleted: isDeleted
        };
        data.push(newData);
        this.setState({
          toDoData: data
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var counter = 0;
      var taskData = this.state.toDoData.map(function (element) {
        return _react2.default.createElement(
          'tr',
          { key: element.id },
          _react2.default.createElement(
            'td',
            null,
            element.task
          ),
          _react2.default.createElement(
            'td',
            { onClick: _this3.changeStatus.bind(_this3, element.id) },
            element.status
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement('input', { name: element.id, type: 'button', value: 'Delete', onClick: _this3.onDelete.bind(_this3, element.id) }),
            '\xA0 \xA0',
            _react2.default.createElement('input', { name: element.id, type: 'button', value: 'Edit', onClick: _this3.onEdit.bind(_this3, element.id) })
          )
        );
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', { type: 'text', name: 'newTask', placeholder: 'Enter  Your task', onChange: this.onChange, value: this.state.newTask || '', autoComplete: 'off' }),
        '\xA0',
        _react2.default.createElement('input', { type: 'button', className: 'btn btn-info', name: 'addTask', value: 'Add', onClick: this.onSubmit.bind(this, this.state.id) }),
        _react2.default.createElement(
          'h2',
          null,
          'Tasks'
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'table',
            { className: 'table table-bordered' },
            _react2.default.createElement(
              'thead',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'th',
                  null,
                  'TASK'
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  'Status'
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  'Actions'
                )
              )
            ),
            _react2.default.createElement(
              'tbody',
              null,
              taskData
            )
          )
        ),
        this.props.name
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })
/******/ ]);