/* eslint-disable react/display-name */
import React from 'react';

import Index from '🦌/pages';
import DocLayout from '🦌/layouts/DocLayout';

import SfButton from '🦌/pages/sf-components/Button';
import SfDialog from '🦌/pages/sf-components/Dialog';

import StButton from '🦌/pages/st-components/Button';
import StLink from '🦌/pages/st-components/Link';
import Modal from '🦌/pages/st-components/Modal';
import StColor from '🦌/pages/st-components/Color';
import StLayout from '🦌/pages/st-components/Layout';
import Notification from '🦌/pages/st-components/Notification';
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
              Components: {
                '/sf-components/button': 'SidebarStComponentButton',
                '/sf-components/dialog': 'SidebarStComponentDialog',
              },
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
            component: SfButton,
          },
          {
            path: '/sf-components/dialog',
            component: SfDialog,
          },
        ],
      },
      {
        path: '/st-components',
        component: (props: { children: DocRoute[] }) => (
          <DocLayout
            nav={{
              Design: {
                '/st-components/color': 'SidebarStDesignColor',
                '/st-components/layout': 'SidebarStDesignLayout',
              },
              Components: {
                '/st-components/button': 'SidebarStComponentButton',
                '/st-components/collapse': 'SidebarStComponentCollapse',
                '/st-components/form': 'SidebarStComponentForm',
                '/st-components/link': 'SidebarStComponentLink',
                '/st-components/modal': 'SidebarStComponentModal',
                '/st-components/notification': 'SidebarStComponentNotification',
              },
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
            path: '/st-components/color',
            component: StColor,
          },
          {
            path: '/st-components/layout',
            component: StLayout,
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
          {
            path: '/st-components/modal',
            component: Modal,
          },
          {
            path: '/st-components/notification',
            component: Notification,
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
