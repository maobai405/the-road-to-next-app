[根目录](../CLAUDE.md) > **drizzle**

# drizzle 模块 - 数据库模式与迁移

## 模块职责

`drizzle` 目录包含数据库模式定义、迁移文件和种子数据，使用 Drizzle ORM 管理数据库结构。

## 核心组件

### 数据库模式 (`schema.ts`)
- 定义所有数据表和枚举
- 提供 TypeScript 类型推断
- 配置表结构和约束

### 迁移文件
- `0000_known_hellfire_club.sql` - 初始迁移
- 自动生成的数据库变更记录

### 种子数据 (`seed/`)
- `index.ts` - 数据库种子脚本
- 初始化测试数据

## 数据模型

### 票务表 (`tickets`)
```typescript
export const ticketsTable = pgTable("tickets", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
  title: text("title").notNull(),
  content: varchar("content", { length: 1024 }).notNull(),
  status: ticketStatus("status").notNull().default("OPEN"),
});
```

### 状态枚举
```typescript
export const ticketStatus = pgEnum("ticket_status", [
  "OPEN",
  "IN_PROGRESS",
  "DONE",
]);
```

## 入口与启动

### 模式导出
- 导出所有表和类型定义
- 提供完整的类型安全

### 迁移管理
- 使用 Drizzle Kit 生成迁移
- 支持数据库版本控制

## 关键依赖与配置

### ORM 配置
- `drizzle-orm` - 核心 ORM 功能
- `drizzle-kit` - 迁移和开发工具
- PostgreSQL 特定类型支持

### 类型安全
- 自动类型推断
- 完整的 TypeScript 集成
- 编译时类型检查

## 测试与质量

目前无数据库测试。建议添加：
- 模式验证测试
- 迁移回滚测试
- 种子数据测试

## 常见问题 (FAQ)

**Q: 如何添加新的数据表？**
A: 在 `schema.ts` 中定义新表，然后运行迁移生成命令。

**Q: 如何更新数据库模式？**
A: 修改 `schema.ts` 后运行 `drizzle-kit generate` 和 `drizzle-kit push`。

**Q: 如何运行种子数据？**
A: 使用 `pnpm db:seed` 命令初始化测试数据。

## 相关文件清单

- `schema.ts` - 数据库模式定义
- `0000_known_hellfire_club.sql` - 初始迁移
- `seed/index.ts` - 种子数据脚本
- `meta/_journal.json` - 迁移日志
- `meta/0000_snapshot.json` - 模式快照

## 变更记录 (Changelog)

### 2025-11-25 09:56:41
- **初始化**: 创建模块文档
- **模式**: 记录数据库表结构和枚举
- **迁移**: 记录迁移管理流程