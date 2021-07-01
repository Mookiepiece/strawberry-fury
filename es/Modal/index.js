import _extends from '@babel/runtime-corejs3/helpers/extends';
import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import _objectWithoutProperties from '@babel/runtime-corejs3/helpers/objectWithoutProperties';
import _toConsumableArray from '@babel/runtime-corejs3/helpers/toConsumableArray';
import _concatInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/concat';
import _Object$keys from '@babel/runtime-corejs3/core-js-stable/object/keys';
import _Object$getOwnPropertySymbols from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols';
import _filterInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/filter';
import _Object$getOwnPropertyDescriptor from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor';
import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import _Object$getOwnPropertyDescriptors from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors';
import _Object$defineProperties from '@babel/runtime-corejs3/core-js-stable/object/define-properties';
import _Object$defineProperty from '@babel/runtime-corejs3/core-js-stable/object/define-property';
import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { c as clsx } from '../clsx.m-7e9a4a81.js';
import { B as Button } from '../Button-53766609.js';
import { Mitt, horizon, useEventCallback, Portal } from '@mookiepiece/starfall-utils';
import '@babel/runtime-corejs3/helpers/typeof';
import '@babel/runtime-corejs3/core-js-stable/array/is-array';
import '../Spin-89b29ad4.js';
import '@babel/runtime-corejs3/core-js-stable/set-timeout';

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context3; _forEachInstanceProperty(_context3 = ownKeys(Object(source))).call(_context3, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }
var registry = [];
var ModalMitt = Mitt();
ModalMitt.on('REGISTER', function (id) {
  var _context;

  return Modal.registry = registry = _concatInstanceProperty(_context = []).call(_context, _toConsumableArray(registry), [id]);
});
ModalMitt.on('UNREGISTER', function (id) {
  return Modal.registry = registry = horizon.remove(registry, function (i) {
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
      rest = _objectWithoutProperties(props, ["visible", "title", "onClose", "noHeader", "closable", "maskClosable", "width", "maxWidth", "style", "children", "mountOnEnter", "unmountOnExit", "onVisibilityChange"]);

  var _useState = useState(function () {
    return uuid++;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      id = _useState2[0];

  useEffect(function () {
    if (visible) {
      console.log('I am res', id);
      ModalMitt.emit('REGISTER', id);
    } else {
      ModalMitt.emit('UNREGISTER', id);
    }
  }, [id, visible]);
  var ecOnClose = useEventCallback(onClose || noop);
  useEffect(function () {
    var cb = function cb(i) {
      if (i == id) ecOnClose();
    };

    ModalMitt.on('REMOTE_CLOSE', cb);
    return function () {
      return ModalMitt.off('REMOTE_CLOSE', cb);
    };
  }, [ecOnClose, id]);
  return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(CSSTransition, {
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
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: clsx('st-modal-wrap', !visible && 'st-not-interactive'),
    "aria-hidden": !visible,
    style: _objectSpread({
      width: width,
      maxWidth: maxWidth
    }, style)
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "st-modal__mask",
    onClick: maskClosable && visible ? onClose : undefined
  }), /*#__PURE__*/React.createElement("div", {
    className: "st-modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-modal__header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-modal__title"
  }, title), closable ? /*#__PURE__*/React.createElement(Button, {
    textual: true,
    className: "st-modal__close",
    onClick: visible ? onClose : undefined
  }, "\xD7") : null), /*#__PURE__*/React.createElement("div", {
    className: "st-modal__body"
  }, children)))));
};

Modal.Mitt = ModalMitt;
Modal.registry = registry;

export default Modal;
