import _asyncToGenerator from '@babel/runtime-corejs3/helpers/asyncToGenerator';
import _regeneratorRuntime from '@babel/runtime-corejs3/regenerator';
import _Promise from '@babel/runtime-corejs3/core-js-stable/promise';
import _setTimeout from '@babel/runtime-corejs3/core-js-stable/set-timeout';
import _Date$now from '@babel/runtime-corejs3/core-js-stable/date/now';

function getDateNow() {
  return _getDateNow.apply(this, arguments);
}

function _getDateNow() {
  _getDateNow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _Promise(function (resolve) {
              return _setTimeout(function () {
                return resolve(_Date$now());
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

export default getDateNow;
