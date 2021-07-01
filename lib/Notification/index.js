'use strict';

var _toConsumableArray = require('@babel/runtime-corejs3/helpers/toConsumableArray');
var _slicedToArray = require('@babel/runtime-corejs3/helpers/slicedToArray');
var _concatInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/concat');
var _findIndexInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/find-index');
var _sliceInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/slice');
var _mapInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/map');
var _setTimeout = require('@babel/runtime-corejs3/core-js-stable/set-timeout');
var React = require('react');
var ReactDOM = require('react-dom');
var reactTransitionGroup = require('react-transition-group');
var reactUse = require('react-use');
var starfallUtils = require('@mookiepiece/starfall-utils');
var Collapse = require('../Collapse-94f36ea0.js');
require('@babel/runtime-corejs3/helpers/defineProperty');
require('@babel/runtime-corejs3/core-js-stable/instance/includes');
require('@babel/runtime-corejs3/core-js-stable/object/keys');
require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols');
require('@babel/runtime-corejs3/core-js-stable/instance/filter');
require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor');
require('@babel/runtime-corejs3/core-js-stable/instance/for-each');
require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors');
require('@babel/runtime-corejs3/core-js-stable/object/define-properties');
require('@babel/runtime-corejs3/core-js-stable/object/define-property');
require('../clsx.m-44be2054.js');
require('@babel/runtime-corejs3/helpers/typeof');
require('@babel/runtime-corejs3/core-js-stable/array/is-array');
require('@babel/runtime-corejs3/helpers/extends');
require('@babel/runtime-corejs3/helpers/objectWithoutProperties');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _concatInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_concatInstanceProperty);
var _findIndexInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_findIndexInstanceProperty);
var _sliceInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_sliceInstanceProperty);
var _mapInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_mapInstanceProperty);
var _setTimeout__default = /*#__PURE__*/_interopDefaultLegacy(_setTimeout);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

var id = 0;
var NotificationBoxMounted = false;
var cache = [];

var _push = function _push(v) {
  cache.push(v);
};

var NotificationBox = function NotificationBox() {
  var _useState = React.useState([]),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      notis = _useState2[0],
      setNotis = _useState2[1];

  reactUse.useMount(function () {
    setNotis(cache);

    _push = function _push(v) {
      return setNotis(function (a) {
        var _context;

        return _concatInstanceProperty__default['default'](_context = []).call(_context, _toConsumableArray__default['default'](a), [v]);
      });
    };
  });
  var remove = starfallUtils.useEventCallback(function (id) {
    setNotis(function (notis) {
      var index = _findIndexInstanceProperty__default['default'](notis).call(notis, function (v) {
        return v.id === id;
      });

      if (index !== -1) {
        var _context2;

        return _concatInstanceProperty__default['default'](_context2 = _sliceInstanceProperty__default['default'](notis).call(notis, 0, index)).call(_context2, _sliceInstanceProperty__default['default'](notis).call(notis, index + 1));
      }

      return notis;
    });
  });
  return /*#__PURE__*/React__default['default'].createElement(starfallUtils.NotificationPortal, null, /*#__PURE__*/React__default['default'].createElement("div", null, _mapInstanceProperty__default['default'](notis).call(notis, function (value) {
    return /*#__PURE__*/React__default['default'].createElement(NotificationItem, {
      key: value.id,
      value: value,
      remove: remove
    });
  })));
};

var NotificationItem = function NotificationItem(_ref) {
  var value = _ref.value,
      remove = _ref.remove;

  var _useState3 = React.useState([true, false]),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  var mouseLeaveToRemoveRef = React.useRef();
  var close = starfallUtils.useEventCallback(function () {
    setVisible([false, false]);

    _setTimeout__default['default'](function () {
      return remove(value.id);
    }, 300);
  });
  var handleMouseEnter = starfallUtils.useEventCallback(function () {
    mouseLeaveToRemoveRef.current !== undefined && clearTimeout(mouseLeaveToRemoveRef.current);
  });
  var handleMouseLeave = starfallUtils.useEventCallback(function () {
    mouseLeaveToRemoveRef.current = _setTimeout__default['default'](function () {
      close();
    }, 3000);
  });
  React.useLayoutEffect(function () {
    setVisible([true, true]);
    handleMouseLeave();
  }, [handleMouseLeave]);
  return /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.CSSTransition, {
    "in": visible[1],
    timeout: 300,
    classNames: "st-notification-item"
  }, /*#__PURE__*/React__default['default'].createElement(Collapse.Collapse.Panel, {
    active: visible[0],
    className: "st-notification-item"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
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
  setup: function setup() {
    var starfallNotificationRoot = starfallUtils.setup('Notification');

    if (!NotificationBoxMounted) {
      NotificationBoxMounted = true;
      ReactDOM__default['default'].render( /*#__PURE__*/React__default['default'].createElement(NotificationBox, null), starfallNotificationRoot);
    }
  }
};

module.exports = Notification;
