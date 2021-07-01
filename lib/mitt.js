'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _Map = require('@babel/runtime-corejs3/core-js-stable/map');
var _spliceInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/splice');
var _indexOfInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/index-of');
var _mapInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/map');
var _sliceInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/slice');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _Map__default = /*#__PURE__*/_interopDefaultLegacy(_Map);
var _spliceInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_spliceInstanceProperty);
var _indexOfInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_indexOfInstanceProperty);
var _mapInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_mapInstanceProperty);
var _sliceInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_sliceInstanceProperty);

function mitt (n) {
  return {
    all: n = n || new _Map__default['default'](),
    on: function on(t, e) {
      var i = n.get(t);
      i && i.push(e) || n.set(t, [e]);
    },
    off: function off(t, e) {
      var i = n.get(t);
      i && _spliceInstanceProperty__default['default'](i).call(i, _indexOfInstanceProperty__default['default'](i).call(i, e) >>> 0, 1);
    },
    emit: function emit(t, e) {
      var _context, _context2, _context3, _context4;

      _mapInstanceProperty__default['default'](_context = _sliceInstanceProperty__default['default'](_context2 = n.get(t) || []).call(_context2)).call(_context, function (n) {
        n(e);
      }), _mapInstanceProperty__default['default'](_context3 = _sliceInstanceProperty__default['default'](_context4 = n.get("*") || []).call(_context4)).call(_context3, function (n) {
        n(t, e);
      });
    }
  };
}

var Mitt = function Mitt() {
  return mitt();
};

exports.Mitt = Mitt;
