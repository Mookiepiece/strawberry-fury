/* eslint-disable react/display-name */
import React from 'react';
import loadable from '@loadable/component';

import Index from '🦌/pages';
import DocLayout from '🦌/layouts/DocLayout';

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
                '/sf-components/button': 'SidebarSfComponentButton',
                '/sf-components/dialog': 'SidebarSfComponentDialog',
                '/sf-components/farm': 'SidebarSfComponentFarm',
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
            component: loadable(() => import('🦌/pages/sf-components/Button')),
          },
          {
            path: '/sf-components/dialog',
            component: loadable(() => import('🦌/pages/sf-components/Dialog')),
          },
          {
            path: '/sf-components/farm',
            component: loadable(() => import('🦌/pages/sf-components/Farm')),
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
            component: loadable(() => import('🦌/pages/st-components/Color')),
          },
          {
            path: '/st-components/layout',
            component: loadable(() => import('🦌/pages/st-components/Layout')),
          },
          {
            path: '/st-components/collapse',
            component: loadable(() => import('🦌/pages/st-components/Collapse')),
          },
          {
            path: '/st-components/form',
            component: loadable(() => import('🦌/pages/st-components/Form')),
          },
          {
            path: '/st-components/button',
            component: loadable(() => import('🦌/pages/st-components/Button')),
          },
          {
            path: '/st-components/link',
            component: loadable(() => import('🦌/pages/st-components/Link')),
          },
          {
            path: '/st-components/modal',
            component: loadable(() => import('🦌/pages/st-components/Modal')),
          },
          {
            path: '/st-components/notification',
            component: loadable(() => import('🦌/pages/st-components/Notification')),
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
