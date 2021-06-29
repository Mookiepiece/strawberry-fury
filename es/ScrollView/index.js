import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import _includesInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/includes';
import _concatInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/concat';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { c as clsx } from '../clsx.m-7e9a4a81.js';
import { useEventCallback } from '../_utils/useEventCallback';
import Mitt from '../_utils/mitt';
import '@babel/runtime-corejs3/helpers/typeof';
import '@babel/runtime-corejs3/core-js-stable/array/is-array';

var ScrollView = function ScrollView(_ref) {
  var children = _ref.children,
      wrapStyle = _ref.wrapStyle;
  var containerRef = useRef(null);
  var wrapRef = useRef(null);

  var _useState = useState(Mitt),
      _useState2 = _slicedToArray(_useState, 1),
      mitt = _useState2[0];

  var handleScroll = useCallback(function () {
    if (!containerRef.current) return;
    mitt.emit('SCROLL', [containerRef.current.scrollLeft * 100 / containerRef.current.clientWidth, containerRef.current.scrollTop * 100 / containerRef.current.clientHeight]);
  }, [mitt]);
  useEffect(function () {
    if (!containerRef.current) return;
    var div = containerRef.current;

    var update = function update() {
      if (!containerRef.current) return;
      var heightPercentage = containerRef.current.clientHeight * 100 / containerRef.current.scrollHeight;
      var widthPercentage = containerRef.current.clientWidth * 100 / containerRef.current.scrollWidth;
      mitt.emit('RESIZE', [widthPercentage < 100 ? widthPercentage + '%' : '', heightPercentage < 100 ? heightPercentage + '%' : '']);
    };

    update();
    var ro = new ResizeObserver(function () {
      // resize observer's entries (contentBoxSize etc) is not stable. from my test.
      update();
    });
    ro.observe(div);
    return function () {
      ro.unobserve(div);
    };
  }, [mitt]);
  return /*#__PURE__*/React.createElement("div", {
    className: "st-scroll-view-wrap",
    style: wrapStyle,
    ref: wrapRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-scroll-view",
    ref: containerRef,
    onScroll: handleScroll
  }, children), /*#__PURE__*/React.createElement(Scrollbar, {
    containerRef: containerRef,
    wrapRef: wrapRef,
    mitt: mitt
  }), /*#__PURE__*/React.createElement(Scrollbar, {
    vertical: true,
    containerRef: containerRef,
    wrapRef: wrapRef,
    mitt: mitt
  }));
};

// https://github.com/element-plus/element-plus/blob/a57727bfa41943bc4bf81a2bc31d6895362b5077/packages/scrollbar/src/util.ts#L1
var BAR_MAP = {
  vertical: {
    offsetSize: 'offsetHeight',
    scrollValue: 'scrollTop',
    scrollSize: 'scrollHeight',
    size: 'height',
    axis: 'Y',
    mouseEventClientValue: 'clientY',
    clientRectStart: 'top'
  },
  horizontal: {
    offsetSize: 'offsetWidth',
    scrollValue: 'scrollLeft',
    scrollSize: 'scrollWidth',
    size: 'width',
    axis: 'X',
    mouseEventClientValue: 'clientX',
    clientRectStart: 'left'
  }
};

var Scrollbar = function Scrollbar(_ref2) {
  var vertical = _ref2.vertical,
      mitt = _ref2.mitt,
      containerRef = _ref2.containerRef,
      wrapRef = _ref2.wrapRef;
  var xy = BAR_MAP[vertical ? 'vertical' : 'horizontal'];

  var _useState3 = useState('0'),
      _useState4 = _slicedToArray(_useState3, 2),
      size = _useState4[0],
      setSize = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      move = _useState6[0],
      setMove = _useState6[1];

  useEffect(function () {
    var index = vertical ? 1 : 0;
    mitt.on('RESIZE', function (e) {
      return setSize(e[index]);
    });
    mitt.on('SCROLL', function (e) {
      return setMove(e[index]);
    });
  }, [mitt, vertical]); // dragging the thumb will prevent the bar from disappear until mouseup so we use js instead of css hover
  // this is complex but worth it because I just do copy those code from element-plus.

  var cursorDown = useRef(false);
  var cursorLeave = useRef(false);

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      visible = _useState8[0],
      setVisible = _useState8[1];

  var show = useCallback(function () {
    !visible && setVisible(true);
  }, [visible]);
  var hide = useCallback(function () {
    visible && setVisible(false);
  }, [visible]);
  var thumbRef = useRef(null);
  var barRef = useRef(null);
  var startDrag = useCallback(function (e, thumbMouseOffset) {
    if (!thumbRef.current) return;
    cursorDown.current = true;

    var handleDocumentMouseMove = function handleDocumentMouseMove(e) {
      if (!barRef.current) return;
      if (!containerRef.current) return;
      var offset = e[xy.mouseEventClientValue] - barRef.current.getBoundingClientRect()[xy.clientRectStart];
      var scrolledPercentage = (offset - thumbMouseOffset) * 100 / barRef.current[xy.offsetSize];
      containerRef.current[xy.scrollValue] = scrolledPercentage / 100 * containerRef.current[xy.scrollSize];
    };

    var handleDocumentMouseUp = function handleDocumentMouseUp(e) {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
      document.removeEventListener('mouseup', handleDocumentMouseUp);
      cursorDown.current = false;

      if (cursorLeave.current) {
        hide();
      }
    };

    document.addEventListener('mousemove', handleDocumentMouseMove);
    document.addEventListener('mouseup', handleDocumentMouseUp);
  }, [xy.offsetSize, xy.mouseEventClientValue, xy.clientRectStart, xy.scrollValue, xy.scrollSize, containerRef, hide]);
  var handleThumbMouseDown = useEventCallback(function (e) {
    var _context;

    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();

    if (e.ctrlKey || _includesInstanceProperty(_context = [1, 2]).call(_context, e.button)) {
      return;
    }

    if (!thumbRef.current) return;
    var thumbMouseOffset = e[xy.mouseEventClientValue] - thumbRef.current.getBoundingClientRect()[xy.clientRectStart];
    startDrag(e, thumbMouseOffset);
  });
  var handleBarMouseDown = useEventCallback(function (e) {
    var _context2;

    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation(); // middle click and right click won't trigger drag

    if (e.ctrlKey || _includesInstanceProperty(_context2 = [1, 2]).call(_context2, e.button)) {
      return;
    }

    if (!barRef.current) return;
    if (!thumbRef.current) return;
    if (!containerRef.current) return;
    var thumbHalf = thumbRef.current[xy.offsetSize] / 2;
    var offset = e[xy.mouseEventClientValue] - barRef.current.getBoundingClientRect()[xy.clientRectStart] - thumbHalf;
    var thumbPositionPercentage = offset * 100 / containerRef.current[xy.offsetSize];
    containerRef.current[xy.scrollValue] = thumbPositionPercentage * containerRef.current[xy.scrollSize] / 100;
    if (!thumbRef.current) return;
    var thumbMouseOffset = thumbHalf;
    startDrag(e, thumbMouseOffset);
  });
  useEffect(function () {
    var handleWrapMouseMove = function handleWrapMouseMove() {
      cursorLeave.current = false;
      show();
    };

    var handleWrapMouseLeave = function handleWrapMouseLeave() {
      cursorLeave.current = true;
      setVisible(cursorDown.current);
    };

    if (!wrapRef.current) return;
    var wrap = wrapRef.current;
    wrap.addEventListener('mousemove', handleWrapMouseMove);
    wrap.addEventListener('mouseleave', handleWrapMouseLeave);
    return function () {
      wrap.removeEventListener('mousemove', handleWrapMouseMove);
      wrap.removeEventListener('mouseleave', handleWrapMouseLeave);
    };
  }, [show, wrapRef]);
  var style = renderThumbStyle({
    size: size,
    move: move,
    xy: xy
  });
  return /*#__PURE__*/React.createElement("div", {
    onMouseDown: handleBarMouseDown,
    className: clsx('st-scrollbar', vertical ? 'st-scrollbar--vertical' : 'st-scrollbar--horizontal', visible && 'st-scrollbar--visible'),
    ref: barRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-scrollbar__thumb",
    style: style,
    onMouseDown: handleThumbMouseDown,
    ref: thumbRef
  }));
};

function renderThumbStyle(_ref3) {
  var _context3, _ref4;

  var move = _ref3.move,
      size = _ref3.size,
      xy = _ref3.xy;

  var translate = _concatInstanceProperty(_context3 = "translate".concat(xy.axis, "(")).call(_context3, move, "%)");

  return _ref4 = {}, _defineProperty(_ref4, xy.size, size), _defineProperty(_ref4, "transform", translate), _ref4;
}

export default ScrollView;
