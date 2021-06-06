'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _typeof = require('@babel/runtime-corejs3/helpers/typeof');
var ReactDOM = require('react-dom/index');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);
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
  if ((typeof document === "undefined" ? "undefined" : _typeof__default['default'](document)) !== 'object') return null;
  var starfallModalRoot = setup('Modal');
  return ReactDOM__default['default'].createPortal(children, starfallModalRoot);
};
var NotificationPortal = function NotificationPortal(_ref2) {
  var children = _ref2.children;
  if ((typeof document === "undefined" ? "undefined" : _typeof__default['default'](document)) !== 'object') return null;
  var starfallModalRoot = setup('Modal');
  return ReactDOM__default['default'].createPortal(children, starfallModalRoot);
};

exports.NotificationPortal = NotificationPortal;
exports.Portal = Portal;
exports.setup = setup;
