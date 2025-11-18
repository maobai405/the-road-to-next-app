# Commit Message 规范

本项目使用 **commitlint** 来强制执行 commit 消息规范。

## ⚠️ 重要提示

**Emoji 是强制要求的!** 所有 commit 消息都必须以 emoji 开头,否则会被拒绝。

## 📝 格式要求

```
<emoji> <type>(scope): <subject>
```

**必须严格遵循此格式!**

### 参数说明

- **emoji** (必需): 表示提交类型的 emoji 图标,必须位于开头
- **type** (必需): 提交类型,必须是以下之一
- **scope** (可选): 影响范围,如 `auth`, `api`, `ui` 等
- **subject** (必需): 简短描述(3-72 个字符)

## ✨ 提交类型 (Type 与 Emoji 对照表)

每个 type 都有对应的推荐 emoji,虽然可以使用其他 emoji,但建议使用标准 emoji 保持一致性。

| Type | 推荐 Emoji | 说明 | 示例 |
|------|-------|------|------|
| `feat` | ✨ | 新功能 | `✨ feat(auth): add OAuth login` |
| `fix` | 🐛 | Bug 修复 | `🐛 fix(button): correct hover state` |
| `docs` | 📝 | 文档更新 | `📝 docs(readme): update install guide` |
| `style` | 💄 | 代码格式 | `💄 style(components): format code` |
| `refactor` | ♻️ | 重构 | `♻️ refactor(api): simplify service` |
| `perf` | ⚡ | 性能优化 | `⚡ perf(images): optimize loading` |
| `test` | ✅ | 测试相关 | `✅ test(auth): add login tests` |
| `build` | 📦 | 构建系统 | `📦 build(deps): upgrade next.js` |
| `ci` | 👷 | CI 配置 | `👷 ci(github): add workflow` |
| `chore` | 🔧 | 其他杂项 | `🔧 chore(git): add commitlint` |
| `revert` | ⏪ | 回退提交 | `⏪ revert(api): rollback changes` |

## ✅ 正确示例

```bash
# 完整格式 (emoji + type + scope + subject)
git commit -m "✨ feat(auth): add OAuth2 login support"
git commit -m "🐛 fix(api): handle null user data"

# 不带 scope (emoji + type + subject)
git commit -m "✨ feat: add dark mode support"
git commit -m "📝 docs: update contributing guide"

# 更多示例
git commit -m "♻️ refactor(hooks): simplify state logic"
git commit -m "⚡ perf(query): optimize database calls"
git commit -m "✅ test(login): add e2e tests"
```

## ❌ 错误示例

```bash
# ❌ 缺少 emoji (会被拒绝!)
git commit -m "feat(auth): add login"

# ❌ Type 必须小写
git commit -m "✨ FEAT: add feature"

# ❌ Subject 不能为空
git commit -m "✨ feat:"

# ❌ Subject 太短(少于 3 个字符)
git commit -m "✨ feat: ok"

# ❌ Type 不在允许列表中
git commit -m "✨ feature: add login"

# ❌ 缺少冒号
git commit -m "✨ feat add login"

# ❌ Scope 不能大写
git commit -m "✨ feat(Auth): add login"
```

## 🔧 规则详情

- **Emoji**:
  - ✅ 必须存在,位于消息开头
  - ✅ 建议使用对应 type 的推荐 emoji
  - ✅ 与 type 之间需要一个空格

- **Type**:
  - ✅ 必须小写
  - ✅ 必须是允许列表中的一个

- **Scope**:
  - ⚠️ 可选
  - ✅ 如果提供,必须小写,使用 kebab-case

- **Subject**:
  - ✅ 最小长度: 3 个字符
  - ✅ 最大长度: 72 个字符
  - ✅ 不能以句号结尾
  - ✅ 首字母推荐小写
  - ✅ 使用现在时态

## 💡 最佳实践

1. **Emoji 必须存在**: 所有提交都必须以 emoji 开头
2. **使���推荐 Emoji**: 保持团队提交历史的一致性
3. **Scope 有助于定位**: 对于大型项目,建议添加 scope
4. **Subject 要清晰**: 简洁说明做了什么改动
5. **使用现在时**: "add feature" 而不是 "added feature"
6. **首字母小写**: "add login" 而不是 "Add login"

## 🛠️ 测试你的 commit 消息

在实际提交前,你可以测试 commit 消息是否符合规范:

```bash
# 测试符合规范的消息
echo "✨ feat(auth): add login" | pnpm dlx commitlint

# 测试不符合规范的消息(会显示错误)
echo "feat: add login" | pnpm dlx commitlint
```

## 🚀 快速参考

复制以下模板开始你的 commit:

```bash
# 新功能
git commit -m "✨ feat(scope): "

# Bug 修复
git commit -m "🐛 fix(scope): "

# 文档更新
git commit -m "📝 docs(scope): "

# 代码格式
git commit -m "💄 style(scope): "

# 重构
git commit -m "♻️ refactor(scope): "

# 性能优化
git commit -m "⚡ perf(scope): "

# 测试
git commit -m "✅ test(scope): "

# 构建系统
git commit -m "📦 build(scope): "

# CI 配置
git commit -m "👷 ci(scope): "

# 其他杂项
git commit -m "🔧 chore(scope): "
```

## 📚 更多信息
- [Gitmoji 参考](https://gitmoji.dev/)
