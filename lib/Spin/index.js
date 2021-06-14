'use strict';

var clsx_m = require('../clsx.m-44be2054.js');
var React = require('react');
var reactTransitionGroup = require('react-transition-group');
var _slicedToArray = require('@babel/runtime-corejs3/helpers/slicedToArray');
var _setTimeout = require('@babel/runtime-corejs3/core-js-stable/set-timeout');
require('@babel/runtime-corejs3/helpers/typeof');
require('@babel/runtime-corejs3/core-js-stable/array/is-array');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _setTimeout__default = /*#__PURE__*/_interopDefaultLegacy(_setTimeout);

var useLazyLoading = function useLazyLoading(loading, lazy) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      innerLoading = _useState2[0],
      setInnerLoading = _useState2[1];

  var timeout = React.useRef(undefined);
  React.useEffect(function () {
    if (!lazy) {
      setInnerLoading(loading);
    } else {
      if (loading) {
        timeout.current = _setTimeout__default['default'](function () {
          setInnerLoading(true);
        }, lazy);
      } else {
        if (timeout.current !== undefined) {
          clearTimeout(timeout.current);
        }

        setInnerLoading(false);
      }
    }
  }, [loading, lazy]);
  return innerLoading;
};

var Spin = function Spin(_ref) {
  var _loading = _ref.loading,
      _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? 2 : _ref$weight,
      lazy = _ref.lazy;
  var loading = useLazyLoading(_loading, lazy);
  return /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.CSSTransition, {
    "in": loading === true || loading === undefined,
    timeout: loading === undefined ? 0 : 300,
    classNames: "st-spin",
    unmountOnExit: true
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "st-spin",
    style: {
      '--st-spin-border': weight + 'px'
    }
  }));
};

var SpinContainer = function SpinContainer(_ref2) {
  var children = _ref2.children,
      _loading = _ref2.loading,
      weight = _ref2.weight,
      lazy = _ref2.lazy;
  var loading = useLazyLoading(_loading, lazy);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx_m.clsx('st-spin-container', loading && 'st-spin-container--loading')
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "st-spin-container__inner"
  }, children), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "st-spin-container__overlay"
  }, /*#__PURE__*/React__default['default'].createElement(Spin, {
    loading: loading,
    weight: weight
  })));
};

Spin.Container = SpinContainer;

module.exports = Spin;
