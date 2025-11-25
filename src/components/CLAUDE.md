[根目录](../../CLAUDE.md) > [src](../) > **components**

# components 模块 - UI 组件库

## 模块职责

`components` 目录包含所有可复用的 UI 组件，采用分层结构组织，从基础 UI 组件到业务通用组件。

## 组件分类

### UI 基础组件 (`ui/`)
基于 Radix UI 和 Tailwind CSS 构建的原子级组件：
- `button.tsx` - 按钮组件 (支持多种变体和尺寸)
- `card.tsx` - 卡片容器组件
- `separator.tsx` - 分隔线组件

### 主题组件 (`theme/`)
与主题系统相关的组件：
- `themeProvider.tsx` - 主题提供器
- `themeSwitcher.tsx` - 主题切换器

### 通用业务组件
跨功能使用的业务组件：
- `header.tsx` - 页面头部
- `heading.tsx` - 标题组件
- `spinner.tsx` - 加载指示器
- `placeholder.tsx` - 占位符组件

## 入口与启动

### 核心工具
- `cn` 工具函数 (`../lib/utils.ts`) - CSS 类名合并
- 使用 `class-variance-authority` 定义组件变体

## 设计系统

### 变体系统
组件使用 `cva` (class-variance-authority) 定义变体：
```typescript
const buttonVariants = cva(
  "基础样式",
  {
    variants: {
      variant: { default, destructive, outline, ... },
      size: { default, sm, lg, icon, ... }
    }
  }
)
```

### 可访问性
- 使用 Radix UI 提供完整的可访问性支持
- 语义化 HTML 结构
- 键盘导航支持

## 关键依赖与配置

### 核心依赖
- `@radix-ui/react-slot` - 插槽组件
- `@radix-ui/react-separator` - 分隔线
- `class-variance-authority` - 变体系统
- `clsx` + `tailwind-merge` - 样式工具

## 测试与质量

目前无组件测试。建议添加：
- 组件渲染测试
- 交互行为测试
- 可访问性测试

## 常见问题 (FAQ)

**Q: 如何创建新的 UI 组件？**
A: 参考 `button.tsx` 的模式，使用 `cva` 定义变体，集成 `cn` 工具函数。

**Q: 如何自定义组件样式？**
A: 通过 `className` prop 传递 Tailwind 类名，组件会自动合并样式。

## 相关文件清单

- `ui/button.tsx` - 按钮组件
- `ui/card.tsx` - 卡片组件
- `ui/separator.tsx` - 分隔线组件
- `theme/themeProvider.tsx` - 主题提供器
- `theme/themeSwitcher.tsx` - 主题切换器
- `header.tsx` - 页面头部
- `heading.tsx` - 标题组件
- `spinner.tsx` - 加载指示器
- `placeholder.tsx` - 占位符组件

## 变更记录 (Changelog)

### 2025-11-25 09:56:41
- **初始化**: 创建模块文档
- **组件**: 记录组件分类和设计系统
- **工具**: 记录样式工具和变体系统