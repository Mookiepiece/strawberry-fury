## Button 按钮

### 基本用法

::demo{./basic.tsx}

### 禁用状态

::demo{./disabled.tsx}

### 接口索引

| Button Property | Description  | Type      |
| --------------- | ------------ | --------- |
| primary         | 主要按钮样式 | `boolean` |
| textual         | 文字按钮样式 | `boolean` |
| block           | 块样式       | `boolean` |
| solid           | 实心样式     | `boolean` |
| loading         | 加载中       | `boolean` |

\*除上述属性，按钮仍继承原生 `<button>` 属性, 如 `disabled`
