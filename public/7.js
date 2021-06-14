(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/js/module/admin/screens/PasswordForgot/PasswordForgot.jsx":
/*!*****************************************************************************!*\
  !*** ./resources/js/module/admin/screens/PasswordForgot/PasswordForgot.jsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _templates_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../templates/Auth */ "./resources/js/module/admin/templates/Auth/index.js");
/* harmony import */ var _hooks_useRequests__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useRequests */ "./resources/js/module/admin/hooks/useRequests.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var formSchema = {
  email: 'email'
};
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"](_defineProperty({}, formSchema.email, yup__WEBPACK_IMPORTED_MODULE_3__["string"]('Enter your email').email('Enter a valid email').required('Email is required')));

var PasswordForgot = function PasswordForgot() {
  var navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useNavigate"])();

  var _useRequests = Object(_hooks_useRequests__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      forgotPassword = _useRequests.forgotPassword;

  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
      var values, open, _yield$forgotPassword, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              values = _ref.values, open = _ref.open;
              _context.next = 3;
              return forgotPassword({
                data: values
              });

            case 3:
              _yield$forgotPassword = _context.sent;
              data = _yield$forgotPassword.data;
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
  }(), [forgotPassword, navigate]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_templates_Auth__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Password Forgot",
    actionText: "send password reset link",
    formikConfig: {
      onSubmit: onSubmit,
      initialValues: _defineProperty({}, formSchema.email, ''),
      validationSchema: validationSchema
    }
  }, function (formik) {
    var _React$createElement;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], (_React$createElement = {
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
    }, _defineProperty(_React$createElement, "required", true), _defineProperty(_React$createElement, "value", formik.values[formSchema.email]), _defineProperty(_React$createElement, "error", formik.touched[formSchema.email] && Boolean(formik.errors[formSchema.email])), _defineProperty(_React$createElement, "onChange", formik.handleChange), _React$createElement));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(PasswordForgot));

/***/ })

}]);