# MyProject

一个基于 React + TypeScript + Webpack 的现代前端项目模板，集成了完整的开发工具链和最佳实践。

## 🚀 技术栈

### 核心框架
- **React 19.1.0** - 用户界面库
- **TypeScript 5.8.3** - 类型安全的JavaScript超集
- **React Router Dom 7.6.2** - 客户端路由

### 构建工具
- **Webpack 5.99.9** - 模块打包器
- **SWC** - 高性能JavaScript/TypeScript编译器
- **ts-loader** - TypeScript加载器

### 样式方案
- **Tailwind CSS 4.1.10** - 实用优先的CSS框架
- **PostCSS** - CSS处理工具
- **Autoprefixer** - 自动添加CSS前缀

### 代码质量
- **ESLint** - 代码检查工具
- **Prettier** - 代码格式化工具
- **Airbnb TypeScript Config** - 代码规范

### 测试工具
- **BackstopJS** - 视觉回归测试
- **Jest** - JavaScript测试框架

## 📁 项目结构

```
myproject/
├── src/                    # 源代码目录
│   ├── components/         # 可复用组件
│   ├── pages/             # 页面组件
│   ├── layouts/           # 布局组件
│   ├── routes/            # 路由配置
│   ├── hooks/             # 自定义Hooks
│   ├── stores/            # 状态管理
│   ├── utils/             # 工具函数
│   ├── types/             # TypeScript类型定义
│   ├── connections/       # API连接
│   ├── abis/              # 合约ABI文件
│   ├── index.tsx          # 应用入口
│   ├── index.css          # 全局样式
│   ├── index.dev.html     # 开发环境HTML模板
│   └── index.prod.html    # 生产环境HTML模板
├── config/                 # 配置文件目录
│   ├── webpack.development.js  # 开发环境配置
│   └── webpack.production.js   # 生产环境配置
├── public/                 # 静态资源
├── dist/                   # 构建输出目录
├── docs/                   # 文档目录
├── scripts/                # 构建脚本
├── test/                   # 测试文件
├── backstop_data/          # 视觉测试数据
├── webpack.config.js       # Webpack主配置
├── tsconfig.json          # TypeScript配置
├── tsconfig.eslint.json   # ESLint专用TS配置
├── tailwind.config.js     # Tailwind配置
├── postcss.config.mjs     # PostCSS配置
├── .eslintrc              # ESLint配置
├── .eslintignore          # ESLint忽略文件
├── backstop.json          # BackstopJS配置
├── .swcrc                 # SWC配置
└── package.json           # 项目依赖和脚本
```

## 🛠️ 快速开始

### 环境要求
- Node.js >= 16.0.0
- pnpm >= 7.0.0

### 安装依赖
```bash
pnpm install
```

### 开发模式
```bash
pnpm dev
```
在 `http://localhost:9000` 查看应用

### 构建项目
```bash
# 开发环境构建
pnpm build:dev

# 生产环境构建
pnpm build:prod
```

## 📝 可用脚本

| 命令 | 描述 |
|------|------|
| `pnpm dev` | 启动开发服务器 |
| `pnpm build:dev` | 开发环境构建 |
| `pnpm build:prod` | 生产环境构建 |
| `pnpm lint` | 运行ESLint检查 |
| `pnpm lint:fix` | 自动修复ESLint问题 |
| `pnpm test:ui` | 运行视觉回归测试 |

## ⚙️ 配置说明

### Webpack配置
- **开发环境**: 热更新、源码映射、友好错误提示
- **生产环境**: 代码压缩、资源优化、多进程构建

### TypeScript配置
- 目标: ES2020
- 模块: ESNext
- JSX: react-jsx
- 严格模式启用

### ESLint配置
- Airbnb TypeScript规范
- React Hooks检查
- Prettier集成
- 导入规则检查

### Tailwind CSS
- 实用优先的CSS框架
- 支持PostCSS处理
- 自动清除未使用的样式

## 🧪 测试

### 视觉回归测试
```bash
# 创建参考图片
pnpm backstop reference

# 运行视觉测试
pnpm test:ui

# 批准测试结果
pnpm backstop approve
```

## 🔧 开发工具

### 代码格式化
项目集成了Prettier，支持保存时自动格式化

### 代码检查
ESLint配置了严格的代码规范，包括：
- TypeScript类型检查
- React最佳实践
- 导入排序
- 代码复杂度控制

### 资源处理
- 图片资源自动优化和哈希命名
- CSS自动提取和压缩
- JavaScript代码分割和懒加载

## 🚀 部署

### 构建优化
生产环境构建包含：
- 代码压缩和混淆
- 移除console语句
- CSS压缩优化
- 资源哈希命名
- 多进程并行处理

### 静态部署
构建完成后，`dist/` 目录包含所有静态资源，可直接部署到：
- Nginx
- Apache
- CDN服务
- 静态托管平台

## 📚 开发指南

### 组件开发
- 使用TypeScript定义Props类型
- 遵循React Hooks最佳实践
- 保持组件单一职责原则

### 样式开发
- 优先使用Tailwind CSS类
- 自定义样式使用CSS Modules或Styled Components
- 保持响应式设计

### 状态管理
- 本地状态使用useState/useReducer
- 全局状态管理使用Context或第三方库
- 异步状态处理使用自定义Hooks

## 🤝 贡献指南

1. Fork项目
2. 创建功能分支
3. 提交更改
4. 运行测试和代码检查
5. 创建Pull Request

### 提交规范
遵循Conventional Commits规范：
```
feat: 新功能
fix: 修复问题
docs: 文档更新
style: 代码格式
refactor: 代码重构
test: 测试相关
chore: 构建工具
```

## 📄 许可证

ISC License

## 👥 维护者

- 项目维护者: [Your Name]
- 技术支持: [Support Email]

---

**注意**: 该项目模板集成了现代前端开发的最佳实践，适合中大型React项目开发。
