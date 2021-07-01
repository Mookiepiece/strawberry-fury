'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _slicedToArray = require('@babel/runtime-corejs3/helpers/slicedToArray');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

// This hook imporves original "promise return trigger"
// with type friendly "void return trigger"
function useAsyncFn() {
  var _useAsyncFn2 = useAsyncFn.apply(void 0, arguments),
      _useAsyncFn3 = _slicedToArray__default['default'](_useAsyncFn2, 2),
      state = _useAsyncFn3[0],
      _trigger = _useAsyncFn3[1];

  var trigger = function trigger() {
    return void _trigger.apply(void 0, arguments);
  };

  return [state, trigger];
}

exports.useAsyncFn = useAsyncFn;
