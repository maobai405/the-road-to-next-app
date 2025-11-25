[根目录](../../../CLAUDE.md) > [src](../../) > [features](../) > **ticket**

# ticket 模块 - 票务功能

## 模块职责

`ticket` 模块提供完整的票务管理功能，包括票务的创建、查看、列表展示和删除操作。

## 功能特性

- 票务列表展示
- 票务详情查看
- 票务删除功能
- 状态管理 (OPEN, IN_PROGRESS, DONE)

## 入口与启动

### 服务端操作 (`server/index.ts`)
Server Actions 提供数据操作：
- `getTickets()` - 获取票务列表
- `getTicket(id)` - 获取单个票务
- `deleteTicket(id)` - 删除票务

### 客户端组件 (`components/`)
- `ticketList.tsx` - 票务列表组件
- `ticketItem.tsx` - 票务项组件

## 对外接口

### 数据模型
基于 Drizzle ORM 定义的票务表：
```typescript
interface Ticket {
  id: string;           // UUID
  createdAt: Date;      // 创建时间
  updatedAt: Date;      // 更新时间
  title: string;        // 标题
  content: string;      // 内容
  status: 'OPEN' | 'IN_PROGRESS' | 'DONE'; // 状态
}
```

### API 端点
- 页面路由: `/tickets` (列表页)
- 动态路由: `/tickets/[id]` (详情页)

## 关键依赖与配置

### 数据库操作
- 使用 Drizzle ORM 进行类型安全的数据库查询
- 集成 PostgreSQL 数据库
- 自动时间戳管理

### 状态管理
- 使用数据库枚举定义票务状态
- 自动更新 `updatedAt` 字段

## 数据模型

### 数据库表结构
- `tickets` 表包含票务所有信息
- 使用 UUID 作为主键
- 状态字段使用枚举约束

### 类型安全
- 使用 Drizzle 的类型推断
- 完整的 TypeScript 类型定义

## 测试与质量

目前无功能测试。建议添加：
- 服务端操作测试
- 组件渲染测试
- 集成测试

## 常见问题 (FAQ)

**Q: 如何添加新的票务状态？**
A: 在 `drizzle/schema.ts` 中更新 `ticketStatus` 枚举定义。

**Q: 票务删除后如何重定向？**
A: 删除操作后自动重定向到票务列表页。

## 相关文件清单

- `server/index.ts` - 服务端操作
- `components/ticketList.tsx` - 票务列表组件
- `components/ticketItem.tsx` - 票务项组件
- `../../../drizzle/schema.ts` - 数据模型定义

## 变更记录 (Changelog)

### 2025-11-25 09:56:41
- **初始化**: 创建模块文档
- **功能**: 记录票务管理功能
- **数据**: 记录数据模型和 API 接口