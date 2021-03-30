// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/Dong/Project/ld-ui/node_modules/_@umijs_runtime@3.4.7@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('D:/Dong/Project/ld-ui/node_modules/_@umijs_preset-dumi@1.1.10@@umijs/preset-dumi/lib/theme/layout').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('D:/Dong/Project/ld-ui/node_modules/_@umijs_preset-dumi@1.1.10@@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/src/builtins/Previewer.tsx');
        const { default: demos } = require('@@/dumi/demos');
        const { usePrefersColor } = require('dumi/theme');

        
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('D:/Dong/Project/ld-ui/node_modules/_@umijs_preset-dumi@1.1.10@@umijs/preset-dumi/lib/theme/layout').default, require('D:/Dong/Project/ld-ui/node_modules/_@umijs_preset-dumi@1.1.10@@umijs/preset-dumi/node_modules/dumi-theme-default/src/layout.tsx').default],
    "routes": [
      {
        "path": "/",
        "component": require('D:/Dong/Project/ld-ui/README.md').default,
        "exact": true,
        "meta": {
          "locale": "en-US",
          "title": "ld-ui",
          "order": null
        },
        "title": "ld-ui"
      },
      {
        "path": "/components/button/demo",
        "component": require('D:/Dong/Project/ld-ui/src/components/Button/demo/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Button/demo/index.md",
          "updatedTime": 1617066713689,
          "slugs": [
            {
              "depth": 2,
              "value": "基础用法",
              "heading": "基础用法"
            }
          ],
          "title": "基础用法",
          "group": {
            "path": "/components/button",
            "title": "Components/button"
          }
        },
        "title": "基础用法"
      },
      {
        "path": "/components/button",
        "meta": {},
        "exact": true,
        "redirect": "/components/button/demo"
      }
    ],
    "title": "ld-ui",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
