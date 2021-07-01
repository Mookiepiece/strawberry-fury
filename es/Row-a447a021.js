import _Object$keys from '@babel/runtime-corejs3/core-js-stable/object/keys';
import _Object$getOwnPropertySymbols from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols';
import _filterInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/filter';
import _Object$getOwnPropertyDescriptor from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor';
import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import _Object$getOwnPropertyDescriptors from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors';
import _Object$defineProperties from '@babel/runtime-corejs3/core-js-stable/object/define-properties';
import _Object$defineProperty from '@babel/runtime-corejs3/core-js-stable/object/define-property';
import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _reverseInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/reverse';
import _Object$assign from '@babel/runtime-corejs3/core-js-stable/object/assign';
import { c as clsx } from './clsx.m-7e9a4a81.js';
import React from 'react';

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

var RowCreator = function RowCreator(displayName, defaultClassName) {
  var Row = function Row(_ref) {
    var children = _ref.children,
        reverse = _reverseInstanceProperty(_ref),
        className = _ref.className,
        justify = _ref.justify,
        align = _ref.align,
        content = _ref.content,
        wrap = _ref.wrap,
        wrapReverse = _ref.wrapReverse,
        grow = _ref.grow,
        shrink = _ref.shrink,
        basis = _ref.basis,
        flex = _ref.flex,
        order = _ref.order,
        style = _ref.style;

    var classNames = clsx(reverse ? "".concat(className, "-reverse") : className, defaultClassName, justify && "justify-".concat(justify), align && "align-".concat(align), wrap && 'flex-wrap', wrapReverse && 'wrap-reverse', content && "align-content-".concat(content));
    return /*#__PURE__*/React.createElement("div", {
      className: classNames,
      style: _objectSpread({
        flex: flex,
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
        order: order
      }, style)
    }, children);
  };

  Row.displayName = displayName;
  return Row;
};

var Row = _Object$assign(RowCreator('Row', 'row'), {
  Col: RowCreator('Col', 'col')
});

export { Row as R };
