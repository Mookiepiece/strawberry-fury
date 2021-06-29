import _toConsumableArray from '@babel/runtime-corejs3/helpers/toConsumableArray';
import _findIndexInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/find-index';
import _concatInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/concat';
import _sliceInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/slice';

var horizon = {
  remove: function remove(arr, cb) {
    var index = _findIndexInstanceProperty(arr).call(arr, cb);

    if (index !== -1) {
      var _context;

      return _concatInstanceProperty(_context = []).call(_context, _toConsumableArray(_sliceInstanceProperty(arr).call(arr, 0, index)), _toConsumableArray(_sliceInstanceProperty(arr).call(arr, index + 1, arr.length)));
    }

    return arr;
  }
};

export default horizon;
