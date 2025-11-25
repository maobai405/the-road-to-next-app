[根目录](../../CLAUDE.md) > [src](../) > **app**

# app 模块 - Next.js App Router

## 模块职责

`app` 目录包含 Next.js App Router 的所有路由和页面组件，采用基于文件系统的路由系统。

## 入口与启动

### 根布局 (`layout.tsx`)
- 提供全局 HTML 结构和字体配置
- 集成主题提供器 (ThemeProvider)
- 包含全局头部组件 (Header)

### 首页 (`page.tsx`)
- 应用入口页面
- 提供导航到票务页面的链接

## 路由结构

```
app/
├── layout.tsx              # 根布局
├── page.tsx                # 首页 (/)
├── tickets/                # 票务功能
│   ├── page.tsx            # 票务列表页 (/tickets)
│   ├── [id]/               # 动态路由
│   │   ├── page.tsx        # 票务详情页 (/tickets/[id])
│   │   ├── loading.tsx     # 加载状态
│   │   └── not-found.tsx   # 404 页面
│   └── error.tsx           # 错误边界
├── global-not-found.tsx    # 全局 404 页面
└── globals.css             # 全局样式
```

## 对外接口

### 页面路由
- `/` - 首页
- `/tickets` - 票务列表页
- `/tickets/[id]` - 票务详情页

### 错误处理
- 全局 404 页面
- 路由级错误边界
- 加载状态组件

## 关键依赖与配置

### 字体配置
- Geist Sans (主字体)
- Geist Mono (等宽字体)

### 主题系统
- 集成 next-themes
- 支持深色/浅色模式切换

## 测试与质量

目前无测试配置。建议添加：
- 页面渲染测试
- 路由导航测试
- 错误边界测试

## 常见问题 (FAQ)

**Q: 如何添加新页面？**
A: 在 `app` 目录下创建新的文件夹和 `page.tsx` 文件。

**Q: 如何配置页面元数据？**
A: 在页面组件中使用 `export const metadata` 或布局组件中配置。

## 相关文件清单

- `layout.tsx` - 根布局
- `page.tsx` - 首页
- `tickets/page.tsx` - 票务列表页
- `tickets/[id]/page.tsx` - 票务详情页
- `globals.css` - 全局样式

## 变更记录 (Changelog)

### 2025-11-25 09:56:41
- **初始化**: 创建模块文档
- **路由**: 记录路由结构和页面职责
- **配置**: 记录字体和主题配置