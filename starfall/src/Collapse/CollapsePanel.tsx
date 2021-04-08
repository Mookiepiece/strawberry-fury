import React, { useCallback, useRef } from 'react';
import { Transition } from 'react-transition-group';
import clsx, { ClassValue } from 'clsx';

export type CollapsePanelProps = {
  active?: boolean;
} & React.HTMLAttributes<HTMLDivElement> & {
    className?: ClassValue;
  };

const CollapsePanel: React.FC<CollapsePanelProps> = ({
  children,
  active,
  className,
  style,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleExit = useCallback(() => {
    if (ref.current) {
      ref.current.style.height = `${ref.current.scrollHeight}px`;
      ref.current?.scrollHeight; // trigger browsers reflow to apply the height.
      // https://github.com/reactjs/react-transition-group/blob/master/src/CSSTransition.js#L193
    }
  }, []);

  return (
    <Transition in={active} timeout={300} onExit={handleExit}>
      {state => (
        <div
          className={clsx('sf-collapse-panel', className)}
          ref={ref}
          style={{
            ...{
              entering: {
                height: ref.current?.scrollHeight,
                transition: 'all 0.3s',
              },
              entered: { height: undefined },
              exiting: { height: 0, transition: 'all 0.3s' },
              exited: { height: 0 },
              unmounted: { height: undefined },
            }[state],
            ...style,
          }}
          {...rest}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default CollapsePanel;
