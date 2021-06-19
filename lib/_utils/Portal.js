'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _slicedToArray = require('@babel/runtime-corejs3/helpers/slicedToArray');
var React = require('react');
var ReactDOM = require('react-dom/index');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

var starfallModalRoot = null;
var starfallNotificationRoot = null;
var setup = function setup(key) {
  if (!starfallModalRoot || !starfallNotificationRoot) {
    starfallModalRoot = document.createElement('div');
    starfallModalRoot.style.position = 'fixed';
    starfallModalRoot.style.height = '0';
    starfallModalRoot.style.top = '0';
    document.body.appendChild(starfallModalRoot);
    starfallNotificationRoot = document.createElement('div');
    starfallNotificationRoot.style.position = 'fixed';
    starfallNotificationRoot.style.height = '0';
    starfallNotificationRoot.style.top = '0';
    document.body.appendChild(starfallNotificationRoot);
  }

  return {
    Modal: starfallModalRoot,
    Notification: starfallNotificationRoot
  }[key];
};
var Portal = function Portal(_ref) {
  var children = _ref.children;
  var isMounted = useMountedStatePlus();
  return isMounted ? ReactDOM__default['default'].createPortal(children, setup('Modal')) : null;
};
var NotificationPortal = function NotificationPortal(_ref2) {
  var children = _ref2.children;
  var isMounted = useMountedStatePlus();
  return isMounted ? ReactDOM__default['default'].createPortal(children, setup('Notification')) : null;
};
var useMountedStatePlus = function useMountedStatePlus() {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  React.useEffect(function () {
    setState(true);
  }, []);
  return state;
};

exports.NotificationPortal = NotificationPortal;
exports.Portal = Portal;
exports.setup = setup;
exports.useMountedStatePlus = useMountedStatePlus;
