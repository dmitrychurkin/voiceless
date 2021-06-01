(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/module/admin/screens/PasswordReset/PasswordReset.jsx":
/*!***************************************************************************!*\
  !*** ./resources/js/module/admin/screens/PasswordReset/PasswordReset.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _templates_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../templates/Auth */ "./resources/js/module/admin/templates/Auth/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var PasswordReset = function PasswordReset() {
  var _ref3;

  var _useSearchParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useSearchParams"])(),
      _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
      searchParams = _useSearchParams2[0];

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      token = _useParams.token;

  var navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useNavigate"])();
  var formSchema = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      email: 'email',
      password: 'password',
      passwordConfirmation: 'password_confirmation',
      token: 'token'
    };
  }, []);
  var userEmail = searchParams.get(formSchema.email);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
      var formData, resetForm, open, _yield$axios$post, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              formData = _ref.formData, resetForm = _ref.resetForm, open = _ref.open;
              formData.set(formSchema.token, token);
              formData.set(formSchema.email, userEmail);
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/admin/reset-password', formData);

            case 5:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;
              resetForm();
              open(data.message, {
                onExited: function onExited() {
                  return navigate('/admin/login');
                }
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [formSchema, token, userEmail, navigate]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_templates_Auth__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Reset Password",
    actionText: "reset",
    formProps: {
      onSubmit: onSubmit
    },
    formState: (_ref3 = {}, _defineProperty(_ref3, formSchema.password, ''), _defineProperty(_ref3, formSchema.passwordConfirmation, ''), _ref3)
  }, function (formState, onChange) {
    var _React$createElement, _React$createElement2, _React$createElement3;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], (_React$createElement = {
      type: "email",
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      id: "email",
      label: "Email Address",
      name: formSchema.email,
      autoComplete: "email",
      autoFocus: true
    }, _defineProperty(_React$createElement, "required", true), _defineProperty(_React$createElement, "disabled", true), _defineProperty(_React$createElement, "defaultValue", userEmail), _React$createElement)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], (_React$createElement2 = {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      name: formSchema.password,
      label: "Password",
      type: "password",
      id: "password",
      autoComplete: "current-password"
    }, _defineProperty(_React$createElement2, "required", true), _defineProperty(_React$createElement2, "value", formState[formSchema.password]), _defineProperty(_React$createElement2, "onChange", onChange), _React$createElement2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], (_React$createElement3 = {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      name: formSchema.passwordConfirmation,
      label: "Confirm Password",
      type: "password",
      id: "password_confirmation",
      autoComplete: "current-password"
    }, _defineProperty(_React$createElement3, "required", true), _defineProperty(_React$createElement3, "value", formState[formSchema.passwordConfirmation]), _defineProperty(_React$createElement3, "onChange", onChange), _React$createElement3)));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(PasswordReset));

/***/ })

}]);