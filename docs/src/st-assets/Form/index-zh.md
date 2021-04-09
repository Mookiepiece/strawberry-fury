## Form 表单

:::demo{./basic.tsx}

### 基本用法

`Form.Item`会接管子元素`value`和`onChange`属性，且 onChange 的第一参数是值而不是事件。同时也支持传入`render props`作子元素。

`Form.Item`**输入时（onChange 时）校验**，`element`的输入框 Input 控件是失焦时触发校验，`antd`和`formik`[是输入时校验](https://formik.org/docs/examples/with-material-ui)。

输入校验附带 200ms 防抖，节流规则是每次校验需等待上一次完成，连续输入时，最后一次输入必定在等待前面的校验结束后触发一次最终值校验。很多库没有预设节流，可能是这种异步校验的场景实在是太少了一般都是提交后等结果。

如果是`Form`提交触发的校验，则会无视上面的规则立即抢占式地触发校验。

默认的，当规则改变不会立即触发校验，如果改变了规则需要触发校验必须手动执行`form.validate([name])`。

:::

:::demo{./remote.tsx}

### 高级示例

这个示例里实现了一个架空的需求，后端不接收以数字开头的名字，当后端不接收此参数时，手动调用`setValidateStatus`将名称置错，并且改变名字的`rule`，用户再次输入同样的名字也会警告。

为了防止重复提交，你应该为按钮加上 loading。

:::

### 接口索引

| Form Property          | Description                | Type                              |
| ---------------------- | -------------------------- | --------------------------------- |
| value:required         |                            | `Record<string, unknown>`         |
| onChange:required      |                            | `(value: T) => void`              |
| onSubmit:required      |                            | `(value: T) => void`              |
| onSubmitValidateFailed | 提交时验证失败             | `(err: ValidateError) => void`    |
| onValidateStatusChange | 监听验证过程以显示 loading | `(isValidating: boolean) => void` |

| Form Instance     | Description                                | Type                                                          |
| ----------------- | ------------------------------------------ | ------------------------------------------------------------- |
| validate          | 触发某表单项的验证，此次验证视为抢占式验证 | `(names?: string[]) => Promise<void>`                         |
| reset             | 清空某表单项的验证状态及数据               | `(names?: string[]) => void`                                  |
| clearValidate     | 清空某表单项的验证状态                     | ` (names?: string[]) => void`                                 |
| setValidateStatus | 设置某表单项的验证状态                     | `(name: string, validateStatus: ValidateStatusParam) => void` |

| Form.Item Property | Description           | Type                    |
| ------------------ | --------------------- | ----------------------- |
| name:required      |                       | `string`                |
| label:required     |                       | `string`                |
| rules              | 查阅`async-validator` | `RuleItem`/`RuleItem[]` |

### 原理

`material-ui` 和 `chakra-ui` `semantic-ui` `react-bootstrap`等大部分不具备表单验证功能，可选的验证工具是 [`formik`](https://github.com/formium/formik)， formik 使用 [`Yup`](https://formik.org/docs/tutorial#schema-validation-with-yup) 做 Schema 验证。

`antd` 即 `rc-field-form` 和 `element/element-plus` 使用[`async-validator`](https://github.com/yiminghe/async-validator) 做 Schema 验证。

`antd` 和 `formik` 倾向使用非受控模式，即表单的值外部不可访问，这样的好处一个是输入时只有表单内部在刷新。

因为假如表单的值放外面，每次输入(即`setState`)都会引起持有该状态的组件（很可能是页面组件）的整体刷新(即`rerender`)。但其实没有什么必要，因为不使用任何表单组件的情况下，大部分人还是会倾向于状态提升到页面组件...而且很多业务倾向于外部要访问到表单的值。比如用户输入了 a 就显示 b 输入框，这个在非受控模式是做不到的，因为外面获取不到表单里的状态。

表单组件高频触发 onChange 使其成为性能瓶颈。

- `antd` 默认非受控模式支持局部刷新，即输入哪个框就更新哪个框，不会刷新整个表单，因为每次更新会触发所有[Field 的回调](https://github.com/react-component/field-form/blob/e118381c2102b36c4ffe7e17a6415df091e772b7/src/Field.tsx#L216)让其各自比对新旧值判断是否需要更新
  在使用[render props 模式](https://github.com/react-component/field-form/blob/e118381c2102b36c4ffe7e17a6415df091e772b7/docs/examples/renderProps.tsx#L17)此功能失效，表单整体刷新。
- `formik` 默认整体刷新表单，额外的优化手段是 FastField 组件，该组件有 shouldComponentUpdate 方法各自比对新旧值，能够判断是否需要更新。
- `element` 是外置表单的值，vue 的渲染模式不太清楚，但应该是整体刷新，没有性能优化手段的主要原因是因为 vue 没有手动优化性能的手段。毕竟 setup 只执行一次，只要够快就不用优化。

StForm 使用受控表单，使用 `async-validator`做 schema 验证。

要说这表单真的有什么原理吧，其实核心并不难，和写 Collapse 一样用传统的订阅模式就能解决。

推荐阅读： `muse-ui` `element/element-plus` `rc-field-form` `formik`

### Accessbility

- 依据表单规范，支持回车键隐式提交
- 点击标签能够定位到输入框

> 太长不看: 添加 submit 按钮即可支持隐式提交表单
>
> 4.10.21.2 Implicit submission
> A form element's default button is the first submit button in tree order whose form owner is that form element.
>
> If the user agent supports letting the user submit a form implicitly (for example, on some platforms hitting the "enter" key while a text control is focused implicitly submits the form), then doing so for a form, whose default button has activation behavior and is not disabled, must cause the user agent to fire a click event at that default button.
>
> There are pages on the web that are only usable if there is a way to implicitly submit forms, so user agents are strongly encouraged to support this.
>
> If the form has no submit button, then the implicit submission mechanism must do nothing if the form has more than one field that blocks implicit submission, and must submit the form element from the form element itself otherwise.
>
> For the purpose of the previous paragraph, an element is a field that blocks implicit submission of a form element if it is an input element whose form owner is that form element and whose type attribute is in one of the following states: Text, Search, URL, Telephone, Email, Password, Date, Month, Week, Time, Local Date and Time, Number
>
> [HTML Spec form-control-infrastructure.implicit-submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission)
>
> [The Enter Key should Submit Forms, Stop Suppressing it](https://www.tjvantoll.com/2013/01/01/enter-should-submit-forms-stop-messing-with-that/)

> W3C 标准中有如下规定：
>
> When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.
>
> 即：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 <el-form> 标签上添加 @submit.native.prevent。
>
> https://element-plus.org/#/zh-CN/component/form
