'use strict';

var _extends = require('@babel/runtime-corejs3/helpers/extends');
var _objectWithoutProperties = require('@babel/runtime-corejs3/helpers/objectWithoutProperties');
var clsx_m = require('../clsx.m-44be2054.js');
var React = require('react');
require('@babel/runtime-corejs3/helpers/typeof');
require('@babel/runtime-corejs3/core-js-stable/array/is-array');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Link = function Link(props) {
  var children = props.children,
      type = props.type,
      href = props.href,
      className = props.className,
      active = props.active,
      rest = _objectWithoutProperties__default['default'](props, ["children", "type", "href", "className", "active"]);

  return /*#__PURE__*/React__default['default'].createElement("a", _extends__default['default']({
    className: clsx_m.clsx(className, 'st-link', type === 'button' ? 'st-link--button' : 'st-link--default', active && 'st-link--active'),
    tabIndex: 0,
    href: href
  }, rest), /*#__PURE__*/React__default['default'].createElement("span", null, children));
};

module.exports = Link;
