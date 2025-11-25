[根目录](../CLAUDE.md) > **src**

# src 模块 - 源代码目录

## 模块职责

`src` 目录包含整个 Next.js 应用的所有源代码，采用功能优先的目录结构组织。

## 目录结构

```
src/
├── app/                 # Next.js App Router 路由和页面
├── components/          # 可复用 UI 组件
│   ├── ui/             # 基础 UI 组件 (Radix UI + Tailwind)
│   ├── theme/          # 主题相关组件
│   └── 通用组件         # 业务通用组件
├── features/           # 功能模块
│   └── ticket/         # 票务功能模块
├── lib/                # 工具库和配置
└── paths.ts            # 路由路径定义
```

## 关键依赖与配置

### 路径别名
- `@/*` → `./src/*`
- `@/drizzle/*` → `./drizzle/*`

### 类型配置
- TypeScript 严格模式启用
- React 19 JSX 转换
- 路径映射配置

## 相关文件清单

- `app/` - 应用路由和页面
- `components/` - UI 组件库
- `features/` - 业务功能模块
- `lib/` - 工具函数和配置
- `paths.ts` - 路由路径定义

## 变更记录 (Changelog)

### 2025-11-25 09:56:41
- **初始化**: 创建模块文档
- **结构**: 记录目录组织和职责
- **配置**: 记录路径别名和类型配置