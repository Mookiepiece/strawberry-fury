'use strict';

var _Object$keys = require('@babel/runtime-corejs3/core-js-stable/object/keys');
var _Object$getOwnPropertySymbols = require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols');
var _filterInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/filter');
var _Object$getOwnPropertyDescriptor = require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor');
var _forEachInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/for-each');
var _Object$getOwnPropertyDescriptors = require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors');
var _Object$defineProperties = require('@babel/runtime-corejs3/core-js-stable/object/define-properties');
var _Object$defineProperty = require('@babel/runtime-corejs3/core-js-stable/object/define-property');
var _defineProperty = require('@babel/runtime-corejs3/helpers/defineProperty');
var _reverseInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/reverse');
var _Object$assign = require('@babel/runtime-corejs3/core-js-stable/object/assign');
var clsx_m = require('./clsx.m-44be2054.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _Object$keys__default = /*#__PURE__*/_interopDefaultLegacy(_Object$keys);
var _Object$getOwnPropertySymbols__default = /*#__PURE__*/_interopDefaultLegacy(_Object$getOwnPropertySymbols);
var _filterInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_filterInstanceProperty);
var _Object$getOwnPropertyDescriptor__default = /*#__PURE__*/_interopDefaultLegacy(_Object$getOwnPropertyDescriptor);
var _forEachInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_forEachInstanceProperty);
var _Object$getOwnPropertyDescriptors__default = /*#__PURE__*/_interopDefaultLegacy(_Object$getOwnPropertyDescriptors);
var _Object$defineProperties__default = /*#__PURE__*/_interopDefaultLegacy(_Object$defineProperties);
var _Object$defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_Object$defineProperty);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _reverseInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_reverseInstanceProperty);
var _Object$assign__default = /*#__PURE__*/_interopDefaultLegacy(_Object$assign);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) { var keys = _Object$keys__default['default'](object); if (_Object$getOwnPropertySymbols__default['default']) { var symbols = _Object$getOwnPropertySymbols__default['default'](object); if (enumerableOnly) symbols = _filterInstanceProperty__default['default'](symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor__default['default'](object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty__default['default'](_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors__default['default']) { _Object$defineProperties__default['default'](target, _Object$getOwnPropertyDescriptors__default['default'](source)); } else { var _context2; _forEachInstanceProperty__default['default'](_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty__default['default'](target, key, _Object$getOwnPropertyDescriptor__default['default'](source, key)); }); } } return target; }

var RowCreator = function RowCreator(displayName, defaultClassName) {
  var Row = function Row(_ref) {
    var children = _ref.children,
        reverse = _reverseInstanceProperty__default['default'](_ref),
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

    var classNames = clsx_m.clsx(reverse ? "".concat(className, "-reverse") : className, defaultClassName, justify && "justify-".concat(justify), align && "align-".concat(align), wrap && 'flex-wrap', wrapReverse && 'wrap-reverse', content && "align-content-".concat(content));
    return /*#__PURE__*/React__default['default'].createElement("div", {
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

var Row = _Object$assign__default['default'](RowCreator('Row', 'row'), {
  Col: RowCreator('Col', 'col')
});

exports.Row = Row;
