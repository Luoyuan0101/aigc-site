export const site = {
  title: "AIGC 是什么",
  subtitle: "给高中生的 AIGC 科普站",
  course: "AI 前沿挑战实验室 · 任务三 · 项目方向调研",
  date: "2026 年 10 月",
};

export const navItems = [
  { href: "/", label: "首页" },
  { href: "/what", label: "AIGC 是什么" },
  { href: "/trends", label: "现在在做什么" },
  { href: "/cases", label: "案例" },
  { href: "/limits", label: "现存局限" },
  { href: "/direction", label: "我的方向" },
];

/* ---------------- 一、AIGC 是什么 ---------------- */
export const definition = {
  full: "Artificial Intelligence Generated Content",
  cn: "人工智能生成内容",
  one: "指利用大语言模型、多模态模型，自动或辅助人类生成文本、图像、音频、视频、代码、思维导图等全新内容。",
  contrast: [
    {
      tag: "传统 AI",
      title: "识别与判断",
      desc: "看一张图，判断它是猫还是狗；读一段话，判断它是正面还是负面。本质是给已有数据贴标签。",
      items: ["图像分类", "情感分析", "目标检测", "语音识别"],
      tone: "slate" as const,
    },
    {
      tag: "AIGC",
      title: "创造新内容",
      desc: "不是判断，而是凭空产出一份此前并不存在的东西：一篇文章、一张画、一段代码、一个知识图谱。",
      items: ["文本生成", "图像生成", "音视频生成", "代码生成"],
      tone: "violet" as const,
    },
  ],
  modals: [
    { name: "文本", eg: "文章、对话、代码、思维导图" },
    { name: "图像", eg: "插画、海报、UI 界面、产品原型" },
    { name: "音频", eg: "配音、音乐、语音克隆" },
    { name: "视频", eg: "短片、分镜、数字人播报" },
    { name: "3D", eg: "三维模型、场景资产" },
  ],
  layer: "AIGC 属于 AI 应用层方向 —— 底层是模型能力，上面直接对接人要用的东西。",
};

/* ---------------- 二、当下 AIGC 领域正在做什么 ---------------- */
export type TrendProject = { name: string; desc: string };

export type Trend = {
  no: string;
  id: string;
  title: string;
  level: string;
  accent: string;
  tint: string;
  summary: string;
  points: string[];
  projects: TrendProject[];
  warn?: string;
  trio?: { name: string; tag: string; desc: string }[];
  chart?: {
    title: string;
    source: string;
    note: string;
    bars: { year: string; value: string; pct: number; num: string }[];
  };
};

export const trends: Trend[] = [
  {
    no: "01",
    id: "multimodal",
    title: "多模态统一模型",
    level: "前沿研究",
    accent: "#F19CBB",
    tint: "#FFD1DC",
    summary:
      "行业目标不再是单独生成文字或图片，而是一个模型同时看懂、生成文本、图像、音频、3D 模型。",
    points: [
      "2026 年的新趋势：从「内容生成」走向「系统级交付」——模型不再只是画一张图，而是能围绕一个复杂目标，持续理解、规划、执行、检查和修正。",
      "研究重点：降低不同模态之间的转换误差，让模型理解图文之间的逻辑关联。",
      "关键跨越：从「生成素材」到「交付完整作品」。",
    ],
    projects: [
      { name: "商汤 SenseNova U1 Pro", desc: "面向长程任务的交付级原生多模态智能体基座" },
      { name: "字节 Mamoda2.5", desc: "统一理解与生成的 AR-Diffusion 框架" },
      { name: "智象未来 HiDream-O1-Video-1.0", desc: "原生全模态视频生成模型" },
    ],
  },
  {
    no: "02",
    id: "vertical",
    title: "垂直领域 AIGC 落地",
    level: "教育 · 科研 · 工业",
    accent: "#F0AE85",
    tint: "#FFDCC5",
    summary: "不再只做通用聊天，而是把 AIGC 塞进专业场景。",
    points: [
      "教育：根据教材自动生成思维导图、习题、知识点讲解；用代码作为中间表示来生成教学视频，成本可降至传统方法的 0.3%。",
      "代码：AI 代码助手辅助写网页、程序，甚至能通过「Vibe Coding」方式让教师以低代码方式开发教学工具。",
      "设计：自动生成 UI 界面、产品原型图。",
    ],
    warn: "局限：垂直场景下，AI 容易产生知识幻觉，编造不存在的事实，输出内容必须人工校验。",
    projects: [],
  },
  {
    no: "03",
    id: "agent",
    title: "智能体 Agent",
    level: "非常热门",
    accent: "#B4A2E0",
    tint: "#DFD4F5",
    summary:
      "2026 年，一场从「对话 AI」到「行动 AI」的变革正在发生。智能体是具备自主感知、记忆、决策、交互与执行能力的智能系统，可以自主拆解任务、调用工具、连续完成复杂工作。",
    points: [
      "举例：给 AI 一段教材原文，AI 自主读取文本 → 提取知识点 → 梳理层级 → 生成知识图谱，全程自动执行，不需要人一步步下达指令。",
    ],
    projects: [],
    chart: {
      title: "全球日活智能体数（DAA, Daily Active Agents）",
      source: "IDC《DAA 研究报告》，2026 世界人工智能大会（WAIC 2026）发布",
      bars: [
        { year: "2025", value: "2860 万", pct: 1.3, num: "2,860 万" },
        { year: "2026", value: "7940 万", pct: 3.6, num: "7,940 万" },
        { year: "2030", value: "22.16 亿", pct: 100, num: "22.16 亿" },
      ],
      note: "DAA 由百度创始人李彦宏在 Create 2026 大会上首次提出，用来衡量每天有多少智能体真正进入业务流程、完成任务并创造价值。",
    },
  },
  {
    no: "04",
    id: "safety",
    title: "可控生成与内容安全",
    level: "规则与边界",
    accent: "#8FD9B6",
    tint: "#C9F0DE",
    summary: "研究如何让 AI 严格按照人的要求输出，减少跑偏；同时研究内容审核、版权问题。",
    points: [
      "2026 年 5 月起，中央网信办要求短视频发布时必须标注是否「含有 AI 生成内容」。",
      "字节跳动已与美国电影协会达成协议，建立 AI 生成模型的知识产权保护合作框架。",
    ],
    warn: "痛点：AI 训练数据来自互联网，存在版权争议；容易生成虚假、有害内容。",
    projects: [],
  },
  {
    no: "05",
    id: "local",
    title: "轻量化本地 AIGC 模型",
    level: "个人可用",
    accent: "#8FC7E6",
    tint: "#CCE8F7",
    summary:
      "把大模型压缩变小，可以在个人电脑本地运行，不用联网调用云端 API，保护数据隐私。",
    points: [
      "2026 年开源模型已形成三足鼎立格局：Gemma 专治低显存，Qwen 中文碾压全场，Llama 长上下文无敌。",
    ],
    projects: [],
    trio: [
      { name: "Gemma", tag: "低显存", desc: "用极小参数量逼近中大型模型推理极限，适合单卡开发者。" },
      { name: "Qwen", tag: "中文强", desc: "中英双语本土化，支持多模态，可在其上搭建应用。" },
      { name: "Llama", tag: "长上下文", desc: "支持最高 512K Token 上下文窗口，适合处理长文档。" },
    ],
  },
];

/* ---------------- 三、案例 ---------------- */
export const cases = [
  {
    group: "开源 AIGC 基础模型",
    accent: "#B4A2E0",
    items: [
      {
        name: "Qwen 3.6（通义千问）",
        org: "阿里",
        desc: "Apache 2.0 协议，主打中英双语本土化，支持多模态，开发者可以在之上搭建网站应用。",
        tags: ["开源", "多模态", "中文友好"],
      },
      {
        name: "Llama 4",
        org: "Meta",
        desc: "支持最高 512K Token 的上下文窗口，适合需要处理长文档的场景。",
        tags: ["长上下文", "开源"],
      },
      {
        name: "Gemma 4",
        org: "Google",
        desc: "用极小参数量逼近中大型模型推理极限，适合单卡开发者。",
        tags: ["轻量", "本地部署"],
      },
    ],
  },
  {
    group: "教育领域 AIGC 案例",
    accent: "#8FD9B6",
    items: [
      {
        name: "Code2Video",
        org: "ICML 2026 论文",
        desc: "通过编写可执行的 Python 程序来生成教学视频，性能比直接代码生成提升 40%，可产出媲美人工教程的视频。",
        tags: ["教学视频", "代码驱动"],
      },
      {
        name: "CogEvol",
        org: "自动学习环境生成",
        desc: "自动生成学习环境（如幻灯片），中位生成时间仅 17 秒。",
        tags: ["效率", "自动化"],
      },
    ],
  },
  {
    group: "学生 AI 项目参考",
    accent: "#F0AE85",
    items: [
      {
        name: "《生境方舟》",
        org: "高中生借助腾讯 CodeBuddy 开发",
        desc: "社区生态综合服务平台，集合动植物科普、花期查询、生态课程预约等功能，搭配 3D 建模与云端部署。",
        tags: ["学生作品", "3D + 云端"],
      },
      {
        name: "两个 16 岁高中生的 AI 项目",
        org: "校园共享算力",
        desc: "共享显卡和 API 额度，让全校同学免费用上 AI，并计划用 AI 自动生成游戏素材、地图和剧情。",
        tags: ["共享算力", "校园"],
      },
    ],
  },
  {
    group: "网站生成工具",
    accent: "#8FC7E6",
    items: [
      {
        name: "v0.dev",
        org: "Vercel",
        desc: "AI 直接生成 React + Tailwind 网页界面，与 Next.js 技术栈完全契合。",
        tags: ["React", "Tailwind"],
      },
      {
        name: "Obsidian / MindMaster AI 插件",
        org: "知识管理",
        desc: "输入文字，自动生成思维导图或知识图谱。",
        tags: ["思维导图", "知识图谱"],
      },
    ],
  },
];

/* ---------------- 四、现存局限 ---------------- */
export const limits = [
  {
    no: "1",
    title: "知识幻觉",
    desc: "AI 会编造不存在的知识点、文献，理科场景容易出错。",
    fix: "凡是关键结论，都要回到教材或权威来源核对一遍。",
  },
  {
    no: "2",
    title: "长文本理解有限",
    desc: "面对整本高中教材这种长文档，容易丢失前后逻辑。",
    fix: "把长文档按章拆开，分段处理，再人工把层级拼回去。",
  },
  {
    no: "3",
    title: "可控性不足",
    desc: "输出结果不稳定，每次生成的图谱结构差异大。",
    fix: "固定提示词模板与输出格式，让结果可复现。",
  },
  {
    no: "4",
    title: "版权问题",
    desc: "训练素材版权边界模糊。2026 年上海法院判决明确简单提示词不受版权保护，提示创作者须详细记录人类的创造性贡献。",
    fix: "保留提示词迭代日志、参数调整记录，为原创部分留证据。",
  },
  {
    no: "5",
    title: "数据隐私与安全",
    desc: "人脸、人声等可能触发敏感个人信息和深度合成专门规则，处理生物识别信息需取得个人单独同意。",
    fix: "不上传含人脸的素材，涉及个人信息先取得同意。",
  },
];

/* ---------------- 五、我的方向 ---------------- */
export const directions = [
  {
    key: "A",
    title: "高中教材知识图谱生成网站",
    chosen: false,
    desc: "用 AIGC 技术，输入教材章节内容，自动提取知识点、梳理层级关系、生成可视化知识图谱。",
    why: "直接对应任务二的「学科知识图谱」需求，有明确的应用场景。",
    tech: ["开源大模型 API（如 Qwen）", "ECharts 或 D3.js", "Next.js 搭站"],
  },
  {
    key: "B",
    title: "AI 辅助作业反馈工具",
    chosen: false,
    desc: "学生上传作业（拍照或文字），AI 给出初步反馈（如「这道题的解题步骤正确但最后计算错误」），并标注哪些地方需要人工二次确认。",
    why: "回应了「知识幻觉」的局限 —— AI 只做辅助，最终判断权在人。",
    tech: ["多模态模型识别图片", "结构化输出反馈", "人工复核标记"],
  },
  {
    key: "C",
    title: "AIGC 科普网站",
    chosen: true,
    desc: "把这次调研的内容做成一个面向高中生的 AIGC 科普网站，用通俗的语言解释多模态模型、智能体、内容安全等概念，配上案例和来源链接。",
    why: "最适合作为第一次建站练习 —— 调研材料已经现成。",
    tech: ["Next.js + TypeScript", "Tailwind 排版", "卡片式布局 + 来源可追溯"],
  },
];

/* ---------------- 六、调研来源 ---------------- */
export const sources = [
  { name: "商汤科技 WAIC 2026 发布", topic: "多模态模型从生成走向交付" },
  { name: "字节 Mamoda2.5 论文", topic: "AR-Diffusion 统一框架" },
  { name: "新华网 AI 智能体报道", topic: "智能体从对话走向行动" },
  { name: "中伦律师事务所分析", topic: "AI 生成内容的法律风险与监管" },
  { name: "腾讯云开发者社区", topic: "开源大模型本地部署测评" },
  { name: "Code2Video 论文（ICML 2026）", topic: "代码驱动的教育视频生成" },
  { name: "2026 北京青少年 AI 实践活动", topic: "学生 AI 项目案例" },
  { name: "IDC《DAA 研究报告》｜WAIC 2026", topic: "全球日活智能体数预测" },
];
