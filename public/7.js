(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/js/module/admin/screens/Login/Login.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/module/admin/screens/Login/Login.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _templates_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../templates/Auth */ "./resources/js/module/admin/templates/Auth/index.js");
var _yup$object;



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var formSchema = {
  email: 'email',
  password: 'password',
  remember: 'remember'
};
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]((_yup$object = {}, _defineProperty(_yup$object, formSchema.email, yup__WEBPACK_IMPORTED_MODULE_3__["string"]('Enter your email').email('Enter a valid email').required('Email is required')), _defineProperty(_yup$object, formSchema.password, yup__WEBPACK_IMPORTED_MODULE_3__["string"]('Enter your password').required('Password is required')), _defineProperty(_yup$object, formSchema.remember, yup__WEBPACK_IMPORTED_MODULE_3__["boolean"]().optional()), _yup$object));

var Login = function Login() {
  var _initialValues;

  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
      var values, actions, open, _yield$axios$post, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              values = _ref.values, actions = _ref.actions, open = _ref.open;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/admin/login', _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, formSchema.remember, values[formSchema.remember] || undefined)));

            case 3:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;

              if (!data) {
                window.location.reload();
              }

              open(data.message);
              actions.resetForm();

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_templates_Auth__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Sign in",
    actionText: "sign in",
    linkProps: {
      href: 'forgot-password',
      text: 'Forgot password?'
    },
    formikConfig: {
      onSubmit: onSubmit,
      initialValues: (_initialValues = {}, _defineProperty(_initialValues, formSchema.email, ''), _defineProperty(_initialValues, formSchema.password, ''), _defineProperty(_initialValues, formSchema.remember, false), _initialValues),
      validationSchema: validationSchema
    }
  }, function (formik) {
    var _React$createElement, _React$createElement2;

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
    }, _defineProperty(_React$createElement, "required", true), _defineProperty(_React$createElement, "value", formik.values[formSchema.email]), _defineProperty(_React$createElement, "error", formik.touched[formSchema.email] && Boolean(formik.errors[formSchema.email])), _defineProperty(_React$createElement, "onChange", formik.handleChange), _React$createElement)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], (_React$createElement2 = {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      name: formSchema.password,
      label: "Password",
      type: "password",
      id: "password",
      autoComplete: "current-password"
    }, _defineProperty(_React$createElement2, "required", true), _defineProperty(_React$createElement2, "value", formik.values[formSchema.password]), _defineProperty(_React$createElement2, "error", formik.touched[formSchema.password] && Boolean(formik.errors[formSchema.password])), _defineProperty(_React$createElement2, "onChange", formik.handleChange), _React$createElement2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
        value: "remember",
        color: "primary",
        name: formSchema.remember,
        checked: formik.values[formSchema.remember],
        onChange: formik.handleChange
      }),
      label: "Remember me"
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Login));

/***/ })

}]);