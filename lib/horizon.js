'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _toConsumableArray = require('@babel/runtime-corejs3/helpers/toConsumableArray');
var _findIndexInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/find-index');
var _concatInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/concat');
var _sliceInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/slice');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _findIndexInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_findIndexInstanceProperty);
var _concatInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_concatInstanceProperty);
var _sliceInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_sliceInstanceProperty);

var horizon = {
  remove: function remove(arr, cb) {
    var index = _findIndexInstanceProperty__default['default'](arr).call(arr, cb);

    if (index !== -1) {
      var _context;

      return _concatInstanceProperty__default['default'](_context = []).call(_context, _toConsumableArray__default['default'](_sliceInstanceProperty__default['default'](arr).call(arr, 0, index)), _toConsumableArray__default['default'](_sliceInstanceProperty__default['default'](arr).call(arr, index + 1, arr.length)));
    }

    return arr;
  }
};

exports.horizon = horizon;
