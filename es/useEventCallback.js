import React from 'react';

// https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
// useEventCallback issue: https://github.com/facebook/react/issues/14099
// React Hooks(二): useCallback 之痛 - 杨健 https://zhuanlan.zhihu.com/p/98554943
// Copy from
// https://github.com/formium/formik/blob/34a11422bf1619236bc9fdb1b7c4f0d285638702/packages/formik/src/Formik.tsx#L1182-L1205

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? React.useLayoutEffect : React.useEffect; // eslint-disable-next-line @typescript-eslint/no-explicit-any

function useEventCallback(fn) {
  var ref = React.useRef(fn); // we copy a ref to the callback scoped to the current state/props on each render

  useIsomorphicLayoutEffect(function () {
    ref.current = fn;
  });
  return React.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ref.current.apply(void 0, args);
  }, []);
}

export { useEventCallback };
