'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
var _typeof = require('@babel/runtime-corejs3/helpers/typeof');
var _Array$isArray = require('@babel/runtime-corejs3/core-js-stable/array/is-array');
var reactUse = require('react-use');
var _extends$1 = require('@babel/runtime-corejs3/helpers/extends');
var _objectWithoutProperties = require('@babel/runtime-corejs3/helpers/objectWithoutProperties');
var reactTransitionGroup = require('react-transition-group');
var _setTimeout = require('@babel/runtime-corejs3/core-js-stable/set-timeout');
var ReactDOM = require('react-dom/index');
var _Map = require('@babel/runtime-corejs3/core-js-stable/map');
var _spliceInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/splice');
var _indexOfInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/index-of');
var _mapInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/map');
var _reverseInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/reverse');
var _Object$assign = require('@babel/runtime-corejs3/core-js-stable/object/assign');
var ReactDOM$1 = require('react-dom');
var _asyncToGenerator = require('@babel/runtime-corejs3/helpers/asyncToGenerator');
var _regeneratorRuntime = require('@babel/runtime-corejs3/regenerator');
var _Promise = require('@babel/runtime-corejs3/core-js-stable/promise');
var _findInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/find');
var _Object$create = require('@babel/runtime-corejs3/core-js-stable/object/create');
var _Object$setPrototypeOf = require('@babel/runtime-corejs3/core-js-stable/object/set-prototype-of');
var _Object$getPrototypeOf = require('@babel/runtime-corejs3/core-js-stable/object/get-prototype-of');
var _Reflect$construct = require('@babel/runtime-corejs3/core-js-stable/reflect/construct');
var _bindInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/bind');
var _everyInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/every');
var _JSON$stringify = require('@babel/runtime-corejs3/core-js-stable/json/stringify');
var _parseInt = require('@babel/runtime-corejs3/core-js-stable/parse-int');
var _keysInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/keys');
var _reduceInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/reduce');

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
var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);
var _Array$isArray__default = /*#__PURE__*/_interopDefaultLegacy(_Array$isArray);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends$1);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var _setTimeout__default = /*#__PURE__*/_interopDefaultLegacy(_setTimeout);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var _Map__default = /*#__PURE__*/_interopDefaultLegacy(_Map);
var _spliceInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_spliceInstanceProperty);
var _indexOfInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_indexOfInstanceProperty);
var _mapInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_mapInstanceProperty);
var _reverseInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_reverseInstanceProperty);
var _Object$assign__default = /*#__PURE__*/_interopDefaultLegacy(_Object$assign);
var ReactDOM__default$1 = /*#__PURE__*/_interopDefaultLegacy(ReactDOM$1);
var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var _Promise__default = /*#__PURE__*/_interopDefaultLegacy(_Promise);
var _findInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_findInstanceProperty);
var _Object$create__default = /*#__PURE__*/_interopDefaultLegacy(_Object$create);
var _Object$setPrototypeOf__default = /*#__PURE__*/_interopDefaultLegacy(_Object$setPrototypeOf);
var _Object$getPrototypeOf__default = /*#__PURE__*/_interopDefaultLegacy(_Object$getPrototypeOf);
var _Reflect$construct__default = /*#__PURE__*/_interopDefaultLegacy(_Reflect$construct);
var _bindInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_bindInstanceProperty);
var _everyInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_everyInstanceProperty);
var _JSON$stringify__default = /*#__PURE__*/_interopDefaultLegacy(_JSON$stringify);
var _parseInt__default = /*#__PURE__*/_interopDefaultLegacy(_parseInt);
var _keysInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_keysInstanceProperty);
var _reduceInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_reduceInstanceProperty);

function toVal(mix) {
  var k,
      y,
      str = '';

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
  } else if (_typeof__default['default'](mix) === 'object') {
    if (_Array$isArray__default['default'](mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += ' ');
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += ' ');
          str += k;
        }
      }
    }
  }

  return str;
}

function clsx () {
  var i = 0,
      tmp,
      x,
      str = '';

  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += ' ');
        str += x;
      }
    }
  }

  return str;
}

// https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
// useEventCallback issue: https://github.com/facebook/react/issues/14099
// React Hooks(二): useCallback 之痛 - 杨健 https://zhuanlan.zhihu.com/p/98554943
// Copy from
// https://github.com/formium/formik/blob/34a11422bf1619236bc9fdb1b7c4f0d285638702/packages/formik/src/Formik.tsx#L1182-L1205

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? React__default['default'].useLayoutEffect : React__default['default'].useEffect; // eslint-disable-next-line @typescript-eslint/no-explicit-any

function useEventCallback(fn) {
  var ref = React__default['default'].useRef(fn); // we copy a ref to the callback scoped to the current state/props on each render

  useIsomorphicLayoutEffect(function () {
    ref.current = fn;
  });
  return React__default['default'].useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ref.current.apply(void 0, args);
  }, []);
}

function ownKeys$5(object, enumerableOnly) { var keys = _Object$keys__default['default'](object); if (_Object$getOwnPropertySymbols__default['default']) { var symbols = _Object$getOwnPropertySymbols__default['default'](object); if (enumerableOnly) symbols = _filterInstanceProperty__default['default'](symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor__default['default'](object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty__default['default'](_context = ownKeys$5(Object(source), true)).call(_context, function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors__default['default']) { _Object$defineProperties__default['default'](target, _Object$getOwnPropertyDescriptors__default['default'](source)); } else { var _context2; _forEachInstanceProperty__default['default'](_context2 = ownKeys$5(Object(source))).call(_context2, function (key) { _Object$defineProperty__default['default'](target, key, _Object$getOwnPropertyDescriptor__default['default'](source, key)); }); } } return target; }

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
      className: clsx('sf-collapse-panel', className),
      ref: ref,
      style: _objectSpread$5(_objectSpread$5({}, {
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

function ownKeys$4(object, enumerableOnly) { var keys = _Object$keys__default['default'](object); if (_Object$getOwnPropertySymbols__default['default']) { var symbols = _Object$getOwnPropertySymbols__default['default'](object); if (enumerableOnly) symbols = _filterInstanceProperty__default['default'](symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor__default['default'](object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context6; _forEachInstanceProperty__default['default'](_context6 = ownKeys$4(Object(source), true)).call(_context6, function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors__default['default']) { _Object$defineProperties__default['default'](target, _Object$getOwnPropertyDescriptors__default['default'](source)); } else { var _context7; _forEachInstanceProperty__default['default'](_context7 = ownKeys$4(Object(source))).call(_context7, function (key) { _Object$defineProperty__default['default'](target, key, _Object$getOwnPropertyDescriptor__default['default'](source, key)); }); } } return target; }
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
  var register = useEventCallback(function () {
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
      active = _ref2.active;
  React__default['default'].Children.only(children);
  return /*#__PURE__*/React__default['default'].cloneElement(children, {
    className: clsx(children.props.className, active ? 'active' : ''),
    onClick: function onClick() {
      var _children$props$onCli, _children$props;

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
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].cloneElement(summary, _objectSpread$4(_objectSpread$4({}, summary.props), {}, {
    active: value.active
  })), /*#__PURE__*/React__default['default'].cloneElement(panel, _objectSpread$4(_objectSpread$4({}, panel.props), {}, {
    active: value.active
  })));
};

Collapse.Panel = CollapsePanel;
Collapse.Item = CollapseItem;
Collapse.Summary = CollapseSummary;

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
    className: clsx('st-spin-container', loading && 'st-spin-container--loading')
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

var Button = function Button(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      primary = _ref.primary,
      textual = _ref.textual,
      block = _ref.block,
      solid = _ref.solid,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      disabled = _ref.disabled,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties__default['default'](_ref, ["type", "primary", "textual", "block", "solid", "loading", "disabled", "children", "className"]);

  return /*#__PURE__*/React__default['default'].createElement("button", _extends__default['default']({
    type: type,
    className: clsx(className, 'st-button', primary ? 'st-button--primary' : textual ? 'st-button--textual' : 'st-button--default', block && 'st-button--block', loading && 'st-button--loading', solid && 'st-button--solid'),
    disabled: disabled || loading
  }, rest), /*#__PURE__*/React__default['default'].createElement(Spin, {
    weight: 1,
    loading: loading
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "st-button__content"
  }, children));
};

var Link = function Link(props) {
  var children = props.children,
      type = props.type,
      href = props.href,
      className = props.className,
      active = props.active,
      rest = _objectWithoutProperties__default['default'](props, ["children", "type", "href", "className", "active"]);

  return /*#__PURE__*/React__default['default'].createElement("a", _extends__default['default']({
    className: clsx(className, 'st-link', type === 'button' ? 'st-link--button' : 'st-link--default', active && 'st-link--active'),
    tabIndex: 0,
    href: href
  }, rest), /*#__PURE__*/React__default['default'].createElement("span", null, children));
};

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

function mitt (n) {
  return {
    all: n = n || new _Map__default['default'](),
    on: function on(t, e) {
      var i = n.get(t);
      i && i.push(e) || n.set(t, [e]);
    },
    off: function off(t, e) {
      var i = n.get(t);
      i && _spliceInstanceProperty__default['default'](i).call(i, _indexOfInstanceProperty__default['default'](i).call(i, e) >>> 0, 1);
    },
    emit: function emit(t, e) {
      var _context, _context2, _context3, _context4;

      _mapInstanceProperty__default['default'](_context = _sliceInstanceProperty__default['default'](_context2 = n.get(t) || []).call(_context2)).call(_context, function (n) {
        n(e);
      }), _mapInstanceProperty__default['default'](_context3 = _sliceInstanceProperty__default['default'](_context4 = n.get("*") || []).call(_context4)).call(_context3, function (n) {
        n(t, e);
      });
    }
  };
}

var Mitt = function Mitt() {
  return mitt();
};

var horizon = {
  remove: function remove(arr, cb) {
    var index = _findIndexInstanceProperty__default['default'](arr).call(arr, cb);

    if (index !== -1) {
      var _context;

      return _concatInstanceProperty__default['default'](_context = []).call(_context, _toConsumableArray__default['default'](_sliceInstanceProperty__default['default'](arr).call(arr, 0, index)), _toConsumableArray__default['default'](_sliceInstanceProperty__default['default'](arr).call(arr, index + 1, arr.length)));
    }

    return arr;
  }
};

function ownKeys$3(object, enumerableOnly) { var keys = _Object$keys__default['default'](object); if (_Object$getOwnPropertySymbols__default['default']) { var symbols = _Object$getOwnPropertySymbols__default['default'](object); if (enumerableOnly) symbols = _filterInstanceProperty__default['default'](symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor__default['default'](object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty__default['default'](_context2 = ownKeys$3(Object(source), true)).call(_context2, function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors__default['default']) { _Object$defineProperties__default['default'](target, _Object$getOwnPropertyDescriptors__default['default'](source)); } else { var _context3; _forEachInstanceProperty__default['default'](_context3 = ownKeys$3(Object(source))).call(_context3, function (key) { _Object$defineProperty__default['default'](target, key, _Object$getOwnPropertyDescriptor__default['default'](source, key)); }); } } return target; }
var registry = [];
var ModalMitt = Mitt();
ModalMitt.on('REGISTER', function (id) {
  var _context;

  return Modal.registry = registry = _concatInstanceProperty__default['default'](_context = []).call(_context, _toConsumableArray__default['default'](registry), [id]);
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
  var ecOnClose = useEventCallback(onClose || noop);
  React.useEffect(function () {
    var cb = function cb(i) {
      if (i == id) ecOnClose();
    };

    ModalMitt.on('REMOTE_CLOSE', cb);
    return function () {
      return ModalMitt.off('REMOTE_CLOSE', cb);
    };
  }, [ecOnClose, id]);
  return /*#__PURE__*/React__default['default'].createElement(Portal, null, /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.CSSTransition, {
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
    className: clsx('st-modal-wrap', !visible && 'st-not-interactive'),
    "aria-hidden": !visible,
    style: _objectSpread$3({
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
  }, title), closable ? /*#__PURE__*/React__default['default'].createElement(Button, {
    textual: true,
    className: "st-modal__close",
    onClick: visible ? onClose : undefined
  }, "\xD7") : null), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "st-modal__body"
  }, children)))));
};

Modal.Mitt = ModalMitt;
Modal.registry = registry;

function ownKeys$2(object, enumerableOnly) { var keys = _Object$keys__default['default'](object); if (_Object$getOwnPropertySymbols__default['default']) { var symbols = _Object$getOwnPropertySymbols__default['default'](object); if (enumerableOnly) symbols = _filterInstanceProperty__default['default'](symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor__default['default'](object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty__default['default'](_context = ownKeys$2(Object(source), true)).call(_context, function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors__default['default']) { _Object$defineProperties__default['default'](target, _Object$getOwnPropertyDescriptors__default['default'](source)); } else { var _context2; _forEachInstanceProperty__default['default'](_context2 = ownKeys$2(Object(source))).call(_context2, function (key) { _Object$defineProperty__default['default'](target, key, _Object$getOwnPropertyDescriptor__default['default'](source, key)); }); } } return target; }

var RowCreator = function RowCreator(displayName, defaultClassName) {
  var Row = function Row(_ref) {
    var children = _ref.children,
        reverse = _reverseInstanceProperty__default['default'](_ref),
        className = _ref.className,
        justify = _ref.justify,
        align = _ref.align,
        content = _ref.content,
        wrap = _ref.wrap,
        wrapReverse = _ref.wrapReverse,
        grow = _ref.grow,
        shrink = _ref.shrink,
        basis = _ref.basis,
        flex = _ref.flex,
        order = _ref.order,
        style = _ref.style;

    var classNames = clsx(reverse ? "".concat(className, "-reverse") : className, defaultClassName, justify && "justify-".concat(justify), align && "align-".concat(align), wrap && 'flex-wrap', wrapReverse && 'wrap-reverse', content && "align-content-".concat(content));
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: classNames,
      style: _objectSpread$2({
        flex: flex,
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
        order: order
      }, style)
    }, children);
  };

  Row.displayName = displayName;
  return Row;
};

var Row = _Object$assign__default['default'](RowCreator('Row', 'row'), {
  Col: RowCreator('Col', 'col')
});

var index = Row.Col;

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
  var remove = useEventCallback(function (id) {
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
  return /*#__PURE__*/React__default['default'].createElement(NotificationPortal, null, /*#__PURE__*/React__default['default'].createElement("div", null, _mapInstanceProperty__default['default'](notis).call(notis, function (value) {
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
  var close = useEventCallback(function () {
    setVisible([false, false]);

    _setTimeout__default['default'](function () {
      return remove(value.id);
    }, 300);
  });
  var handleMouseEnter = useEventCallback(function () {
    mouseLeaveToRemoveRef.current !== undefined && clearTimeout(mouseLeaveToRemoveRef.current);
  });
  var handleMouseLeave = useEventCallback(function () {
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
  }, /*#__PURE__*/React__default['default'].createElement(Collapse.Panel, {
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
  setup: function setup$1() {
    var starfallNotificationRoot = setup('Notification');

    if (!NotificationBoxMounted) {
      NotificationBoxMounted = true;
      ReactDOM__default$1['default'].render( /*#__PURE__*/React__default['default'].createElement(NotificationBox, null), starfallNotificationRoot);
    }
  }
};

var FormContext = /*#__PURE__*/React__default['default'].createContext({
  register: function register() {},
  unregister: function unregister() {},
  formMitt: {
    on: function on() {},
    off: function off() {},
    emit: function emit() {}
  }
});

function _extends() {
  _extends = _Object$assign__default['default'] || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = _Object$create__default['default'](superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = _Object$setPrototypeOf__default['default'] ? _Object$getPrototypeOf__default['default'] : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf__default['default'](o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _Object$setPrototypeOf__default['default'] || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct__default['default']) return false;
  if (_Reflect$construct__default['default'].sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct__default['default'](Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = _Reflect$construct__default['default'];
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);

      var Constructor = _bindInstanceProperty__default['default'](Function).apply(Parent, a);

      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  var _context;

  return _indexOfInstanceProperty__default['default'](_context = Function.toString.call(fn)).call(_context, "[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof _Map__default['default'] === "function" ? new _Map__default['default']() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = _Object$create__default['default'](Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}
/* eslint no-console:0 */


var formatRegExp = /%[sdj%]/g;

var warning = function warning() {}; // don't print warning message when in production env or node runtime


if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (_everyInstanceProperty__default['default'](errors).call(errors, function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};

  _forEachInstanceProperty__default['default'](errors).call(errors, function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });

  return fields;
}

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;

  if (typeof f === 'function') {
    return f.apply(null, _sliceInstanceProperty__default['default'](args).call(args, 1));
  }

  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return _JSON$stringify__default['default'](args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;
      }
    });
    return str;
  }

  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && _Array$isArray__default['default'](value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  _forEachInstanceProperty__default['default'](arr).call(arr, function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var _context2;

  var ret = [];

  _forEachInstanceProperty__default['default'](_context2 = _Object$keys__default['default'](objArr)).call(_context2, function (k) {
    ret.push.apply(ret, objArr[k]);
  });

  return ret;
}

var AsyncValidationError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(AsyncValidationError, _Error);

  function AsyncValidationError(errors, fields) {
    var _this;

    _this = _Error.call(this, 'Async Validation Error') || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }

  return AsyncValidationError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var _pending = new _Promise__default['default'](function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve();
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending["catch"](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields || [];

  if (firstFields === true) {
    firstFields = _Object$keys__default['default'](objArr);
  }

  var objArrKeys = _Object$keys__default['default'](objArr);

  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new _Promise__default['default'](function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve();
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve();
    }

    _forEachInstanceProperty__default['default'](objArrKeys).call(objArrKeys, function (key) {
      var arr = objArr[key];

      if (_indexOfInstanceProperty__default['default'](firstFields).call(firstFields, key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}

function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      field: oe.field || rule.fullField
    };
  };
}

function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (_typeof__default['default'](value) === 'object' && _typeof__default['default'](target[s]) === 'object') {
          target[s] = _extends(_extends({}, target[s]), value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}
/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}
/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}
/* eslint max-len:0 */


var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && _parseInt__default['default'](value, 10) === value;
  },
  "float": function _float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return _Array$isArray__default['default'](value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    return typeof value === 'number';
  },
  object: function object(value) {
    return _typeof__default['default'](value) === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};
/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (_indexOfInstanceProperty__default['default'](custom).call(custom, ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check

  } else if (ruleType && _typeof__default['default'](value) !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}
/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';

  var arr = _Array$isArray__default['default'](value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type


  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}

var ENUM = 'enum';
/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable(rule, value, source, errors, options) {
  var _context3;

  rule[ENUM] = _Array$isArray__default['default'](rule[ENUM]) ? rule[ENUM] : [];

  if (_indexOfInstanceProperty__default['default'](_context3 = rule[ENUM]).call(_context3, value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}
/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}

var rules = {
  required: required,
  whitespace: whitespace,
  type: type,
  range: range,
  "enum": enumerable,
  pattern: pattern$1
};
/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
}
/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}
/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}
/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}
/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}
/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}
/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}
/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((value === undefined || value === null) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (value !== undefined && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}
/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var ENUM$1 = 'enum';
/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable$1(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }

  callback(errors);
}
/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function pattern$2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

  if (validate) {
    if (isEmptyValue(value, 'date') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'date')) {
      var dateObject;

      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
}

function required$1(rule, value, callback, source, options) {
  var errors = [];
  var type = _Array$isArray__default['default'](value) ? 'array' : _typeof__default['default'](value);
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
}

function type$1(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}
/**
 *  Performs validation for any type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
}

var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable$1,
  pattern: pattern$2,
  date: date,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1,
  any: any
};

function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(_JSON$stringify__default['default'](this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}

var messages = newMessages();
/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (_typeof__default['default'](rules) !== 'object' || _Array$isArray__default['default'](rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    var z;
    var item;

    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = _Array$isArray__default['default'](item) ? item : [item];
      }
    }
  },
  validate: function validate(source_, o, oc) {
    var _this = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || _Object$keys__default['default'](this.rules).length === 0) {
      if (callback) {
        callback();
      }

      return _Promise__default['default'].resolve();
    }

    function complete(results) {
      var i;
      var errors = [];
      var fields = {};

      function add(e) {
        if (_Array$isArray__default['default'](e)) {
          var _errors;

          errors = _concatInstanceProperty__default['default'](_errors = errors).apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = convertFieldsError(errors);
      }

      callback(errors, fields);
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var arr;
    var value;
    var series = {};

    var keys = _keysInstanceProperty__default['default'](options) || _Object$keys__default['default'](this.rules);

    _forEachInstanceProperty__default['default'](keys).call(keys, function (z) {
      arr = _this.rules[z];
      value = source[z];

      _forEachInstanceProperty__default['default'](arr).call(arr, function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }

        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);

        if (!rule.validator) {
          return;
        }

        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });

    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (_typeof__default['default'](rule.fields) === 'object' || _typeof__default['default'](rule.defaultField) === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullfield(key, schema) {
        return _extends(_extends({}, schema), {}, {
          fullField: rule.fullField + "." + key
        });
      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errors = e;

        if (!_Array$isArray__default['default'](errors)) {
          errors = [errors];
        }

        if (!options.suppressWarning && errors.length) {
          Schema.warning('async-validator:', errors);
        }

        if (errors.length && rule.message !== undefined) {
          var _context4;

          errors = _concatInstanceProperty__default['default'](_context4 = []).call(_context4, rule.message);
        }

        errors = _mapInstanceProperty__default['default'](errors).call(errors, complementError(rule));

        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }

        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message !== undefined) {
              var _context5, _context6;

              errors = _mapInstanceProperty__default['default'](_context5 = _concatInstanceProperty__default['default'](_context6 = []).call(_context6, rule.message)).call(_context5, complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            }

            return doIt(errors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }

          fieldsSchema = _extends(_extends({}, fieldsSchema), data.rule.fields);

          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = _Array$isArray__default['default'](fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = _mapInstanceProperty__default['default'](fieldSchema).call(fieldSchema, _bindInstanceProperty__default['default'](addFullfield).call(addFullfield, null, f));
            }
          }

          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || rule.field + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = _Object$keys__default['default'](rule);

    var messageIndex = _indexOfInstanceProperty__default['default'](keys).call(keys, 'message');

    if (messageIndex !== -1) {
      _spliceInstanceProperty__default['default'](keys).call(keys, messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || false;
  }
};

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  validators[type] = validator;
};

Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;

function ownKeys$1(object, enumerableOnly) { var keys = _Object$keys__default['default'](object); if (_Object$getOwnPropertySymbols__default['default']) { var symbols = _Object$getOwnPropertySymbols__default['default'](object); if (enumerableOnly) symbols = _filterInstanceProperty__default['default'](symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor__default['default'](object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty__default['default'](_context2 = ownKeys$1(Object(source), true)).call(_context2, function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors__default['default']) { _Object$defineProperties__default['default'](target, _Object$getOwnPropertyDescriptors__default['default'](source)); } else { var _context3; _forEachInstanceProperty__default['default'](_context3 = ownKeys$1(Object(source))).call(_context3, function (key) { _Object$defineProperty__default['default'](target, key, _Object$getOwnPropertyDescriptor__default['default'](source, key)); }); } } return target; }

function setProp(obj, pathes, value) {
  var ans = _objectSpread$1({}, obj); // answer
  // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var curr = ans; // an cursor to walk deep into the obj

  var i = 0;

  for (; i < pathes.length - 1; i++) {
    var path = pathes[i];
    var next = curr[path];

    if (_Array$isArray__default['default'](next)) {
      curr = curr[path] = _toConsumableArray__default['default'](next);
    } else if (_typeof__default['default'](next) === 'object') {
      curr = curr[path] = _objectSpread$1({}, next);
    } else {
      var _context;

      throw new Error(_concatInstanceProperty__default['default'](_context = "[ST form] cannot get prop on ".concat(obj, " by [")).call(_context, pathes.join(' '), "]"));
    }
  }

  curr[pathes[i]] = value;
  return ans;
}
/**
 * field value is not initialized
 * or it's parent value has been removed cause we cannot find the value
 * but we could know that this form item is stale.
 */

var UNDEFINED_VALUE = {};
function getProp(obj, pathes) {
  return _reduceInstanceProperty__default['default'](pathes).call(pathes, function (tempObj, k) {
    if (k in tempObj) {
      return tempObj[k];
    } else {
      return UNDEFINED_VALUE;
    }
  }, obj);
}

function ownKeys(object, enumerableOnly) { var keys = _Object$keys__default['default'](object); if (_Object$getOwnPropertySymbols__default['default']) { var symbols = _Object$getOwnPropertySymbols__default['default'](object); if (enumerableOnly) symbols = _filterInstanceProperty__default['default'](symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor__default['default'](object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context3; _forEachInstanceProperty__default['default'](_context3 = ownKeys(Object(source), true)).call(_context3, function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors__default['default']) { _Object$defineProperties__default['default'](target, _Object$getOwnPropertyDescriptors__default['default'](source)); } else { var _context4; _forEachInstanceProperty__default['default'](_context4 = ownKeys(Object(source))).call(_context4, function (key) { _Object$defineProperty__default['default'](target, key, _Object$getOwnPropertyDescriptor__default['default'](source, key)); }); } } return target; }

var FormItem = function FormItem(_ref) {
  var _context2;

  var _ref$rules = _ref.rules,
      rules = _ref$rules === void 0 ? [] : _ref$rules,
      label = _ref.label,
      name = _ref.name,
      children = _ref.children;

  var _useContext = React.useContext(FormContext),
      register = _useContext.register,
      unregister = _useContext.unregister,
      formMitt = _useContext.formMitt;

  var mounted = reactUse.useMountedState();

  var _useState = React.useState({
    model: UNDEFINED_VALUE,
    validateStatus: {
      state: '',
      message: ''
    }
  }),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var validating = React.useRef(false);
  var value = state.model;
  var validateStatus = state.validateStatus;
  var pathes = React.useMemo(function () {
    return name.replace(/\[(\w+)\]/g, '.$1').split('.');
  }, [name]);
  var setValidateStatus = React.useCallback(function (validateStatusParam) {
    if (mounted()) if (typeof validateStatusParam === 'string') {
      setState(function (state) {
        if (state.validateStatus.state === '') {
          return state;
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          validateStatus: {
            state: validateStatusParam,
            message: state.validateStatus.message
          }
        });
      });
    } else {
      setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          validateStatus: validateStatusParam
        });
      });
    }
  }, [mounted]);
  var validateKey = React.useRef(0);
  var nextTickToValidate = React.useRef(false);
  var cancelValidate = React.useCallback(function () {
    return ++validateKey.current;
  }, []);

  var _validate = useEventCallback( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee(method) {
      var fixedRules, validator, key;
      return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fixedRules = _Array$isArray__default['default'](rules) ? rules : [rules];

              if (fixedRules.length) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              validator = new Schema(_defineProperty__default['default']({}, name, fixedRules));

              if (!(method === 'change' && validating.current)) {
                _context.next = 7;
                break;
              }

              nextTickToValidate.current = true;
              return _context.abrupt("return");

            case 7:
              if (method === 'force') {
                nextTickToValidate.current = false;
              }

              key = ++validateKey.current;
              _context.prev = 9;
              validating.current = true;
              _context.next = 13;
              return validator.validate(_defineProperty__default['default']({}, name, value), {
                firstFields: true
              });

            case 13:
              if (key === validateKey.current) {
                setValidateStatus('');
              }

              _context.next = 22;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](9);

              if (!(key === validateKey.current)) {
                _context.next = 22;
                break;
              }

              setValidateStatus({
                state: 'error',
                message: _context.t0.errors[0].message
              });

              if (!(method === 'force')) {
                _context.next = 22;
                break;
              }

              throw _context.t0;

            case 22:
              _context.prev = 22;

              // consume validate callbacks when this validation finished
              // this is not duplicated with the useEffect below, because we may
              // not call setState to trigger rerender in setValidateStatus.
              if (key === validateKey.current) {
                validating.current = false;

                if (nextTickToValidate.current === true) {
                  nextTickToValidate.current = false;

                  _validate('change');
                }
              }

              return _context.finish(22);

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[9, 16, 22, 25]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());

  React.useEffect(function () {
    var handleUpdate = function handleUpdate(_ref3) {
      var formValue = _ref3.value,
          triggerPathes = _ref3.pathes;
      var newValue = getProp(formValue, pathes); // immutablility makes all changes will change the root object
      // if this is a `parent form item` and has `child form items`
      // and the child form items changed their `deep data`
      // we don't re-render this item, it will
      // rerender automatically as long as parent rerenders
      // because we are using `render props` to render child base on parent
      // in some edge case we want get the child data and display them in parent item
      // we passing the parent's onChange to child item instead of it's own

      if (triggerPathes.length <= pathes.length) {
        if (state.model !== newValue) {
          // state has been updated, cause a rerender in which we validate the new value in useEffect.
          setState(function (state) {
            return _objectSpread(_objectSpread({}, state), {}, {
              model: newValue
            });
          });
          nextTickToValidate.current = true;
        }
      }
    };

    formMitt.on('UPDATE', handleUpdate);
    return function () {
      formMitt.off('UPDATE', handleUpdate);
    };
  }, [formMitt, pathes, state.model]);
  React.useEffect(function () {
    if (nextTickToValidate.current === true) {
      nextTickToValidate.current = false;

      _validate('change');
    }
  });
  var reset = React.useCallback(function (value) {
    setValidateStatus('');
    cancelValidate();
    setState(function (state) {
      return _objectSpread(_objectSpread({}, state), {}, {
        model: value
      });
    });
  }, [cancelValidate, setValidateStatus]);
  React.useEffect(function () {
    var v = {
      name: name,
      pathes: pathes,
      validate: function validate() {
        return _validate('force');
      },
      setValidateStatus: setValidateStatus,
      cancelValidate: cancelValidate,
      reset: reset
    };
    register(v);
    return function () {
      return unregister(v);
    };
  }, [register, unregister, name, _validate, cancelValidate, setValidateStatus, pathes, reset]);
  var onChange = React.useCallback(function (value) {
    formMitt.emit('CHANGE', {
      pathes: pathes,
      value: value
    });
  }, [formMitt, pathes]);
  var asterisk = !!_findInstanceProperty__default['default'](_context2 = _Array$isArray__default['default'](rules) ? rules : [rules]).call(_context2, function (r) {
    return r.required;
  }) && 'st-label-asterisk';
  var errorMessageNode = validateStatus.message ? /*#__PURE__*/React__default['default'].createElement("span", {
    className: "st-error-message"
  }, validateStatus.message) : /*#__PURE__*/React__default['default'].createElement("span", {
    className: "st-error-message"
  }, "\xA0");

  var withLabel = function withLabel(children) {
    return label ? /*#__PURE__*/React__default['default'].createElement("div", {
      className: clsx('st-form-item', validateStatus.state === 'error' && 'st-form-item--error')
    }, /*#__PURE__*/React__default['default'].createElement("label", null, /*#__PURE__*/React__default['default'].createElement("span", {
      className: clsx('st-label', asterisk)
    }, label), children), errorMessageNode) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, children);
  };

  if (value === UNDEFINED_VALUE) {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null);
  }

  var childNode = null;

  if ( /*#__PURE__*/React__default['default'].isValidElement(children)) {
    if ('value' in children.props) {
      throw new Error('[ST Form.Item] remove prop `value` from input inside a form item');
    }

    if ('onChange' in children.props) {
      throw new Error('[ST Form.Item] remove prop `onChange` from input inside a form item');
    }

    childNode = withLabel( /*#__PURE__*/React__default['default'].cloneElement(children, _objectSpread(_objectSpread({}, children.props), {}, {
      value: value,
      onChange: onChange
    })));
  } else if (typeof children === 'function') {
    childNode = children({
      value: value,
      onChange: onChange,
      validate: _validate,
      withLabel: withLabel,
      validateStatus: validateStatus,
      setValidateStatus: setValidateStatus,
      cancelValidate: cancelValidate
    });
  }

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, childNode);
};

var _Form = function _Form(props, ref) {
  if (props.action && props.onSubmit || !props.action && !props.onSubmit) {
    throw new Error('[ST form] prop `action` and `onSubmit` conflicts or not be provided');
  }

  var initialValue = React.useRef(props.initialValue);
  var valueRef = React.useRef(initialValue.current);

  var _useState = React.useState(function () {
    return Mitt();
  }),
      _useState2 = _slicedToArray__default['default'](_useState, 1),
      formMitt = _useState2[0]; // using Map will make things complicated because map could not support `multiple same name` without using array


  var items = React.useRef([]);
  reactUse.useMount(function () {
    formMitt.on('CHANGE', function (_ref) {
      var pathes = _ref.pathes,
          propValue = _ref.value;
      valueRef.current = setProp(valueRef.current, pathes, propValue);
      formMitt.emit('UPDATE', {
        value: valueRef.current,
        pathes: pathes
      });
    });
  });
  var register = useEventCallback(function (i) {
    var _context;

    items.current = _concatInstanceProperty__default['default'](_context = []).call(_context, _toConsumableArray__default['default'](items.current), [i]);
    i.reset(getProp(valueRef.current, i.pathes));
  });
  var unregister = React.useCallback(function (i) {
    var _context2;

    var index = _findIndexInstanceProperty__default['default'](_context2 = items.current).call(_context2, function (k) {
      return k === i;
    });

    if (index !== -1) {
      var _context3, _context4, _context5;

      items.current = _concatInstanceProperty__default['default'](_context3 = []).call(_context3, _toConsumableArray__default['default'](_sliceInstanceProperty__default['default'](_context4 = items.current).call(_context4, 0, index)), _toConsumableArray__default['default'](_sliceInstanceProperty__default['default'](_context5 = items.current).call(_context5, index + 1)));
    }
  }, []);
  var validate = useEventCallback( /*#__PURE__*/_asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee() {
    var _context6;

    var names,
        i,
        t,
        errors,
        value,
        _args = arguments;
    return _regeneratorRuntime__default['default'].wrap(function _callee$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            names = _args.length > 0 && _args[0] !== undefined ? _args[0] : [];
            i = names.length ? _filterInstanceProperty__default['default'](_context6 = items.current).call(_context6, function (_ref3) {
              var name = _ref3.name;
              return _includesInstanceProperty__default['default'](names).call(names, name);
            }) : items.current;
            t = 0;
            errors = [];
            value = valueRef.current;
            return _context7.abrupt("return", new _Promise__default['default'](function (resolve, reject) {
              var callback = function callback(e) {
                if (e) {
                  errors.push.apply(errors, _toConsumableArray__default['default'](e.errors));
                }

                if (++t === i.length) {
                  if (errors.length) {
                    reject(errors);
                  }

                  resolve(value);
                }

                return;
              };

              _mapInstanceProperty__default['default'](i).call(i, function (item) {
                return item.validate().then(function () {
                  return callback();
                }, callback);
              });
            }));

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee);
  })));
  var reset = useEventCallback( /*#__PURE__*/_asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee2() {
    var _context8;

    var names,
        i,
        _args2 = arguments;
    return _regeneratorRuntime__default['default'].wrap(function _callee2$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            names = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : [];
            i = names.length ? _filterInstanceProperty__default['default'](_context8 = items.current).call(_context8, function (_ref5) {
              var name = _ref5.name;
              return _includesInstanceProperty__default['default'](names).call(names, name);
            }) : items.current;

            _forEachInstanceProperty__default['default'](i).call(i, function (item) {
              var i = getProp(initialValue.current, item.pathes);
              item.reset(i);
              valueRef.current = setProp(valueRef.current, item.pathes, i);
            });

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee2);
  })));
  var setValidateStatus = React.useCallback(function (name, validateStatus) {
    var _context10;

    var i = _filterInstanceProperty__default['default'](_context10 = items.current).call(_context10, function (_ref6) {
      var _ = _ref6.name;
      return _ === name;
    });

    _forEachInstanceProperty__default['default'](i).call(i, function (item) {
      item.setValidateStatus(validateStatus);
    });
  }, []);
  var set = React.useCallback(function (callback) {
    formMitt.emit('UPDATE', {
      value: valueRef.current = callback(valueRef.current),
      pathes: []
    });
  }, [formMitt]);
  var formContextValue = React.useMemo(function () {
    return {
      register: register,
      unregister: unregister,
      formMitt: formMitt
    };
  }, [register, unregister, formMitt]);
  React.useImperativeHandle(ref, function () {
    return {
      setInitialValue: function setInitialValue(v) {
        initialValue.current = v;
      },
      validate: validate,
      setValidateStatus: setValidateStatus,
      set: set,

      get value() {
        return valueRef.current;
      },

      reset: reset
    };
  }, [validate, setValidateStatus, set, reset]);
  var submitting = React.useRef(false);
  var handleSubmit = useEventCallback( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee3(e) {
      var _ref8, _ref9, successAction, failedAction, v, _props$onSubmit;

      return _regeneratorRuntime__default['default'].wrap(function _callee3$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              e.preventDefault();

              if (!props.action) {
                _context11.next = 28;
                break;
              }

              if (!submitting.current) {
                _context11.next = 4;
                break;
              }

              return _context11.abrupt("return");

            case 4:
              // internal submit
              _ref8 = _Array$isArray__default['default'](props.action) ? props.action : [props.action, function () {}], _ref9 = _slicedToArray__default['default'](_ref8, 2), successAction = _ref9[0], failedAction = _ref9[1];
              formMitt.emit('SUBMITTING_CHANGE', submitting.current = true);
              v = valueRef.current;
              _context11.prev = 7;
              _context11.next = 10;
              return validate();

            case 10:
              _context11.prev = 10;
              _context11.next = 13;
              return successAction(v);

            case 13:
              _context11.next = 18;
              break;

            case 15:
              _context11.prev = 15;
              _context11.t0 = _context11["catch"](10);

            case 18:
              _context11.next = 23;
              break;

            case 20:
              _context11.prev = 20;
              _context11.t1 = _context11["catch"](7);
              failedAction(_context11.t1);

            case 23:
              _context11.prev = 23;
              formMitt.emit('SUBMITTING_CHANGE', submitting.current = false);
              return _context11.finish(23);

            case 26:
              _context11.next = 29;
              break;

            case 28:
              // external submit
              (_props$onSubmit = props.onSubmit) === null || _props$onSubmit === void 0 ? void 0 : _props$onSubmit.call(props);

            case 29:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee3, null, [[7, 20, 23, 26], [10, 15]]);
    }));

    return function (_x) {
      return _ref7.apply(this, arguments);
    };
  }());
  return /*#__PURE__*/React__default['default'].createElement("form", {
    onSubmit: handleSubmit,
    onReset: function onReset(e) {
      e.preventDefault();
      reset();
    }
  }, /*#__PURE__*/React__default['default'].createElement(FormContext.Provider, {
    value: formContextValue
  }, props.children));
};

_Form.displayName = 'Form';

var FormSubmitButton = function FormSubmitButton(props) {
  var _useContext = React.useContext(FormContext),
      formMitt = _useContext.formMitt;

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
      submitting = _useState4[0],
      setSubmitting = _useState4[1];

  React.useEffect(function () {
    formMitt.on('SUBMITTING_CHANGE', setSubmitting);
    return function () {
      return formMitt.off('SUBMITTING_CHANGE', setSubmitting);
    };
  }, [formMitt]);
  return /*#__PURE__*/React__default['default'].createElement(Button, _extends__default['default']({}, props, {
    type: "submit",
    loading: props.loading || submitting
  }));
};

var Form = _Object$assign__default['default']( /*#__PURE__*/React__default['default'].forwardRef(_Form), {
  Item: FormItem,
  SubmitButton: FormSubmitButton,
  useRef: function useRef() {
    return React__default['default'].useRef(null);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any

});

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

exports.Button = Button;
exports.Col = index;
exports.Collapse = Collapse;
exports.Form = Form;
exports.Input = Input;
exports.Link = Link;
exports.Modal = Modal;
exports.Notification = Notification;
exports.Row = Row;
exports.Spin = Spin;
