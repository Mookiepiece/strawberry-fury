## Form 表单

### 原理

`material-ui` 和 `chakra-ui` `semantic-ui` `react-bootstrap`等大部分不具备表单验证功能，可选的验证工具是 `formik`， formik 使用 Yup 做 Schema 验证。

`antd` 即 `rc-field-form` 和 `element/element-plus` 使用 `async-validator` 做 Schema 验证。

`antd` 和 `formik` 倾向使用非受控模式，即表单的值外部不可访问，这样的好处一个是输入时只有表单内部在刷新。

因为假如表单的值放外面，每次输入(即`setState`)都会引起持有该状态的组件（很可能是页面组件）的整体刷新(即`rerender`)。
但其实没有什么必要，因为不使用任何表单组件的情况下，大部分人还是会倾向于状态提升到页面组件...

而且很多业务倾向于外部要访问到表单的值。比如用户输入了 a 就显示 b 输入框，这个在非受控模式是做不到的，因为外面获取不到表单里的状态。

`antd` 默认非受控模式支持局部刷新，即输入哪个框就更新哪个框，不会刷新整个表单，因为每次更新会触发所有[Field 的回调](https://github.com/react-component/field-form/blob/e118381c2102b36c4ffe7e17a6415df091e772b7/src/Field.tsx#L216)让其各自比对新旧值判断是否需要更新
在使用[render props 模式](https://github.com/react-component/field-form/blob/e118381c2102b36c4ffe7e17a6415df091e772b7/docs/examples/renderProps.tsx#L17)此功能失效，表单整体刷新。

`formik` 默认整体刷新表单，额外的优化手段是 FastField 组件，该组件有 shouldComponentUpdate 方法各自比对新旧值，能够判断是否需要更新。

`element` 是外置表单的值，vue 的渲染模式笔者不太清楚，但应该是整体刷新，没有性能优化手段的主要原因是因为 vue 没有手动优化性能的手段。只要够快就不用优化。

本项目使用受控表单，使用[async-validator](https://github.com/yiminghe/async-validator)做schema验证。

已知测试 R5 2600 的 1/6 倍性能会卡，不知道移动端表现怎么样，大家为什么不写一个节流函数？

推荐阅读：`element/element-plus` `rc-field-form` `formik` 源码及文档

### 基本用法

`Form.Item`会传递子元素`value`和`onChange`属性，且 onChange 接受的参数是新值而不是事件，所以子元素只能是预设的同款表单组件

DEMO{{./basic.tsx}}
