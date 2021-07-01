'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Input = function Input(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange;

  if (typeof value !== 'string' || !_onChange) {
    // form items will provide value and onChange handler, so they are optional
    throw new Error('[St Input] missing prop `value` and `onChange`');
  }

  return /*#__PURE__*/React__default['default'].createElement("input", {
    className: "st-input",
    type: "text",
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  });
};

module.exports = Input;
