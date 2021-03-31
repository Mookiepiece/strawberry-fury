/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Index from '🦌/pages';
import DocLayout from '🦌/layouts/DocLayout';

import Button from '🦌/pages/sf-components/Button';
import Dialog from '🦌/pages/sf-components/Dialog';
import Collapse from '🦌/pages/st-components/Collapse';
import Form from '🦌/pages/st-components/Form';

export default [
  {
    path: '/index',
    exact: true,
    component: Index,
  },
  {
    path: '/sf-components',
    component: (() => {
      const pages: Record<string, [string, React.FC]> = {
        '/sf-components/button': ['Button', Button],
        '/sf-components/dialog': ['Dialog', Dialog],
      };
      return () => <DocLayout pages={pages} />;
    })(),
  },
  {
    path: '/st-components',
    component: (() => {
      const pages: Record<string, [string, React.FC]> = {
        '/st-components/Collapse': ['Collapse', Collapse],
        '/st-components/Form': ['Form', Form],
      };
      return () => <DocLayout pages={pages} />;
    })(),
  },
  {
    path: '/',
    exact: true,
    redirect: '/index',
  },
];
