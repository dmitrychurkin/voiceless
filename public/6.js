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
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _templates_Auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../templates/Auth */ "./resources/js/module/admin/templates/Auth/index.js");
var _yup$object;



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var formSchema = {
  email: 'email',
  password: 'password',
  passwordConfirmation: 'password_confirmation',
  token: 'token'
};
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]((_yup$object = {}, _defineProperty(_yup$object, formSchema.email, yup__WEBPACK_IMPORTED_MODULE_4__["string"]('Enter your email').email('Enter a valid email').required('Email is required')), _defineProperty(_yup$object, formSchema.password, yup__WEBPACK_IMPORTED_MODULE_4__["string"]('Enter your password').required('Password is required')), _defineProperty(_yup$object, formSchema.passwordConfirmation, yup__WEBPACK_IMPORTED_MODULE_4__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_4__["ref"](formSchema.password), null], 'Passwords must match').required()), _yup$object));

var PasswordReset = function PasswordReset() {
  var _initialValues;

  var _useSearchParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useSearchParams"])(),
      _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
      searchParams = _useSearchParams2[0];

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      token = _useParams.token;

  var navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useNavigate"])();
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
      var values, open, _yield$axios$post, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              values = _ref.values, open = _ref.open;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/admin/reset-password', _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, formSchema.token, token)));

            case 3:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;
              open(data.message, {
                onExited: function onExited() {
                  return navigate('/admin/login');
                }
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [token, navigate]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_templates_Auth__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Reset Password",
    actionText: "reset",
    formikConfig: {
      onSubmit: onSubmit,
      initialValues: (_initialValues = {}, _defineProperty(_initialValues, formSchema.email, searchParams.get(formSchema.email)), _defineProperty(_initialValues, formSchema.password, ''), _defineProperty(_initialValues, formSchema.passwordConfirmation, ''), _initialValues),
      validationSchema: validationSchema
    }
  }, function (formik) {
    var _React$createElement, _React$createElement2, _React$createElement3;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], (_React$createElement = {
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
    }, _defineProperty(_React$createElement, "required", true), _defineProperty(_React$createElement, "disabled", true), _defineProperty(_React$createElement, "value", formik.values[formSchema.email]), _defineProperty(_React$createElement, "error", formik.touched[formSchema.email] && Boolean(formik.errors[formSchema.email])), _defineProperty(_React$createElement, "onChange", formik.handleChange), _React$createElement)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], (_React$createElement2 = {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      name: formSchema.password,
      label: "Password",
      type: "password",
      id: "password",
      autoComplete: "current-password"
    }, _defineProperty(_React$createElement2, "required", true), _defineProperty(_React$createElement2, "value", formik.values[formSchema.password]), _defineProperty(_React$createElement2, "error", formik.touched[formSchema.password] && Boolean(formik.errors[formSchema.password])), _defineProperty(_React$createElement2, "onChange", formik.handleChange), _React$createElement2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], (_React$createElement3 = {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      name: formSchema.passwordConfirmation,
      label: "Confirm Password",
      type: "password",
      id: "password_confirmation",
      autoComplete: "current-password"
    }, _defineProperty(_React$createElement3, "required", true), _defineProperty(_React$createElement3, "value", formik.values[formSchema.passwordConfirmation]), _defineProperty(_React$createElement3, "error", formik.touched[formSchema.passwordConfirmation] && Boolean(formik.errors[formSchema.passwordConfirmation])), _defineProperty(_React$createElement3, "onChange", formik.handleChange), _React$createElement3)));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(PasswordReset));

/***/ })

}]);