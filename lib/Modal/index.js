'use strict';

var _extends = require('@babel/runtime-corejs3/helpers/extends');
var _defineProperty = require('@babel/runtime-corejs3/helpers/defineProperty');
var _slicedToArray = require('@babel/runtime-corejs3/helpers/slicedToArray');
var _objectWithoutProperties = require('@babel/runtime-corejs3/helpers/objectWithoutProperties');
var _toConsumableArray = require('@babel/runtime-corejs3/helpers/toConsumableArray');
var _concatInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/concat');
var _Object$keys = require('@babel/runtime-corejs3/core-js-stable/object/keys');
var _Object$getOwnPropertySymbols = require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols');
var _filterInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/filter');
var _Object$getOwnPropertyDescriptor = require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor');
var _forEachInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/for-each');
var _Object$getOwnPropertyDescriptors = require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors');
var _Object$defineProperties = require('@babel/runtime-corejs3/core-js-stable/object/define-properties');
var _Object$defineProperty = require('@babel/runtime-corejs3/core-js-stable/object/define-property');
var React = require('react');
var reactTransitionGroup = require('react-transition-group');
var Button = require('../Button');
var Portal = require('../_utils/Portal');
var Mitt = require('../_utils/mitt');
var clsx_m = require('../clsx.m-44be2054.js');
var useEventCallback = require('../_utils/useEventCallback');
var horizon = require('../_utils/horizon');
require('@babel/runtime-corejs3/helpers/typeof');
require('@babel/runtime-corejs3/core-js-stable/array/is-array');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _concatInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_concatInstanceProperty);
var _Object$keys__default = /*#__PURE__*/_interopDefaultLegacy(_Object$keys);
var _Object$getOwnPropertySymbols__default = /*#__PURE__*/_interopDefaultLegacy(_Object$getOwnPropertySymbols);
var _filterInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_filterInstanceProperty);
var _Object$getOwnPropertyDescriptor__default = /*#__PURE__*/_interopDefaultLegacy(_Object$getOwnPropertyDescriptor);
var _forEachInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_forEachInstanceProperty);
var _Object$getOwnPropertyDescriptors__default = /*#__PURE__*/_interopDefaultLegacy(_Object$getOwnPropertyDescriptors);
var _Object$defineProperties__default = /*#__PURE__*/_interopDefaultLegacy(_Object$defineProperties);
var _Object$defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_Object$defineProperty);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var Mitt__default = /*#__PURE__*/_interopDefaultLegacy(Mitt);
var horizon__default = /*#__PURE__*/_interopDefaultLegacy(horizon);

function ownKeys(object, enumerableOnly) { var keys = _Object$keys__default['default'](object); if (_Object$getOwnPropertySymbols__default['default']) { var symbols = _Object$getOwnPropertySymbols__default['default'](object); if (enumerableOnly) symbols = _filterInstanceProperty__default['default'](symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor__default['default'](object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty__default['default'](_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors__default['default']) { _Object$defineProperties__default['default'](target, _Object$getOwnPropertyDescriptors__default['default'](source)); } else { var _context3; _forEachInstanceProperty__default['default'](_context3 = ownKeys(Object(source))).call(_context3, function (key) { _Object$defineProperty__default['default'](target, key, _Object$getOwnPropertyDescriptor__default['default'](source, key)); }); } } return target; }
var registry = [];
var ModalMitt = Mitt__default['default']();
ModalMitt.on('REGISTER', function (id) {
  var _context;

  return Modal.registry = registry = _concatInstanceProperty__default['default'](_context = []).call(_context, _toConsumableArray__default['default'](registry), [id]);
});
ModalMitt.on('UNREGISTER', function (id) {
  return Modal.registry = registry = horizon__default['default'].remove(registry, function (i) {
    return i === id;
  });
});
var uuid = 1;

var noop = function noop() {};

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

  var _useState = React.useState(function () {
    return uuid++;
  }),
      _useState2 = _slicedToArray__default['default'](_useState, 1),
      id = _useState2[0];

  React.useEffect(function () {
    if (visible) {
      console.log('I am res', id);
      ModalMitt.emit('REGISTER', id);
    } else {
      ModalMitt.emit('UNREGISTER', id);
    }
  }, [id, visible]);
  var ecOnClose = useEventCallback.useEventCallback(onClose || noop);
  React.useEffect(function () {
    var cb = function cb(i) {
      if (i == id) ecOnClose();
    };

    ModalMitt.on('REMOTE_CLOSE', cb);
    return function () {
      return ModalMitt.off('REMOTE_CLOSE', cb);
    };
  }, [ecOnClose, id]);
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
    className: clsx_m.clsx('st-modal-wrap', !visible && 'st-not-interactive'),
    "aria-hidden": !visible,
    style: _objectSpread({
      width: width,
      maxWidth: maxWidth
    }, style)
  }, rest), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "st-modal__mask",
    onClick: maskClosable && visible ? onClose : undefined
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "st-modal"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "st-modal__header"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "st-modal__title"
  }, title), closable ? /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
    textual: true,
    className: "st-modal__close",
    onClick: visible ? onClose : undefined
  }, "\xD7") : null), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "st-modal__body"
  }, children)))));
};

Modal.Mitt = ModalMitt;
Modal.registry = registry;

module.exports = Modal;
