/* eslint-disable react/display-name */
import React from 'react';

import Index from '🦌/pages';
import DocLayout from '🦌/layouts/DocLayout';

import Button from '🦌/pages/sf-components/Button';
import Dialog from '🦌/pages/sf-components/Dialog';

import StButton from '🦌/pages/st-components/Button';
import StLink from '🦌/pages/st-components/Link';
import Collapse from '🦌/pages/st-components/Collapse';
import Form from '🦌/pages/st-components/Form';
import SfIndex from '🦌/pages/sf-components';
import StIndex from '🦌/pages/st-components';
import { DocRoute } from '🦌/utils/RouterView';
import AppLayout from '🦌/layouts/AppLayout';

export default [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/index',
        exact: true,
        component: Index,
      },
      {
        path: '/sf-components',
        component: (props: { children: DocRoute[] }) => (
          <DocLayout
            nav={{
              '/sf-components/button': 'SidebarStComponentButton',
              '/sf-components/dialog': 'SidebarStComponentDialog',
            }}
            {...props}
          />
        ),
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
        component: (props: { children: DocRoute[] }) => (
          <DocLayout
            nav={{
              '/st-components/button': 'SidebarStComponentButton',
              '/st-components/collapse': 'SidebarStComponentCollapse',
              '/st-components/form': 'SidebarStComponentForm',
              '/st-components/link': 'SidebarStComponentLink',
            }}
            {...props}
          />
        ),
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
          {
            path: '/st-components/button',
            component: StButton,
          },
          {
            path: '/st-components/link',
            component: StLink,
          },
        ],
      },
      {
        path: '/',
        exact: true,
        redirect: '/index',
      },
    ],
  },
] as DocRoute[];
