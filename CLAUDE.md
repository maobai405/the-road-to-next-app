# the-road-to-next-app - Next.js 现代化应用

> 专注于现代 React 开发最佳实践的 Next.js 应用项目

## 项目愿景

构建一个展示现代 Next.js 开发最佳实践的示例应用，涵盖：
- 服务器端渲染与客户端组件的合理使用
- 数据库驱动的全栈应用架构
- 现代化的 UI 组件系统
- 严格的质量标准和自动化工具链

## 架构总览

本项目采用 **Next.js App Router** 架构，结合 **Drizzle ORM** 进行数据库操作，使用 **Radix UI** 和 **Tailwind CSS** 构建现代化界面。

### 技术栈
- **框架**: Next.js 16.0.3 (App Router)
- **运行时**: React 19.2.0 + React DOM 19.2.0
- **数据库**: PostgreSQL + Drizzle ORM
- **样式**: Tailwind CSS 4 + Radix UI
- **工具链**: TypeScript + Ultracite (Biome)
- **包管理**: pnpm

### 模块结构图

```mermaid
graph TD
    A["(根) the-road-to-next-app"] --> B["src"];
    B --> C["app"];
    C --> D["首页"];
    C --> E["tickets"];
    E --> F["列表页"];
    E --> G["详情页"];
    B --> H["components"];
    H --> I["ui"];
    H --> J["theme"];
    H --> K["通用组件"];
    B --> L["features"];
    L --> M["ticket"];
    M --> N["server"];
    M --> O["components"];
    B --> P["lib"];
    P --> Q["数据库"];
    P --> R["工具函数"];
    A --> S["drizzle"];
    S --> T["schema"];
    S --> U["migrations"];
    S --> V["seed"];

    click D "./src/app/page.tsx" "查看首页代码"
    click F "./src/app/tickets/page.tsx" "查看票务列表页"
    click G "./src/app/tickets/[id]/page.tsx" "查看票务详情页"
    click I "./src/components/ui/" "查看 UI 组件"
    click J "./src/components/theme/" "查看主题组件"
    click N "./src/features/ticket/server/" "查看票务服务端逻辑"
    click O "./src/features/ticket/components/" "查看票务组件"
    click Q "./src/lib/db.ts" "查看数据库配置"
    click T "./drizzle/schema.ts" "查看数据库模式"
```

## 模块索引

| 模块路径 | 职责描述 | 入口文件 | 测试状态 |
|---------|----------|----------|----------|
| `src/app` | 应用路由和页面组件 | `layout.tsx` | 无测试 |
| `src/components` | 可复用 UI 组件库 | `button.tsx` | 无测试 |
| `src/features/ticket` | 票务功能模块 | `server/index.ts` | 无测试 |
| `src/lib` | 工具库和配置 | `db.ts` | 无测试 |
| `drizzle` | 数据库模式与迁移 | `schema.ts` | 无测试 |

## 运行与开发

### 环境要求
- Node.js (推荐 18+)
- pnpm
- PostgreSQL 数据库

### 开发命令
```bash
# 安装依赖
pnpm install

# 开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start

# 代码质量检查
pnpm lint

# 自动修复代码
pnpm fix

# TypeScript 类型检查
pnpm type-check

# 数据库种子数据
pnpm db:seed
```

### 环境变量
创建 `.env.local` 文件：
```env
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
```

## 测试策略

目前项目尚未配置测试框架。建议添加：
- **单元测试**: Jest + React Testing Library
- **集成测试**: Playwright
- **数据库测试**: 使用测试数据库

## 编码规范

本项目使用 **Ultracite**（基于 Biome 的零配置预设）强制执行代码质量标准：

### 核心原则
- 编写**可访问、高性能、类型安全且可维护**的代码
- 注重清晰度和明确的意图，而非简洁性

### 关键实践
- 使用显式类型增强函数参数和返回值的清晰度
- 优先使用 `unknown` 而非 `any`
- 使用箭头函数处理回调和短函数
- 优先使用 `for...of` 循环而非 `.forEach()`
- 使用可选链和空值合并进行安全的属性访问
- 使用 `const` 作为默认选择，仅在需要重新赋值时使用 `let`

### React 最佳实践
- 使用函数组件而非类组件
- 仅在顶层调用 hooks
- 正确指定所有 hook 依赖项
- 为可迭代元素使用 `key` prop
- 使用语义化 HTML 和 ARIA 属性

## AI 使用指引

### 代码生成
- 优先使用 Server Components 进行异步数据获取
- 使用 Drizzle ORM 进行类型安全的数据库操作
- 遵循 Ultracite 代码质量标准

### 组件开发
- 使用 Radix UI 构建可访问的组件
- 使用 Tailwind CSS 进行样式设计
- 使用 `cn` 工具函数合并 CSS 类名

### 数据层
- 使用 Drizzle 定义数据库模式
- 在 Server Actions 中处理数据操作
- 使用类型推断确保类型安全

## 变更记录 (Changelog)

### 2025-11-25 09:56:41
- **初始化**: 创建项目 AI 上下文文档
- **架构**: 识别项目模块结构和技术栈
- **文档**: 生成根级和模块级 CLAUDE.md 文件
- **覆盖率**: 扫描了关键配置文件、组件和数据库模式

---

*本文档由 Claude Code 自动生成，最后更新于 2025-11-25 09:56:41*