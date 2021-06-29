'use strict';

var _extends = require('@babel/runtime-corejs3/helpers/extends');
var _objectWithoutProperties = require('@babel/runtime-corejs3/helpers/objectWithoutProperties');
var clsx_m = require('../clsx.m-44be2054.js');
var React = require('react');
var Spin = require('../Spin');
require('@babel/runtime-corejs3/helpers/typeof');
require('@babel/runtime-corejs3/core-js-stable/array/is-array');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Spin__default = /*#__PURE__*/_interopDefaultLegacy(Spin);

var Button = function Button(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      primary = _ref.primary,
      textual = _ref.textual,
      block = _ref.block,
      solid = _ref.solid,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      disabled = _ref.disabled,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties__default['default'](_ref, ["type", "primary", "textual", "block", "solid", "loading", "disabled", "children", "className"]);

  return /*#__PURE__*/React__default['default'].createElement("button", _extends__default['default']({
    type: type,
    className: clsx_m.clsx(className, 'st-button', primary ? 'st-button--primary' : textual ? 'st-button--textual' : 'st-button--default', block && 'st-button--block', loading && 'st-button--loading', solid && 'st-button--solid'),
    disabled: disabled || loading
  }, rest), /*#__PURE__*/React__default['default'].createElement(Spin__default['default'], {
    weight: 1,
    loading: loading
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "st-button__content"
  }, children));
};

module.exports = Button;
