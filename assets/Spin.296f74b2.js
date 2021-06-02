import{D as e,R as n}from"./vendor.094dd65a.js";import{S as i,B as t}from"./index.e9e276ee.js";import{P as a}from"./PageWalker.4339b74a.js";const r={"/src/st-assets/Spin/basic.tsx":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:()=>{const[a,r]=e.exports.useState(!1);return n.createElement(n.Fragment,null,n.createElement("span",{style:{color:"navy"}},n.createElement(i,{weight:1}),n.createElement(i,null),n.createElement(i,{weight:3})),n.createElement("span",null,n.createElement(i,{loading:a,weight:1,lazy:1e3}),n.createElement(i,{loading:a,lazy:2e3}),n.createElement(i,{loading:a,weight:3,lazy:3e3})),n.createElement("div",{style:{maxWidth:300}},n.createElement(i.Container,{loading:a},n.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit amet ipsa numquam omnis molestias dolore enim officia sed quibusdam vitae itaque magni vel alias eos unde eveniet, distinctio explicabo dignissimos!")),n.createElement(i.Container,{loading:a,lazy:1e3},n.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit amet ipsa numquam omnis molestias dolore enim officia sed quibusdam vitae itaque magni vel alias eos unde eveniet, distinctio explicabo dignissimos!"))),n.createElement(t,{loading:a,onClick:()=>{r(!0),setTimeout((()=>r(!1)),3e3)}},"Loading"))}})},o={basic:"import React, { useState } from 'react';\r\nimport { Button, Spin } from 'starfall';\r\n\r\nconst BasicUsage: React.FC = () => {\r\n  const [l, setL] = useState(false);\r\n\r\n  return (\r\n    <>\r\n      <span style={{ color: 'navy' }}>\r\n        <Spin weight={1} />\r\n        <Spin />\r\n        <Spin weight={3} />\r\n      </span>\r\n      <span>\r\n        <Spin loading={l} weight={1} lazy={1000} />\r\n        <Spin loading={l} lazy={2000} />\r\n        {/* 3000 will not appear 👇 */}\r\n        <Spin loading={l} weight={3} lazy={3000} />\r\n      </span>\r\n      <div style={{ maxWidth: 300 }}>\r\n        <Spin.Container loading={l}>\r\n          <p>\r\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit amet ipsa numquam omnis\r\n            molestias dolore enim officia sed quibusdam vitae itaque magni vel alias eos unde\r\n            eveniet, distinctio explicabo dignissimos!\r\n          </p>\r\n        </Spin.Container>\r\n        <Spin.Container loading={l} lazy={1000}>\r\n          <p>\r\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit amet ipsa numquam omnis\r\n            molestias dolore enim officia sed quibusdam vitae itaque magni vel alias eos unde\r\n            eveniet, distinctio explicabo dignissimos!\r\n          </p>\r\n        </Spin.Container>\r\n      </div>\r\n      <Button\r\n        loading={l}\r\n        onClick={() => {\r\n          setL(true);\r\n          setTimeout(() => setL(false), 3000);\r\n        }}\r\n      >\r\n        Loading\r\n      </Button>\r\n    </>\r\n  );\r\n};\r\nexport default BasicUsage;\r\n"},s={zh:"## Spin 加载符\r\n\r\nSpin 用于显示加载符。Spin.Container 用于锁定一块加载区域。\r\n\r\n### 基本用法\r\n\r\n::demo{basic}\r\n\r\n### 接口索引\r\n\r\n| Spin Property | Description                    | Type      |\r\n| ------------- | ------------------------------ | --------- |\r\n| loading       | 是否显示，不提供默认是一直显示 | `boolean` |\r\n| weight        | 线宽，默认 2                   | `1/2/3`   |\r\n| lazy          | 延迟显示的时间                 | `number`  |\r\n",en:"## Spin\r\n"};export default()=>n.createElement(a,{requireDemo:r,requireRaw:o,requireMd:s});
