'use strict';

var _defineProperty = require('@babel/runtime-corejs3/helpers/defineProperty');
var _toConsumableArray = require('@babel/runtime-corejs3/helpers/toConsumableArray');
var _slicedToArray = require('@babel/runtime-corejs3/helpers/slicedToArray');
var _includesInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/includes');
var _concatInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/concat');
var _findIndexInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/find-index');
var _sliceInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/slice');
var _Object$keys = require('@babel/runtime-corejs3/core-js-stable/object/keys');
var _Object$getOwnPropertySymbols = require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols');
var _filterInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/filter');
var _Object$getOwnPropertyDescriptor = require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor');
var _forEachInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/for-each');
var _Object$getOwnPropertyDescriptors = require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors');
var _Object$defineProperties = require('@babel/runtime-corejs3/core-js-stable/object/define-properties');
var _Object$defineProperty = require('@babel/runtime-corejs3/core-js-stable/object/define-property');
var React = require('react');
var clsx_m = require('../clsx.m-44be2054.js');
var reactUse = require('react-use');
var useEventCallback = require('../_utils/useEventCallback');
var _extends = require('@babel/runtime-corejs3/helpers/extends');
var _objectWithoutProperties = require('@babel/runtime-corejs3/helpers/objectWithoutProperties');
var reactTransitionGroup = require('react-transition-group');
require('@babel/runtime-corejs3/helpers/typeof');
require('@babel/runtime-corejs3/core-js-stable/array/is-array');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _includesInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_includesInstanceProperty);
var _concatInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_concatInstanceProperty);
var _findIndexInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_findIndexInstanceProperty);
var _sliceInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_sliceInstanceProperty);
var _Object$keys__default = /*#__PURE__*/_interopDefaultLegacy(_Object$keys);
var _Object$getOwnPropertySymbols__default = /*#__PURE__*/_interopDefaultLegacy(_Object$getOwnPropertySymbols);
var _filterInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_filterInstanceProperty);
var _Object$getOwnPropertyDescriptor__default = /*#__PURE__*/_interopDefaultLegacy(_Object$getOwnPropertyDescriptor);
var _forEachInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_forEachInstanceProperty);
var _Object$getOwnPropertyDescriptors__default = /*#__PURE__*/_interopDefaultLegacy(_Object$getOwnPropertyDescriptors);
var _Object$defineProperties__default = /*#__PURE__*/_interopDefaultLegacy(_Object$defineProperties);
var _Object$defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_Object$defineProperty);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);

function ownKeys$1(object, enumerableOnly) { var keys = _Object$keys__default['default'](object); if (_Object$getOwnPropertySymbols__default['default']) { var symbols = _Object$getOwnPropertySymbols__default['default'](object); if (enumerableOnly) symbols = _filterInstanceProperty__default['default'](symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor__default['default'](object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty__default['default'](_context = ownKeys$1(Object(source), true)).call(_context, function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors__default['default']) { _Object$defineProperties__default['default'](target, _Object$getOwnPropertyDescriptors__default['default'](source)); } else { var _context2; _forEachInstanceProperty__default['default'](_context2 = ownKeys$1(Object(source))).call(_context2, function (key) { _Object$defineProperty__default['default'](target, key, _Object$getOwnPropertyDescriptor__default['default'](source, key)); }); } } return target; }

var CollapsePanel = function CollapsePanel(_ref) {
  var children = _ref.children,
      active = _ref.active,
      className = _ref.className,
      style = _ref.style,
      rest = _objectWithoutProperties__default['default'](_ref, ["children", "active", "className", "style"]);

  var ref = React.useRef(null);
  var handleExit = React.useCallback(function () {
    if (ref.current) {
      var _ref$current;

      ref.current.style.height = "".concat(ref.current.scrollHeight, "px");
      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.scrollHeight; // trigger browsers reflow to apply the height.
      // https://github.com/reactjs/react-transition-group/blob/master/src/CSSTransition.js#L193
    }
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.Transition, {
    "in": active,
    timeout: 300,
    onExit: handleExit
  }, function (state) {
    var _ref$current2;

    return /*#__PURE__*/React__default['default'].createElement("div", _extends__default['default']({
      className: clsx_m.clsx('sf-collapse-panel', className),
      ref: ref,
      style: _objectSpread$1(_objectSpread$1({}, {
        entering: {
          height: (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.scrollHeight,
          transition: 'all 0.3s'
        },
        entered: {
          height: undefined
        },
        exiting: {
          height: 0,
          transition: 'all 0.3s'
        },
        exited: {
          height: 0
        },
        unmounted: {
          height: undefined
        }
      }[state]), style)
    }, rest), children);
  });
};

function ownKeys(object, enumerableOnly) { var keys = _Object$keys__default['default'](object); if (_Object$getOwnPropertySymbols__default['default']) { var symbols = _Object$getOwnPropertySymbols__default['default'](object); if (enumerableOnly) symbols = _filterInstanceProperty__default['default'](symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor__default['default'](object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context6; _forEachInstanceProperty__default['default'](_context6 = ownKeys(Object(source), true)).call(_context6, function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors__default['default']) { _Object$defineProperties__default['default'](target, _Object$getOwnPropertyDescriptors__default['default'](source)); } else { var _context7; _forEachInstanceProperty__default['default'](_context7 = ownKeys(Object(source))).call(_context7, function (key) { _Object$defineProperty__default['default'](target, key, _Object$getOwnPropertyDescriptor__default['default'](source, key)); }); } } return target; }
var CollapseContext = /*#__PURE__*/React__default['default'].createContext({
  names: [],
  activeNames: [],
  register: function register() {
    return '';
  },
  unregister: function unregister() {},
  toggle: function toggle() {}
});

var Collapse = function Collapse(_ref) {
  var children = _ref.children;

  var _useState = React.useState([]),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      names = _useState2[0],
      setNames = _useState2[1];

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
      activeNames = _useState4[0],
      setActiveNames = _useState4[1];

  var counter = React.useRef(0);
  var register = useEventCallback.useEventCallback(function () {
    var i;

    do {
      i = (counter.current++).toString();
    } while (_includesInstanceProperty__default['default'](names).call(names, i));

    setNames(function (names) {
      var _context;

      return _concatInstanceProperty__default['default'](_context = []).call(_context, _toConsumableArray__default['default'](names), [i]);
    });
    return i;
  });
  var unregister = React.useCallback(function (i) {
    setNames(function (names) {
      var _context2;

      var index = _findIndexInstanceProperty__default['default'](names).call(names, function (k) {
        return k === i;
      });

      if (index === -1) {
        console.error("[SF Collapse] invalid name: ".concat(i));
      }

      return _concatInstanceProperty__default['default'](_context2 = []).call(_context2, _toConsumableArray__default['default'](_sliceInstanceProperty__default['default'](names).call(names, 0, index)), _toConsumableArray__default['default'](_sliceInstanceProperty__default['default'](names).call(names, index + 1)));
    });
    setActiveNames(function (activeNames) {
      var _context3;

      var index = _findIndexInstanceProperty__default['default'](activeNames).call(activeNames, function (k) {
        return k === i;
      });

      return _concatInstanceProperty__default['default'](_context3 = []).call(_context3, _toConsumableArray__default['default'](_sliceInstanceProperty__default['default'](activeNames).call(activeNames, 0, index)), _toConsumableArray__default['default'](_sliceInstanceProperty__default['default'](activeNames).call(activeNames, index + 1)));
    });
  }, []);
  var toggle = React.useCallback(function (i) {
    setActiveNames(function (activeNames) {
      var _context4, _context5;

      var index = _findIndexInstanceProperty__default['default'](activeNames).call(activeNames, function (k) {
        return k === i;
      });

      return index === -1 ? _concatInstanceProperty__default['default'](_context4 = []).call(_context4, _toConsumableArray__default['default'](activeNames), [i]) : _concatInstanceProperty__default['default'](_context5 = []).call(_context5, _toConsumableArray__default['default'](_sliceInstanceProperty__default['default'](activeNames).call(activeNames, 0, index)), _toConsumableArray__default['default'](_sliceInstanceProperty__default['default'](activeNames).call(activeNames, index + 1)));
    });
  }, []);
  var collapseContextValue = React.useMemo(function () {
    return {
      register: register,
      unregister: unregister,
      names: names,
      activeNames: activeNames,
      toggle: toggle
    };
  }, [register, unregister, names, activeNames, toggle]);
  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(CollapseContext.Provider, {
    value: collapseContextValue
  }, children));
};

var CollapseSummary = function CollapseSummary(_ref2) {
  var children = _ref2.children,
      active = _ref2.active,
      toggle = _ref2.toggle;
  React__default['default'].Children.only(children);
  return /*#__PURE__*/React__default['default'].cloneElement(children, {
    className: clsx_m.clsx(children.props.className, active ? 'active' : ''),
    onClick: function onClick() {
      var _children$props$onCli, _children$props;

      toggle();
      (_children$props$onCli = (_children$props = children.props).onClick) === null || _children$props$onCli === void 0 ? void 0 : _children$props$onCli.call(_children$props);
    }
  });
};

var CollapseItem = function CollapseItem(_ref3) {
  var children = _ref3.children;

  var _useContext = React.useContext(CollapseContext),
      register = _useContext.register,
      unregister = _useContext.unregister,
      activeNames = _useContext.activeNames,
      _toggle = _useContext.toggle;

  var _useState5 = React.useState(''),
      _useState6 = _slicedToArray__default['default'](_useState5, 2),
      name = _useState6[0],
      setName = _useState6[1];

  reactUse.useMount(function () {
    return setName(register());
  });
  reactUse.useUnmount(function () {
    return unregister(name);
  });
  var value = React.useMemo(function () {
    return {
      toggle: function toggle() {
        return _toggle(name);
      },
      active: _includesInstanceProperty__default['default'](activeNames).call(activeNames, name),
      name: name
    };
  }, [activeNames, name, _toggle]);
  var summary = children[0];
  var panel = children[1];
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].cloneElement(summary, _objectSpread(_objectSpread({}, summary.props), {}, {
    active: value.active,
    toggle: value.toggle
  })), /*#__PURE__*/React__default['default'].cloneElement(panel, _objectSpread(_objectSpread({}, panel.props), {}, {
    active: value.active
  })));
};

Collapse.Panel = CollapsePanel;
Collapse.Item = CollapseItem;
Collapse.Summary = CollapseSummary;

module.exports = Collapse;
