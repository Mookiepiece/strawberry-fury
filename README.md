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

- [Project Overview - 概览](#project-overview0--概览)
- [Development Guide - 开发指南](#development--开发)

## Project Overview - 概览

TODO: English Translation

标注：务必看完带有 👍 的链接标识的文章和链接并理解其中的内容

#### 关于 js 库

开发一个 js 库，按照约定必须转义成编译好的 js 文件才能发布到 npm，因为为了打包速度我们一般配置我们的构建工具不去转义 node_modules 目录下的文件的比如[razzle -> createConfigAsync.js👍](https://github.com/jaredpalmer/razzle/blob/cd685bae3c71fbaf4a5dae7ae2856d97349d45c7/packages/razzle/config/createConfigAsync.js#L526)
包括此项目的 docs 底下的 webpack.config.js 你也可以看到 `exclude: /node_modules/` 。如果你是给自己用并且有操作 webpack.config 的能力当然可以把自己的库[设置到 babel 的白名单里](https://github.com/babel/babel-loader/issues/171)，但库必须做到开箱即用，所以编译是必须的，参阅[聊聊 package.json 文件中的 module 字段（zh）👍](https://loveky.github.io/2018/02/26/tree-shaking-and-pkg.module/)。

另外需要明白`dependencies/peer/dev`的概念，放 peer 是可以的

#### 关于 js 库的 tree shaking

`ES Module (ESM)` 才能支持构建工具的 `tree shaking` , `commonjs` 是不行的。所以支持 `ESM` 输出的 `rollup` 便是本项目的打包工具，社区还有使用 `babel-cli`，`typescript-cli` 转义的方法，`webpack` 的 `ESM` 输出还在实验阶段。

`webpack` 是不会在开发模式启动`tree shaking`的，生产环境才会启用，[material-ui: minimizing-bundle-size👍](https://material-ui.com/guides/minimizing-bundle-size/#when-and-how-to-use-tree-shaking)这篇指南介绍得非常详细，所以如果你的库很大，需要借助`babel-plugin-import`将 `import { Component } from 'my-lib'`转换成`import Component from 'my-lib/Component'`提升开发模式的编译速度，因为前者在`tree shaking`没有启用的情况会引入全部的文件，后者因为路径写得更细，所以只引入你需要的文件

#### 关于 css

`element` 、 `antd` 都支持直接引入其 `less/scss` 文件。

注意在 js 文件里 `import '.css'` 并不是标准 `ESM` 的语法，而是打包工具的插件（比如 `webpack` 需要安装 `css-loader` ）所支持的，如果在打包后的文件里出现这种写法，就硬性要求了你的用户必须安装了相应的预处理器`less/sass/stylus`和 `some-css-loaders`，所以你一般应当把样式表和脚本分开。一个喜闻乐见的悲剧是`ant-design/pro-components`它要求你的项目安装`less`和`less-loader`否则无法完成编译。

如上一段所述，你的用户若使用了`babel-plugin-import`并且还需要借此引入 `css` 文件时，你的用户必须安装了相应的预处理器和 `some-css-loaders`，但既然都引入了这个库并且知道用法了想必已经做好了充分的脚手架配置，当这段话是废话吧。

#### 关于打包

TODO

## Development Guide - 开发指南

Recommended tools:

- Code Editor: Visual Studio Code (with recommended extensions installed, listed in extensions.json)
- Package Manager: Yarn (to support monorepo/workspaces)
- Node.js: >= v13 (to support excute .mjs file directly)

Project Structure:

- docs: the website
  - src/assets: markdown and examples
  - src/components/PageWalker: read from assets and generate a component page, using `react-markdown` and `require.context`
  - src/components/DemoPlayer: render examples, using `react-syntax-highlighter`
- example: for local testing if the build/bundled output files is transferred correctly.
- src: working directory

Workflow:

- yarn dev: run website, and you'll able to edit components and add examples and see changes.
- yarn build_types: using typescript cli to generate ts declaration file to `dist`, folder structure is preserved.
- yarn build_comp: excute `scripts/build.components.mjs`, using rollup to transfer every components, output to `dist/[Name]` for each folder/components. to supporting `babel-plugin-import`.
- yarn build_bundle: excute `scripts/rollup.bundle.config.js`, using rollup to transfer and bundle in single output file to `dist`.
- yarn example: require `yarn build` and `yarn` excuted, local testing dist files after build.
- yarn docs_build docs_deploy: pack the website and upload to github pages.

建议的工具：

- 编辑器：Visual Studio Code (安装了在 extensions.json 里推荐的扩展程序)
- 包管理器：Yarn （为了支持 monorepo/workspaces）
- Node.js：>= v13 （为了支持直接执行.mjs 文件）

项目结构：

- docs: 网站
  - src/assets: markdown 及示例
  - src/components/PageWalker: 从 assets 读取数据并生成网页, 使用了 `react-markdown` 和 `require.context`
  - src/components/DemoPlayer: render examples, 使用了 `react-syntax-highlighter`
- example: 本地测试打包后的文件是否正常运行
- src: 工作目录

工作流程：

- yarn dev: 开发，启动网页文档，然后便可以添加示例，修改组件并且在文档里实时看到变化.
- yarn build: 构建
  - build_types: 使用 typescript cli 生成 ts 声明文件到`dist`，文件目录结构会被保留.
  - build_comp: 执行 `scripts/build.components.mjs`, 使用 rollup 分别打包每个组件输出到 `dist/[Name]`,分文件夹打包是为了支持`babel-plugin-import`
  - build_bundle: run `scripts/rollup.bundle.config.js`, 使用 rollup 打包到单个文件输出到 `dist`.
- yarn example: 在`yarn build` 和 `yarn`执行后，本地测试打包后的文件是否正常运行.
- yarn docs_build docs_deploy: 打包网站及上传到 github pages.
