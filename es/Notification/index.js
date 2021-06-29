import _toConsumableArray from '@babel/runtime-corejs3/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import _concatInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/concat';
import _findIndexInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/find-index';
import _sliceInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/slice';
import _mapInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/map';
import _setTimeout from '@babel/runtime-corejs3/core-js-stable/set-timeout';
import React, { useState, useRef, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { useMount } from 'react-use';
import Collapse from '../Collapse';
import { setup, NotificationPortal } from '../_utils/Portal';
import { useEventCallback } from '../_utils/useEventCallback';

var id = 0;
var NotificationBoxMounted = false;
var cache = [];

var _push = function _push(v) {
  cache.push(v);
};

var NotificationBox = function NotificationBox() {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      notis = _useState2[0],
      setNotis = _useState2[1];

  useMount(function () {
    setNotis(cache);

    _push = function _push(v) {
      return setNotis(function (a) {
        var _context;

        return _concatInstanceProperty(_context = []).call(_context, _toConsumableArray(a), [v]);
      });
    };
  });
  var remove = useEventCallback(function (id) {
    setNotis(function (notis) {
      var index = _findIndexInstanceProperty(notis).call(notis, function (v) {
        return v.id === id;
      });

      if (index !== -1) {
        var _context2;

        return _concatInstanceProperty(_context2 = _sliceInstanceProperty(notis).call(notis, 0, index)).call(_context2, _sliceInstanceProperty(notis).call(notis, index + 1));
      }

      return notis;
    });
  });
  return /*#__PURE__*/React.createElement(NotificationPortal, null, /*#__PURE__*/React.createElement("div", null, _mapInstanceProperty(notis).call(notis, function (value) {
    return /*#__PURE__*/React.createElement(NotificationItem, {
      key: value.id,
      value: value,
      remove: remove
    });
  })));
};

var NotificationItem = function NotificationItem(_ref) {
  var value = _ref.value,
      remove = _ref.remove;

  var _useState3 = useState([true, false]),
      _useState4 = _slicedToArray(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  var mouseLeaveToRemoveRef = useRef();
  var close = useEventCallback(function () {
    setVisible([false, false]);

    _setTimeout(function () {
      return remove(value.id);
    }, 300);
  });
  var handleMouseEnter = useEventCallback(function () {
    mouseLeaveToRemoveRef.current !== undefined && clearTimeout(mouseLeaveToRemoveRef.current);
  });
  var handleMouseLeave = useEventCallback(function () {
    mouseLeaveToRemoveRef.current = _setTimeout(function () {
      close();
    }, 3000);
  });
  useLayoutEffect(function () {
    setVisible([true, true]);
    handleMouseLeave();
  }, [handleMouseLeave]);
  return /*#__PURE__*/React.createElement(CSSTransition, {
    "in": visible[1],
    timeout: 300,
    classNames: "st-notification-item"
  }, /*#__PURE__*/React.createElement(Collapse.Panel, {
    active: visible[0],
    className: "st-notification-item"
  }, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, value.content)));
};

var Notification = {
  push: function push(content) {
    this.setup();

    _push({
      id: id++,
      content: content
    });
  },
  setup: function setup$1() {
    var starfallNotificationRoot = setup('Notification');

    if (!NotificationBoxMounted) {
      NotificationBoxMounted = true;
      ReactDOM.render( /*#__PURE__*/React.createElement(NotificationBox, null), starfallNotificationRoot);
    }
  }
};

export default Notification;
