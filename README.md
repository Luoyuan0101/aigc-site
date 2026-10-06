# AIGC 是什么 · 面向高中生的 AIGC 科普网站

> AI 前沿挑战实验室 · 任务三「项目方向调研」成果
> 方向 C：把 AIGC 领域调研做成一个面向高中生的科普网站。

## 这个网站讲什么

按「**是什么 → 现在在做什么 → 案例 → 局限 → 我的方向**」一条线组织：

| 页面 | 路径 | 内容 |
| --- | --- | --- |
| 首页 | `/` | AIGC 一句话定义、关键数据（DAA）、五大方向速览 |
| AIGC 是什么 | `/what` | 定义、与传统 AI 的区别、覆盖的内容类型 |
| 现在在做什么 | `/trends` | 多模态统一模型 / 垂直落地 / 智能体 Agent / 可控生成与内容安全 / 轻量化本地模型 |
| 案例 | `/cases` | 开源基础模型、教育实践、学生项目、建站工具 |
| 现存局限 | `/limits` | 知识幻觉、长文本、可控性、版权、隐私 + 调研来源汇总 |
| 我的方向 | `/direction` | 方向 A / B / C 对比，说明为什么先做 C，以及实施步骤 |

## 技术栈

- **Next.js 14**（App Router）—— 组织页面与路由
- **TypeScript** —— 类型检查，编译期就能发现写法问题
- **Tailwind CSS 3** —— 直接写样式类，不单独维护 CSS 文件

## 本地怎么跑起来

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev
# 终端会输出 http://localhost:3000

# 3. 浏览器打开（地址粘贴到顶部地址栏，不是搜索框）
#    http://localhost:3000

# 4. 停止：在终端按 Ctrl + C
```

打生产包（可选）：

```bash
npm run build && npm start
```

## 目录结构

```
aigc-site/
├── app/                    # 页面（App Router）
│   ├── layout.tsx          # 全局骨架：导航栏 + 页脚
│   ├── page.tsx            # 首页
│   ├── globals.css         # 全局样式与 Tailwind 引入
│   ├── what/page.tsx
│   ├── trends/page.tsx
│   ├── cases/page.tsx
│   ├── limits/page.tsx
│   └── direction/page.tsx
├── components/
│   ├── Nav.tsx             # 顶部固定导航（含移动端菜单）
│   ├── Footer.tsx          # 页脚（含来源导航）
│   └── ui.tsx              # 通用组件：标题、卡片、标签
├── lib/
│   └── content.ts          # 全站文字内容集中在这里，改文案只改这个文件
├── tailwind.config.ts      # 配色、字体、阴影、动画
└── package.json
```

> 想改内容？绝大多数情况下只需要动 `lib/content.ts`。
> 想改配色？动 `tailwind.config.ts` 里的 `colors`。

## 数据与来源

- 智能体数据：IDC《DAA 研究报告》，2026 世界人工智能大会（WAIC 2026）发布
  —— 全球日活智能体数 2025 年 2860 万个、2026 年 7940 万个、2030 年 22.16 亿个
- 多模态进展：商汤 SenseNova U1 Pro（WAIC 2026 发布）等厂商公开发布信息
- 其余来源见网站 `/limits` 页的「调研来源汇总」

## 说明

本项目为课程作业的调研成果展示，内容用于学习交流。
