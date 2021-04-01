import React from 'react';

import Index from '🦌/pages';
import DocLayout from '🦌/layouts/DocLayout';

import Button from '🦌/pages/sf-components/Button';
import Dialog from '🦌/pages/sf-components/Dialog';
import Collapse from '🦌/pages/st-components/Collapse';
import Form from '🦌/pages/st-components/Form';
import SfIndex from '🦌/pages/sf-components';
import StIndex from '🦌/pages/st-components';
import { DocRoute } from '🦌/utils/RouterView';

export default [
  {
    path: '/index',
    exact: true,
    component: Index,
  },
  {
    path: '/sf-components',
    component: (() => {
      const nav: Record<string, string> = {
        '/sf-components/button': 'Button',
        '/sf-components/dialog': 'Dialog',
      };
      // eslint-disable-next-line react/display-name
      return (props: { children: DocRoute[] }) => <DocLayout nav={nav} {...props} />;
    })(),
    children: [
      {
        path: '/sf-components',
        exact: true,
        component: SfIndex,
      },
      {
        path: '/sf-components/button',
        component: Button,
      },
      {
        path: '/sf-components/dialog',
        component: Dialog,
      },
    ],
  },
  {
    path: '/st-components',
    component: (() => {
      const nav: Record<string, string> = {
        '/st-components/collapse': 'Collapse',
        '/st-components/form': 'Form',
      };
      // eslint-disable-next-line react/display-name
      return (props: { children: DocRoute[] }) => <DocLayout nav={nav} {...props} />;
    })(),
    children: [
      {
        path: '/st-components',
        exact: true,
        component: StIndex,
      },
      {
        path: '/st-components/collapse',
        component: Collapse,
      },
      {
        path: '/st-components/form',
        component: Form,
      },
    ],
  },
  {
    path: '/',
    exact: true,
    redirect: '/index',
  },
] as DocRoute[];
