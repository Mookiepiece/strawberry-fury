// https://github.com/react-component/util/blob/eaf88939fe662df96c1aae752f1cb63e24edfec5/src/getScrollBarSize.js
// https://github.com/element-plus/element-plus/blob/6a2499dc74c44abd2571c306057ac0850ef7f111/packages/utils/scrollbar-width.ts

let scrollBarWidth: number | undefined;

export default function (): number {
  if (scrollBarWidth !== undefined) return scrollBarWidth;

  const outer = document.createElement('div');
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.visibility = 'hidden';
  outer.style.pointerEvents = 'none';
  document.body.appendChild(outer);

  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';

  const inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  const widthWithScroll = inner.offsetWidth;
  document.body.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;

  return scrollBarWidth;
}
