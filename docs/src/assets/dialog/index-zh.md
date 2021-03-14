## Dialog 对话框

对话框是很强大的组件，当你想渲染出一个对话框时尤其有用

#### 基本用法

渲染一个基本的对话框

DEMO{{./index.tsx}}

### 警告状态

这个对话框会看起来更严峻

DEMO{{./warning.tsx}}

### 高级用法

如果你不喜欢讲述人，可以换别的角色，比如一只胡桃

DEMO{{./hutao.tsx}}

### 超级用法

当然你很无聊的话我们提供了坦克选项

DEMO{{./tank.tsx}}

### 接口索引

| Property | Description   | Type      | Default | Required |
| -------- | ------------- | --------- | ------- | -------- |
| title    | title         | `string`  |         | true     |
| children | description   | `string`  |         |          |
| warning  | warning state | `boolean` | false   |          |
