module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require('../../../ssr-module-cache.js'); // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode,
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key),
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 4));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './modules/registration/Registration-Container.js':
      /*!********************************************************!*\
  !*** ./modules/registration/Registration-Container.js ***!
  \********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react-redux */ 'react-redux',
        );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react_redux__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var _Registration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./Registration */ './modules/registration/Registration.jsx',
        );

        var mapStateToProps = function mapStateToProps() {
          return {};
        };

        var mapDispatchToProps = function mapDispatchToProps(dispatch) {
          return {};
        };

        /* harmony default export */ __webpack_exports__['default'] = Object(
          react_redux__WEBPACK_IMPORTED_MODULE_0__['connect'],
        )(mapStateToProps, mapDispatchToProps)(
          _Registration__WEBPACK_IMPORTED_MODULE_1__['default'],
        );

        /***/
      },

    /***/ './modules/registration/Registration.jsx':
      /*!***********************************************!*\
  !*** ./modules/registration/Registration.jsx ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var _RegistratonForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./RegistratonForm */ './modules/registration/RegistratonForm.jsx',
        );

        var Registration = function Registration() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _RegistratonForm__WEBPACK_IMPORTED_MODULE_1__['default'],
            null,
          );
        };

        /* harmony default export */ __webpack_exports__['default'] = Registration;

        /***/
      },

    /***/ './modules/registration/RegistratonForm.jsx':
      /*!**************************************************!*\
  !*** ./modules/registration/RegistratonForm.jsx ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );

        var RegistrationForm = function RegistrationForm() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            null,
            'This is the registration page',
          );
        };

        /* harmony default export */ __webpack_exports__['default'] = RegistrationForm;

        /***/
      },

    /***/ './modules/registration/index.js':
      /*!***************************************!*\
  !*** ./modules/registration/index.js ***!
  \***************************************/
      /*! exports provided: RegistrationContainer */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Registration_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Registration-Container */ './modules/registration/Registration-Container.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'RegistrationContainer',
          function() {
            return _Registration_Container__WEBPACK_IMPORTED_MODULE_0__['default'];
          },
        );

        /***/
      },

    /***/ './pages/registration.jsx':
      /*!********************************!*\
  !*** ./pages/registration.jsx ***!
  \********************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var _modules_registration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../modules/registration */ './modules/registration/index.js',
        );

        var RegistrationPage = function RegistrationPage() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _modules_registration__WEBPACK_IMPORTED_MODULE_1__['RegistrationContainer'],
            null,
          );
        };

        /* harmony default export */ __webpack_exports__['default'] = RegistrationPage;

        /***/
      },

    /***/ 4:
      /*!**************************************!*\
  !*** multi ./pages/registration.jsx ***!
  \**************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /Users/sudhiry/cxa/experiment/hello-next/src/pages/registration.jsx */ './pages/registration.jsx',
        );

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('react');

        /***/
      },

    /***/ 'react-redux':
      /*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('react-redux');

        /***/
      },

    /******/
  },
);
//# sourceMappingURL=registration.js.map
