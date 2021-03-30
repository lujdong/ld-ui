// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!D:/Dong/Project/ld-ui/src/components/Button/Button.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!D:/Dong/Project/ld-ui/src/components/Button/style/index.less?dumi-raw-code';

export default {
  'demo-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("D:/Dong/Project/ld-ui/node_modules/_@babel_runtime@7.13.10@@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _Button = _interopRequireDefault(require("D:/Dong/Project/ld-ui/src/components/Button/Button"));

  var Demo = function Demo() {
    return /*#__PURE__*/_react["default"].createElement(_Button["default"], null, "hello");
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react'\nimport Button from '../Button'\n\nconst Demo = ()=>{\n    return (\n        <Button>hello</Button>\n    )\n}\nexport default Demo"},"Button.tsx":{"import":"./Button","content":rawCode1},"style/index.less":{"import":"./style/index.less","content":rawCode2}},"dependencies":{"react":{"version":"17.0.2"}},"identifier":"demo-demo"},
  },
};
