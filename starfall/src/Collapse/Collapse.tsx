import React, { useCallback, useContext, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { useMount, useUnmount } from 'react-use';
import { useEventCallback } from 'starfall/_utils/useEventCallback';
import CollapsePanel, { CollapsePanelProps } from './CollapsePanel';
const CollapseContext = React.createContext<{
  names: string[];
  activeNames: string[];
  register: (i?: string) => string;
  unregister: (i: string) => void;
  toggle: (i: string) => void;
}>({
  names: [],
  activeNames: [],
  register: () => '',
  unregister() {},
  toggle() {},
});

const Collapse: React.FC & {
  Panel: React.FC<CollapsePanelProps>;
  Item: React.FC<{
    children: [React.ReactElement<CollapseSummaryProps>, React.ReactElement<CollapsePanelProps>];
  }>;
  Summary: React.FC<CollapseSummaryProps>;
} = ({ children }) => {
  const [names, setNames] = useState<string[]>([]);
  const [activeNames, setActiveNames] = useState<string[]>([]);

  const counter = useRef(0);

  const register = useEventCallback(() => {
    let i: string;
    do {
      i = (counter.current++).toString();
    } while (names.includes(i));
    setNames(names => [...names, i]);
    return i;
  });

  const unregister = useCallback((i: string) => {
    setNames(names => {
      const index = names.findIndex(k => k === i);
      if (index === -1) {
        console.error(`[SF Collapse] invalid name: ${i}`);
      }
      return [...names.slice(0, index), ...names.slice(index + 1)];
    });
    setActiveNames(activeNames => {
      const index = activeNames.findIndex(k => k === i);
      return [...activeNames.slice(0, index), ...activeNames.slice(index + 1)];
    });
  }, []);

  const toggle = useCallback((i: string) => {
    setActiveNames(activeNames => {
      const index = activeNames.findIndex(k => k === i);
      return index === -1
        ? [...activeNames, i]
        : [...activeNames.slice(0, index), ...activeNames.slice(index + 1)];
    });
  }, []);

  const collapseContextValue = useMemo(
    () => ({
      register,
      unregister,
      names,
      activeNames,
      toggle,
    }),
    [register, unregister, names, activeNames, toggle]
  );

  return (
    <div>
      <CollapseContext.Provider value={collapseContextValue}>{children}</CollapseContext.Provider>
    </div>
  );
};

type CollapseSummaryProps = {
  children: React.ReactElement;
  active?: boolean;
  toggle: () => void;
};
const CollapseSummary: React.FC<CollapseSummaryProps> = ({ children, active, toggle }) => {
  React.Children.only(children);

  return React.cloneElement(children, {
    className: clsx(children.props.className, active ? 'active' : ''),
    onClick: () => {
      toggle();
      children.props.onClick?.();
    },
  });
};

const CollapseItem: React.FC<{
  children: [React.ReactElement<CollapseSummaryProps>, React.ReactElement<CollapsePanelProps>];
}> = ({ children }) => {
  const { register, unregister, activeNames, toggle } = useContext(CollapseContext);
  const [name, setName] = useState('');

  useMount(() => setName(register()));
  useUnmount(() => unregister(name));

  const value = useMemo(
    () => ({
      toggle: () => toggle(name),
      active: activeNames.includes(name),
      name: name,
    }),
    [activeNames, name, toggle]
  );

  const summary = children[0];
  const panel = children[1];

  return (
    <>
      {React.cloneElement(summary, {
        ...summary.props,
        active: value.active,
        toggle: value.toggle,
      })}
      {React.cloneElement(panel, {
        ...panel.props,
        active: value.active,
      })}
    </>
  );
};

Collapse.Panel = CollapsePanel;
Collapse.Item = CollapseItem;
Collapse.Summary = CollapseSummary;

export default Collapse;
