---
title: 列表内容搜索
nav:
  title: 组件
  order: 1
  path: /design
group:
  title: UI 组件
  order: 2
---

# ListSearch 输入框

列表中的 UI 组件（搜索）

## 代码演示

### 基本用法

<code src="./demo/basic.tsx" hideActions='"[CSB]"'></code>

## API

| 参数        | 说明                   | 类型                   | 默认值 | 版本 |
| ----------- | ---------------------- | ---------------------- | ------ | ---- |
| value       | 输入框内容             | string                 | -      |      |
| onChange    | 输入框内容变化时的回调 | function(e)            | -      |      |
| onSearch    | 点击搜索图标时的回调   | function(value, event) | -      |      |
| placeholder | 占位符                 | string                 | -      |      |
