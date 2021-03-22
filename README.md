<h1 align="center">Strawberry Fury - 草莓盛怒</h1>
<p align="center">
  <img src="https://github.com/Mookiepiece/strawberry-fury/blob/dev/docs/src/strawberry-fury-LOGO.png" width="200px" alt="logo" />
</p>
<p align="center">A vanilla react components library.</p>
<p align="center">一款自然的 react.js 组件库</p>

[Visit HomePage（访问主页）https://mookiepiece.github.io/strawberry-fury](https://mookiepiece.github.io/strawberry-fury/#/index)

This project is created to see if this project skeleton of react components library works.
Of course there are some interesting components included.

这个项目是为了测试这个组件库工程结构是可行的，当然也有一些有趣的组件

## Table of Contents - 目录

- [Development Guide - 开发指南](#development-guide---开发指南)
- [Project Overview - 概览](#project-overview---概览)

## Development Guide - 开发指南

#### 建议的工具：

- 编辑器：Visual Studio Code (需要安装 `extensions.json` 里推荐的扩展程序)
- 包管理器：Yarn （为了支持 monorepo/workspaces）
- Node.js：>= v13 （为了支持直接执行.mjs 文件）

#### 项目结构：

- docs: 网站
  - src/assets: markdown 及示例
  - src/components/PageWalker: 从 assets 读取数据并生成网页, 使用了 `react-markdown` 和 `require.context`
  - src/components/DemoPlayer: render examples, 使用了 `react-syntax-highlighter`
- example: 本地测试打包后的文件是否正常运行
- strawberry-fury: 工作目录

#### 工作流程：

- yarn dev: 开发，启动网页文档，然后便可以添加示例，修改组件并且在文档里实时看到变化.
- yarn build: 构建
  - build_types: 使用 typescript cli 生成 ts 声明文件到`dist`，文件目录结构会被保留.
  - build_comp: 执行 `scripts/build.components.mjs`, 使用 rollup 分别打包每个组件输出到 `dist/[Name]`,分文件夹打包是为了支持`babel-plugin-import`
  - build_bundle: run `scripts/rollup.bundle.config.js`, 使用 rollup 打包到单个文件输出到 `dist`.
- yarn example: 在`yarn build` 执行后，本地测试打包后的文件是否正常运行.
- yarn docs_build docs_deploy: 打包网站及上传到 github pages.

#### Recommended tools:

- Code Editor: Visual Studio Code (with recommended extensions listed in `extensions.json` installed)
- Package Manager: Yarn (to support monorepo/workspaces)
- Node.js: >= v13 (to support excute .mjs file directly)

#### Project Structure:

- docs: the website
  - src/assets: markdown and examples
  - src/components/PageWalker: read from assets and generate a component page, using `react-markdown` and `require.context`
  - src/components/DemoPlayer: render examples, using `react-syntax-highlighter`
- example: for local testing if the build/bundled output files is transferred correctly.
- strawberry-fury: working directory

#### Workflow:

- yarn dev: run website, and you'll able to edit components and add examples and see changes.
- yarn build_types: using typescript cli to generate ts declaration file to `dist`, folder structure is preserved.
- yarn build_comp: excute `scripts/build.components.mjs`, using rollup to transfer every components, output to `dist/[Name]` for each folder/components. to supporting `babel-plugin-import`.
- yarn build_bundle: excute `scripts/rollup.bundle.config.js`, using rollup to transfer and bundle in single output file to `dist`.
- yarn example: require `yarn build` excuted, local testing dist files after build.
- yarn docs_build docs_deploy: pack the website and upload to github pages.

## Project Overview - 概览

本文文中的外链请务必查看和理解

#### 踩雷先驱

这些文章和项目或许比本文写得更好：

- [Creating a Library of React Components using Create React App](https://hackernoon.com/creating-a-library-of-react-components-using-create-react-app-without-ejecting-d182df690c6b)
- [Creating a React Component Library using Rollup, Typescript, Sass and Storybook](https://github.com/HarveyD/react-component-library)
- [58-magic/react-component-template](https://github.com/58-magic/react-component-template)

#### Prior Art

Those article may better than this one：

- [Creating a Library of React Components using Create React App](https://hackernoon.com/creating-a-library-of-react-components-using-create-react-app-without-ejecting-d182df690c6b)
- [Creating a React Component Library using Rollup, Typescript, Sass and Storybook](https://github.com/HarveyD/react-component-library)
- [58-magic/react-component-template](https://github.com/58-magic/react-component-template)

NO English translations for rest sections in this chapter

#### 关于 js 库

开发一个 js 库，按照约定须转义成编译好的 js 文件才能发布到 npm，因为为了打包速度我们一般配置我们的构建工具不去转义 node_modules 目录下的文件的比如[razzle -> createConfigAsync.js](https://github.com/jaredpalmer/razzle/blob/cd685bae3c71fbaf4a5dae7ae2856d97349d45c7/packages/razzle/config/createConfigAsync.js#L526)
包括此项目的 docs 底下的 webpack.config.js 你也可以看到 `exclude: /node_modules/` 。如果你是给自己用的当然可以[设置到 babel 的白名单里](https://github.com/babel/babel-loader/issues/171)，

[聊聊 package.json 文件中的 module 字段（zh）](https://loveky.github.io/2018/02/26/tree-shaking-and-pkg.module/)。

#### 关于 tree shaking

`tree shaking`只对`ES Module (ESM)` 文件生效。所以本项目用 `rollup` 构建`ESM` 输出。`webpack` 的 `ESM` 输出还在实验阶段。`typescript-cli`也支持`ESNext`输出，`babel-cli`也支持配置不转换模块语法。

`webpack` 是不会在开发模式启动`tree shaking`的，生产环境才会启用，[material-ui: minimizing-bundle-size](https://material-ui.com/guides/minimizing-bundle-size/#when-and-how-to-use-tree-shaking)这篇指南介绍得非常详细，所以如果你的库很大，需要借助`babel-plugin-import`将 `import { Component } from 'my-lib'`转换成`import Component from 'my-lib/Component'`提升开发模式的编译速度，因为前者在`tree shaking`没有启用的情况会引入文件的整个内容，后者因为路径写得更细，所以只引入你需要的文件

#### 关于 css

`element` 、 `antd` 都支持直接引入其 `less/scss` 文件。

注意在 js 文件里 `import '.css'` 并不是标准 `ESM` 的语法，而是打包工具的插件（比如 `webpack` 需要安装 `css-loader` ）所支持的，如果在打包后的文件里出现这种写法，就硬性要求了你的用户必须安装了相应的预处理器`less/sass/stylus`和 `some-css-loaders`，所以你一般应当把样式表和脚本分开。一个喜闻乐见的悲剧是`@antd/pro-components`它要求你的项目安装`less`和`less-loader`否则无法完成编译。

如上一段所述，你的用户若使用了`babel-plugin-import`并且还需要借此引入 `css` 文件时，你的用户必须安装了相应的预处理器和 `some-css-loaders`，但既然都引入了这个库并且知道用法了想必已经做好了充分的脚手架配置，当这段话是废话吧。

#### 关于打包工具

一些参考的项目如下(不一定全和准确)：

- element-plus： 只介绍 build:bundle，和 build:esm 两个，[build:bundle 使用了 webpack](https://github.com/element-plus/element-plus/blob/f2091973c1/build/webpack.config.js) ，此次构建会生成单文件输出，同时可能是因为 webpack 加了`@babel/typescript`插件，会额外生成好各目录的 d.ts 文件，[build:esm 会跑一个脚本](https://github.com/element-plus/element-plus/blob/f2091973c191aad66e62ff2d890b8239dab7163f/package.json#L17)，这个脚本调用 rollup 对每个组件分别打包以支持前文提到的`babel-plugin-import`，d.ts 在这次不会生成，因为前一步生成好了
- zent：有很多 sh 脚本，windows 没有 rm 命令所以没办法跑，目测是 typescript-cli 直接转义成 js 和相关的 d.ts 文件，结果文件里能看到 polifill 从 tslib 引入，没有使用打包工具。
- mui: 有看到使用[typescript-cli](https://github.com/mui-org/material-ui/blob/5511e9c32fda435d7de7c64a44ba8c32483dab44/scripts/buildTypes.js#L44)并且配置了`emitDeclarationOnly`专门生成 d.ts 文件，本项目的 build:types 参考了这个步骤，其余没看。
- wojtekmaj/react-daterange-picker：生产环境下的小众库代表，用[babel-cli 和 less-cli 直接转义](https://github.com/wojtekmaj/react-daterange-picker/blob/f3fb47fee4afbfff838dc7f7a80081c8bcd4c40e/package.json#L8-L10)，没有使用打包工具。
- aakashns/simple-component-library："rm -rf dist && NODE_ENV=production `babel` src/lib --out-dir dist --copy-files ......"， 也是 babel 直接转义
- HarveyD/react-component-library：`"build": "rollup -c"`，rollup-plugin-postcss 自带了 inject 所以能注入样式表到 js 文件里，但是还是不建议在 js 里写 css，在用户的项目里，硬编码在 js 里的 css 不能被 postcss 察觉和转码也不够灵活

#### 其它

官网是部署在 github pages 下的，国内网络不能访问

如果连接不上 github，fatal: unable to access，尝试把 git remote [从 https 改成 ssh](https://www.zhihu.com/question/26954892)

typescript declaration 类型定义文件在编译后是有损失的，简单的讲，你 index.ts 输出了哪些文件，才会输出那个文件的类型，因为所有文件最后都被打包成了 index.js。当前文件夹底下的其他次要文件凭空消失了，所以注意把需要类型定义文件的文件都 import 到 index.ts 里[可能像这样](https://github.com/element-plus/element-plus/blob/e45da7bddbf6ac58751ac598ca3bc2e00454073b/packages/form/index.ts#L14)，这种情况不太清楚会不会存在，因为按道理次要文件不会被 export，或者说按照 ts 的语法，export 的东西必须有类型定义。
