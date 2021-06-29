import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';

// This hook imporves original "promise return trigger" 
// with type friendly "void return trigger"
function useAsyncFn() {
  var _useAsyncFn2 = useAsyncFn.apply(void 0, arguments),
      _useAsyncFn3 = _slicedToArray(_useAsyncFn2, 2),
      state = _useAsyncFn3[0],
      _trigger = _useAsyncFn3[1];

  var trigger = function trigger() {
    return void _trigger.apply(void 0, arguments);
  };

  return [state, trigger];
}

export default useAsyncFn;
