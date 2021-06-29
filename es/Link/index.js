import _extends from '@babel/runtime-corejs3/helpers/extends';
import _objectWithoutProperties from '@babel/runtime-corejs3/helpers/objectWithoutProperties';
import { c as clsx } from '../clsx.m-7e9a4a81.js';
import React from 'react';
import '@babel/runtime-corejs3/helpers/typeof';
import '@babel/runtime-corejs3/core-js-stable/array/is-array';

var Link = function Link(props) {
  var children = props.children,
      type = props.type,
      href = props.href,
      className = props.className,
      active = props.active,
      rest = _objectWithoutProperties(props, ["children", "type", "href", "className", "active"]);

  return /*#__PURE__*/React.createElement("a", _extends({
    className: clsx(className, 'st-link', type === 'button' ? 'st-link--button' : 'st-link--default', active && 'st-link--active'),
    tabIndex: 0,
    href: href
  }, rest), /*#__PURE__*/React.createElement("span", null, children));
};

export default Link;
