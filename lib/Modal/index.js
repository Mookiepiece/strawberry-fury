'use strict';

var _Object$keys = require('@babel/runtime-corejs3/core-js-stable/object/keys');
var _Object$getOwnPropertySymbols = require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols');
var _filterInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/filter');
var _Object$getOwnPropertyDescriptor = require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor');
var _forEachInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/for-each');
var _Object$getOwnPropertyDescriptors = require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors');
var _Object$defineProperties = require('@babel/runtime-corejs3/core-js-stable/object/define-properties');
var _Object$defineProperty = require('@babel/runtime-corejs3/core-js-stable/object/define-property');
var _extends = require('@babel/runtime-corejs3/helpers/extends');
var _defineProperty = require('@babel/runtime-corejs3/helpers/defineProperty');
var _objectWithoutProperties = require('@babel/runtime-corejs3/helpers/objectWithoutProperties');
var React = require('react');
var reactTransitionGroup = require('react-transition-group');
var Button = require('../Button');
var Portal = require('../_utils/Portal');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _Object$keys__default = /*#__PURE__*/_interopDefaultLegacy(_Object$keys);
var _Object$getOwnPropertySymbols__default = /*#__PURE__*/_interopDefaultLegacy(_Object$getOwnPropertySymbols);
var _filterInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_filterInstanceProperty);
var _Object$getOwnPropertyDescriptor__default = /*#__PURE__*/_interopDefaultLegacy(_Object$getOwnPropertyDescriptor);
var _forEachInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_forEachInstanceProperty);
var _Object$getOwnPropertyDescriptors__default = /*#__PURE__*/_interopDefaultLegacy(_Object$getOwnPropertyDescriptors);
var _Object$defineProperties__default = /*#__PURE__*/_interopDefaultLegacy(_Object$defineProperties);
var _Object$defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_Object$defineProperty);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);

function ownKeys(object, enumerableOnly) { var keys = _Object$keys__default['default'](object); if (_Object$getOwnPropertySymbols__default['default']) { var symbols = _Object$getOwnPropertySymbols__default['default'](object); if (enumerableOnly) symbols = _filterInstanceProperty__default['default'](symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor__default['default'](object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty__default['default'](_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors__default['default']) { _Object$defineProperties__default['default'](target, _Object$getOwnPropertyDescriptors__default['default'](source)); } else { var _context2; _forEachInstanceProperty__default['default'](_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty__default['default'](target, key, _Object$getOwnPropertyDescriptor__default['default'](source, key)); }); } } return target; }

var Modal = function Modal(props) {
  var visible = props.visible,
      title = props.title,
      onClose = props.onClose;
      props.noHeader;
      var _props$closable = props.closable,
      closable = _props$closable === void 0 ? true : _props$closable,
      _props$maskClosable = props.maskClosable,
      maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
      width = props.width,
      maxWidth = props.maxWidth,
      style = props.style,
      children = props.children,
      mountOnEnter = props.mountOnEnter,
      unmountOnExit = props.unmountOnExit,
      onVisibilityChange = props.onVisibilityChange,
      rest = _objectWithoutProperties__default['default'](props, ["visible", "title", "onClose", "noHeader", "closable", "maskClosable", "width", "maxWidth", "style", "children", "mountOnEnter", "unmountOnExit", "onVisibilityChange"]);

  return /*#__PURE__*/React__default['default'].createElement(Portal.Portal, null, /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.CSSTransition, {
    timeout: 300,
    "in": visible,
    classNames: "st-modal-wrap",
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit,
    onEnter: onVisibilityChange && function () {
      return onVisibilityChange(true);
    },
    onExit: onVisibilityChange && function () {
      return onVisibilityChange(false);
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", _extends__default['default']({
    className: "st-modal-wrap",
    style: _objectSpread({
      width: width,
      maxWidth: maxWidth
    }, style)
  }, rest), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "st-modal__mask",
    onClick: maskClosable ? onClose : undefined
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "st-modal"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "st-modal__header"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "st-modal__title"
  }, title), closable ? /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
    textual: true,
    className: "st-modal__close",
    onClick: onClose
  }, "\xD7") : null), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "st-modal__body"
  }, children)))));
};

module.exports = Modal;
