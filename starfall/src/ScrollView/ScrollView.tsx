import React, { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useEventCallback, Mitt } from '@mookiepiece/starfall-utils';
import type { Emitter } from '@mookiepiece/starfall-utils';

type ScrollViewMitt = Emitter<{
  SCROLL: [number, number];
  RESIZE: [string, string];
}>;

type ScrollViewProps = {
  wrapStyle?: React.CSSProperties;
};

const ScrollView: React.FC<ScrollViewProps> = ({ children, wrapStyle }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const [mitt] = useState<ScrollViewMitt>(Mitt);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    mitt.emit('SCROLL', [
      (containerRef.current.scrollLeft * 100) / containerRef.current.clientWidth,
      (containerRef.current.scrollTop * 100) / containerRef.current.clientHeight,
    ]);
  }, [mitt]);

  useEffect(() => {
    if (!containerRef.current) return;
    const div = containerRef.current;
    const update = () => {
      if (!containerRef.current) return;
      const heightPercentage =
        (containerRef.current.clientHeight * 100) / containerRef.current.scrollHeight;
      const widthPercentage =
        (containerRef.current.clientWidth * 100) / containerRef.current.scrollWidth;

      mitt.emit('RESIZE', [
        widthPercentage < 100 ? widthPercentage + '%' : '',
        heightPercentage < 100 ? heightPercentage + '%' : '',
      ]);
    };
    update();
    const ro = new ResizeObserver(() => {
      // resize observer's entries (contentBoxSize etc) is not stable. from my test.
      update();
    });
    ro.observe(div);
    return () => {
      ro.unobserve(div);
    };
  }, [mitt]);

  return (
    <div className="st-scroll-view-wrap" style={wrapStyle} ref={wrapRef}>
      <div className="st-scroll-view" ref={containerRef} onScroll={handleScroll}>
        {children}
      </div>
      <Scrollbar containerRef={containerRef} wrapRef={wrapRef} mitt={mitt} />
      <Scrollbar vertical containerRef={containerRef} wrapRef={wrapRef} mitt={mitt} />
    </div>
  );
};

type Direction = {
  offsetSize: 'offsetHeight' | 'offsetWidth';
  scrollValue: 'scrollTop' | 'scrollLeft';
  scrollSize: 'scrollHeight' | 'scrollWidth';
  size: 'height' | 'width';
  axis: 'X' | 'Y';
  mouseEventClientValue: 'clientY' | 'clientX';
  clientRectStart: 'top' | 'left';
};
// https://github.com/element-plus/element-plus/blob/a57727bfa41943bc4bf81a2bc31d6895362b5077/packages/scrollbar/src/util.ts#L1
const BAR_MAP = {
  vertical: {
    offsetSize: 'offsetHeight',
    scrollValue: 'scrollTop',
    scrollSize: 'scrollHeight',
    size: 'height',
    axis: 'Y',
    mouseEventClientValue: 'clientY',
    clientRectStart: 'top',
  } as Direction,
  horizontal: {
    offsetSize: 'offsetWidth',
    scrollValue: 'scrollLeft',
    scrollSize: 'scrollWidth',
    size: 'width',
    axis: 'X',
    mouseEventClientValue: 'clientX',
    clientRectStart: 'left',
  } as Direction,
};

type ScrollbarProps = {
  vertical?: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
  wrapRef: React.RefObject<HTMLDivElement>;
  mitt: ScrollViewMitt;
};

const Scrollbar: React.FC<ScrollbarProps> = ({ vertical, mitt, containerRef, wrapRef }) => {
  const xy: Direction = BAR_MAP[vertical ? 'vertical' : 'horizontal'];

  const [size, setSize] = useState('0');
  const [move, setMove] = useState(0);

  useEffect(() => {
    const index = vertical ? 1 : 0;
    mitt.on('RESIZE', e => setSize(e[index]));
    mitt.on('SCROLL', e => setMove(e[index]));
  }, [mitt, vertical]);

  // dragging the thumb will prevent the bar from disappear until mouseup so we use js instead of css hover
  // this is complex but worth it because I just do copy those code from element-plus.
  const cursorDown = useRef(false);
  const cursorLeave = useRef(false);
  const [visible, setVisible] = useState(false);
  const show = useCallback(() => {
    !visible && setVisible(true);
  }, [visible]);
  const hide = useCallback(() => {
    visible && setVisible(false);
  }, [visible]);

  const thumbRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const startDrag = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, thumbMouseOffset: number) => {
      if (!thumbRef.current) return;

      cursorDown.current = true;

      const handleDocumentMouseMove = (e: MouseEvent) => {
        if (!barRef.current) return;
        if (!containerRef.current) return;

        const offset =
          e[xy.mouseEventClientValue] - barRef.current.getBoundingClientRect()[xy.clientRectStart];

        const scrolledPercentage =
          ((offset - thumbMouseOffset) * 100) / barRef.current[xy.offsetSize];
        containerRef.current[xy.scrollValue] =
          (scrolledPercentage / 100) * containerRef.current[xy.scrollSize];
      };

      const handleDocumentMouseUp = (e: Event) => {
        document.removeEventListener('mousemove', handleDocumentMouseMove);
        document.removeEventListener('mouseup', handleDocumentMouseUp);

        cursorDown.current = false;
        if (cursorLeave.current) {
          hide();
        }
      };

      document.addEventListener('mousemove', handleDocumentMouseMove);
      document.addEventListener('mouseup', handleDocumentMouseUp);
    },
    [
      xy.offsetSize,
      xy.mouseEventClientValue,
      xy.clientRectStart,
      xy.scrollValue,
      xy.scrollSize,
      containerRef,
      hide,
    ]
  );

  const handleThumbMouseDown = useEventCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    if (e.ctrlKey || [1, 2].includes(e.button)) {
      return;
    }

    if (!thumbRef.current) return;
    const thumbMouseOffset =
      e[xy.mouseEventClientValue] - thumbRef.current.getBoundingClientRect()[xy.clientRectStart];
    startDrag(e, thumbMouseOffset);
  });

  const handleBarMouseDown = useEventCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    // middle click and right click won't trigger drag
    if (e.ctrlKey || [1, 2].includes(e.button)) {
      return;
    }

    if (!barRef.current) return;
    if (!thumbRef.current) return;
    if (!containerRef.current) return;

    const thumbHalf = thumbRef.current[xy.offsetSize] / 2;
    const offset =
      e[xy.mouseEventClientValue] -
      barRef.current.getBoundingClientRect()[xy.clientRectStart] -
      thumbHalf;

    const thumbPositionPercentage = (offset * 100) / containerRef.current[xy.offsetSize];

    containerRef.current[xy.scrollValue] =
      (thumbPositionPercentage * containerRef.current[xy.scrollSize]) / 100;

    if (!thumbRef.current) return;
    const thumbMouseOffset = thumbHalf;
    startDrag(e, thumbMouseOffset);
  });

  useEffect(() => {
    const handleWrapMouseMove = () => {
      cursorLeave.current = false;
      show();
    };

    const handleWrapMouseLeave = () => {
      cursorLeave.current = true;
      setVisible(cursorDown.current);
    };

    if (!wrapRef.current) return;
    const wrap = wrapRef.current;

    wrap.addEventListener('mousemove', handleWrapMouseMove);
    wrap.addEventListener('mouseleave', handleWrapMouseLeave);

    return () => {
      wrap.removeEventListener('mousemove', handleWrapMouseMove);
      wrap.removeEventListener('mouseleave', handleWrapMouseLeave);
    };
  }, [show, wrapRef]);

  const style = renderThumbStyle({ size, move, xy });
  return (
    <div
      onMouseDown={handleBarMouseDown}
      className={clsx(
        'st-scrollbar',
        vertical ? 'st-scrollbar--vertical' : 'st-scrollbar--horizontal',
        visible && 'st-scrollbar--visible'
      )}
      ref={barRef}
    >
      <div
        className="st-scrollbar__thumb"
        style={style}
        onMouseDown={handleThumbMouseDown}
        ref={thumbRef}
      ></div>
    </div>
  );
};

function renderThumbStyle({ move, size, xy }: { move: number; size: string; xy: Direction }) {
  const translate = `translate${xy.axis}(${move}%)`;
  return {
    [xy.size]: size,
    transform: translate,
  };
}

export default ScrollView;
