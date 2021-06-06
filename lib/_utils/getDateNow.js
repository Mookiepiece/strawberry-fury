'use strict';

var _asyncToGenerator = require('@babel/runtime-corejs3/helpers/asyncToGenerator');
var _regeneratorRuntime = require('@babel/runtime-corejs3/regenerator');
var _Promise = require('@babel/runtime-corejs3/core-js-stable/promise');
var _setTimeout = require('@babel/runtime-corejs3/core-js-stable/set-timeout');
var _Date$now = require('@babel/runtime-corejs3/core-js-stable/date/now');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var _Promise__default = /*#__PURE__*/_interopDefaultLegacy(_Promise);
var _setTimeout__default = /*#__PURE__*/_interopDefaultLegacy(_setTimeout);
var _Date$now__default = /*#__PURE__*/_interopDefaultLegacy(_Date$now);

function getDateNow() {
  return _getDateNow.apply(this, arguments);
}

function _getDateNow() {
  _getDateNow = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee() {
    return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _Promise__default['default'](function (resolve) {
              return _setTimeout__default['default'](function () {
                return resolve(_Date$now__default['default']());
              }, 2000);
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getDateNow.apply(this, arguments);
}

module.exports = getDateNow;
