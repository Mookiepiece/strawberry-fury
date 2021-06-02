var r=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,o=(t,n,e)=>n in t?r(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;import{R as i}from"./vendor.094dd65a.js";import"./Farm.3fece830.js";import{P as a}from"./PageWalker.4339b74a.js";import"./index.e9e276ee.js";const c=r=>{const a=r,{haircut:c,children:u,width:l,height:s}=a,h=((r,o)=>{var i={};for(var a in r)n.call(r,a)&&o.indexOf(a)<0&&(i[a]=r[a]);if(null!=r&&t)for(var a of t(r))o.indexOf(a)<0&&e.call(r,a)&&(i[a]=r[a]);return i})(a,["haircut","children","width","height"]);return i.createElement("button",((r,i)=>{for(var a in i||(i={}))n.call(i,a)&&o(r,a,i[a]);if(t)for(var a of t(i))e.call(i,a)&&o(r,a,i[a]);return r})({className:"sf-button",style:{width:l,height:s}},h),u,c?i.createElement("div",{className:"sf-hair"}):null)};const u={"/src/sf-assets/Button/basic.tsx":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:()=>i.createElement(c,null,"Click Me!")}),"/src/sf-assets/Button/customWidth.tsx":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:()=>i.createElement(i.Fragment,null,i.createElement(c,{width:100,height:50},"Button"),i.createElement("div",{style:{display:"inline-block",width:20}}),i.createElement(c,{width:50,height:50},"⚆_⚆"))}),"/src/sf-assets/Button/haircut.tsx":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:()=>i.createElement(c,{haircut:!0,width:60,height:35},"・_・")})},l={basic:"import React from 'react';\r\nimport { Button } from '🦄';\r\n\r\nconst BasicUsage: React.FC = () => {\r\n  return <Button>Click Me!</Button>;\r\n};\r\n\r\nexport default BasicUsage;\r\n",customWidth:"import React from 'react';\r\nimport { Button } from '🦄';\r\n\r\nconst CustomStyle: React.FC = () => {\r\n  return (\r\n    <>\r\n      <Button width={100} height={50}>\r\n        Button\r\n      </Button>\r\n      <div style={{ display: 'inline-block', width: 20 }}></div>\r\n      <Button width={50} height={50}>\r\n        ⚆_⚆\r\n      </Button>\r\n    </>\r\n  );\r\n};\r\n\r\nexport default CustomStyle;\r\n",haircut:"import React from 'react';\r\nimport { Button } from '🦄';\r\n\r\nconst Haircut: React.FC = () => {\r\n  return (\r\n    <Button haircut width={60} height={35}>\r\n      ・_・\r\n    </Button>\r\n  );\r\n};\r\n\r\nexport default Haircut;\r\n"},s={zh:"## Button 按钮\r\n\r\n基本组件\r\n\r\n:::demo{basic}\r\n\r\n### 基本用法\r\n\r\n:::\r\n\r\n:::demo{customWidth}\r\n\r\n### 自定义样式\r\n\r\n你可以给予其宽高的自定义样式, 诸如 `width` `height`\r\n\r\n:::\r\n\r\n:::demo{haircut}\r\n\r\n### 发型\r\n\r\n一个好的发型可以让你的按钮看上去更懂。\r\n\r\n:::\r\n\r\n### 接口索引\r\n\r\n| Property | Description | Type                |\r\n| -------- | ----------- | ------------------- |\r\n| haircut  |             | `boolean`           |\r\n| width    |             | `string` / `number` |\r\n| height   |             | `string` / `number` |\r\n",en:"## Button\r\n\r\na basic component\r\n\r\n:::demo{basic}\r\n\r\n### Basic Usage\r\n\r\n:::\r\n\r\n:::demo{customWidth}\r\n\r\n### Custom Style\r\n\r\nButtons could have custom `width` and `height`\r\n\r\n:::\r\n\r\n:::demo{haircut}\r\n\r\n### Haircut\r\n\r\nYou can attach a nice haircut to the button to decorate it.\r\n\r\n:::\r\n\r\n### API\r\n\r\n| Property   | Description | Type                | Default | Required |\r\n| ---------- | ----------- | ------------------- | ------- | -------- |\r\n| haircut    |             | `boolean`           | `false` |          |\r\n| children   | description | `string`            |         |          |\r\n| width      |             | `string` / `number` |         |          |\r\n| height     |             | `string` / `number` |         |          |\r\n| background |             | `string`            |         |          |\r\n"};export default()=>i.createElement(a,{requireDemo:u,requireRaw:l,requireMd:s});
