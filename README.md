# remai 组件库

## 准备开始

Corepack 添加于 `Node v16.9.0, v14.19.0` 、可以使用 `Corepack` 指定项目使用的包管理器(pnpm 或 yarn)以及版本

### Corepack

- 单应用激活

```zsh
corepack enable
```

- 用声明的包管理器，会自动下载对应的 `pnpm`，然后再执行

```zsh
pnpm install
```

### 或全局安装 Pnpm

- 直接全局安装 `pnpm`

```zsh
npm install pnpm -g
```

- 然后再执行

```
pnpm install
```

---

## Pnpm

全局的公共依赖包，比如打包涉及到的 father、typescript 等

### -w, --workspace-root 参数，

将依赖包安装到工程的根目录下，作为所有 package 的公共依赖。比如`react`

```zsh
pnpm install react -w
```

### 给某个 package 单独安装指定依赖：` --filter、-F`

给 `@remai/business` 安装一个依赖包，比如 `axios`

```zsh
pnpm add axios --filter @remai/business
```

> --filter 参数跟着的是 package 下的 `package.json` 的 `name` 字段，并不是目录名。

执行 `@remai/business` 下的 scripts 脚本：

```zsh
pnpm build --filter @remai/business
```

跟着匹配规则来指定对匹配上规则的包进行操作

```zsh
pnpm build --filter "./packages/**"
```
