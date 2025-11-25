[根目录](../../CLAUDE.md) > [src](../) > **lib**

# lib 模块 - 工具库和配置

## 模块职责

`lib` 目录包含应用的工具函数、配置文件和共享逻辑，为其他模块提供基础设施支持。

## 核心功能

### 数据库配置 (`db.ts`)
- Drizzle ORM 数据库客户端配置
- PostgreSQL 连接管理
- 数据库模式集成

### 工具函数 (`utils.ts`)
- `cn()` - CSS 类名合并工具
- 集成 `clsx` 和 `tailwind-merge`

## 入口与启动

### 数据库初始化
```typescript
// db.ts
const client = postgres(process.env.DATABASE_URL ?? "", { prepare: false });
export const db = drizzle({ client, schema });
```

### 样式工具
```typescript
// utils.ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## 关键依赖与配置

### 数据库
- `drizzle-orm` - ORM 框架
- `postgres` - PostgreSQL 客户端
- 环境变量: `DATABASE_URL`

### 样式工具
- `clsx` - 条件类名合并
- `tailwind-merge` - Tailwind 类名冲突解决

## 数据模型

### 数据库连接
- 使用连接池管理数据库连接
- 支持类型安全的查询操作
- 集成应用的所有数据表模式

## 测试与质量

目前无工具函数测试。建议添加：
- 工具函数单元测试
- 数据库连接测试
- 样式工具测试

## 常见问题 (FAQ)

**Q: 如何配置数据库连接？**
A: 设置 `DATABASE_URL` 环境变量，指向 PostgreSQL 数据库。

**Q: `cn` 函数有什么作用？**
A: 合并多个 CSS 类名，解决 Tailwind 类名冲突，支持条件类名。

## 相关文件清单

- `db.ts` - 数据库配置
- `utils.ts` - 工具函数

## 变更记录 (Changelog)

### 2025-11-25 09:56:41
- **初始化**: 创建模块文档
- **配置**: 记录数据库和工具函数配置
- **工具**: 记录样式工具的使用