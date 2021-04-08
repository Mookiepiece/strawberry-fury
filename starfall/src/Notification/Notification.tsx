import React, { useLayoutEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { useMount } from 'react-use';
import Collapse from 'starfall/Collapse';
import { NotificationPortal, setup } from 'starfall/_utils/Portal';
import { useEventCallback } from 'starfall/_utils/useEventCallback';

type Noti = {
  id: number;
  content: React.ReactNode | React.ReactNode[];
};

let id = 0;
let NotificationBoxMounted = false;

const cache: Noti[] = [];
let _push: (v: Noti) => void = v => {
  cache.push(v);
};

const NotificationBox: React.FC = () => {
  const [notis, setNotis] = useState<Noti[]>([]);
  useMount(() => {
    setNotis(cache);
    _push = v => setNotis(a => [...a, v]);
  });

  const remove = useEventCallback((id: number) => {
    setNotis(notis => {
      const index = notis.findIndex(v => v.id === id);
      if (index !== -1) {
        return notis.slice(0, index).concat(notis.slice(index + 1));
      }
      return notis;
    });
  });

  return (
    <NotificationPortal>
      <div>
        {notis.map(value => (
          <NotificationItem key={value.id} value={value} remove={remove} />
        ))}
      </div>
    </NotificationPortal>
  );
};

const NotificationItem: React.FC<{ value: Noti; remove: (id: number) => void }> = ({
  value,
  remove,
}) => {
  const [visible, setVisible] = useState([true, false]);
  const mouseLeaveToRemoveRef = useRef<NodeJS.Timeout>();

  const close = useEventCallback(() => {
    setVisible([false, false]);
    setTimeout(() => remove(value.id), 300);
  });

  const handleMouseEnter = useEventCallback(() => {
    mouseLeaveToRemoveRef.current !== undefined && clearTimeout(mouseLeaveToRemoveRef.current);
  });
  const handleMouseLeave = useEventCallback(() => {
    mouseLeaveToRemoveRef.current = setTimeout(() => {
      close();
    }, 3000);
  });

  useLayoutEffect(() => {
    setVisible([true, true]);
    handleMouseLeave();
  }, [handleMouseLeave]);

  return (
    <CSSTransition in={visible[1]} timeout={300} classNames="st-notification-item">
      <Collapse.Panel active={visible[0]} className="st-notification-item">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {value.content}
        </div>
      </Collapse.Panel>
    </CSSTransition>
  );
};

const Notification: {
  push: (children: React.ReactNode | React.ReactNode[]) => void;
  setup: () => void;
} = {
  push(content) {
    this.setup();
    _push({
      id: id++,
      content,
    });
  },
  setup() {
    const starfallNotificationRoot = setup('Notification');
    if (!NotificationBoxMounted) {
      NotificationBoxMounted = true;
      ReactDOM.render(<NotificationBox />, starfallNotificationRoot);
    }
  },
};

export default Notification;
