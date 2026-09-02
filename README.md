<div align="center">

# EPLAN 2025 学习站

**三阶主线 + 工程化交付 · 系统性掌握 EPLAN Electric P8 2025**

[![Static Site](https://img.shields.io/badge/type-static%20site-005293.svg)](https://github.com/lbl1988/EPLAN2025_Learn_Site)
[![No Backend](https://img.shields.io/badge/backend-none-success.svg)](https://github.com/lbl1988/EPLAN2025_Learn_Site)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

🌍 在线预览：[eplan-2025-learn-site.vercel.app](https://eplan-2025-learn-site.vercel.app/)　·　📦 仓库：[github.com/lbl1988/EPLAN2025_Learn_Site](https://github.com/lbl1988/EPLAN2025_Learn_Site)

</div>

---

> 参照 [tia-learn-site.onrender.com](https://tia-learn-site.onrender.com/)（西门子 TIA Portal 学习站）范式构建的 EPLAN Electric P8 2025 主题学习站。三阶课程主线 + 工程化能力横向贯穿，全网最权威视频已内嵌播放（移动端不跳转 B 站 App，符合直放偏好）。

## 快速开始

```bash
git clone https://github.com/lbl1988/EPLAN2025_Learn_Site.git
cd EPLAN2025_Learn_Site

# 任选一种本地预览方式
python -m http.server 8000        # 然后访问 http://127.0.0.1:8000/
# 或直接双击打开 index.html
```

## 站点结构

```
EPLAN2025_Learn_Site/
├── index.html              首页（三阶主线 + 工程化能力 + 视频入口）
├── css/style.css            统一样式（响应式 + EPLAN 品牌主题色）
├── courses/
│   ├── beginner.html        入门篇（8 主题）
│   ├── intermediate.html   进阶篇（8 主题）
│   └── advanced.html        精通篇（8 主题）
├── videos/
│   └── index.html           视频中心（内嵌全部权威视频）
├── engineering/
│   └── index.html           工程化能力模块（6 模块）
└── resources/
    └── index.html           资源下载（模板 / 示例工程 / 部件库 / 官方文档）
```

## 内嵌的权威视频源

| # | 来源 | 语言 | 权威性 | 嵌入方式 |
| --- | --- | --- | --- | --- |
| V1 | EPLAN 官方中文 · 入门培训 16 讲 | 中文 | ★★★★★ | B 站 iframe（JS 播放列表） |
| V2 | 工控平台 · ePLAN P8 零基础 30 讲 | 中文 | ★★★★ | B 站 iframe |
| V3 | 自学电控 · EPLAN P8 教程 15.5h 全集 | 中文 | ★★★★ | B 站 iframe |
| V4 | 吴技可施 · 一小时速学 EPLAN 绘图 | 中文 | ★★★ | B 站 iframe |
| V5 | EPLAN 官方中文 · Pro Panel 3D 系列 | 中文 | ★★★★★ | B 站 iframe（JS 播放列表） |
| V6 | 电工杨小飞 19 讲 + 张海如 66 讲 | 中文 | ★★★★ | B 站 iframe + 引导卡片 |
| V7 | 亿道/锌锦 · 2025 新功能中文图文 | 中文 | ★★★★ | 引导卡片 |

详见 [视频中心](videos/index.html)。

## 部署

纯静态站点，无后端依赖，可一键部署到任意静态托管：

- **GitHub Pages**：仓库 Settings → Pages → Source 选 `main` / `/(root)`，访问 `https://lbl1988.github.io/EPLAN2025_Learn_Site/`
- **Render / Netlify / Vercel**：连接本仓库，构建命令留空，发布目录 `.`

---

# 开发报告

> 版本：v1.0  ·  日期：2026-09-02

## 一、项目背景与目标

EPLAN Electric P8 是全球电气工程师公认的行业级 ECAD 软件，2025 版于 2024 年 9 月正式发布，引入评论导航器、宏预览、部件专属属性、符号链接图片/二维码、机械式穿线（CT 穿芯）、Cable proD 等多项关键更新。

学习痛点：

- 软件功能模块多、学习曲线陡，新手无从下手；
- 全网视频分散在 B 站、YouTube、官网、个人博客，缺乏统一入口；
- 中文系统性教程稀缺，2025 版新功能讲解更稀缺。

本项目目标：参照 TIA Portal 学习站的"三阶主线 + 工程化交付"成熟范式，构建一个 **EPLAN 2025 主题学习站**，把全网最权威的视频资源汇聚并**直接内嵌到网页内播放**（移动端不跳转 B 站 App，符合用户偏好），辅以课程大纲、工程化能力模块、资源下载，做到"看完即可上手项目"。

## 二、参考网站结构分析（tia-learn-site.onrender.com）

| 维度 | 设计要点 | 本项目沿用方案 |
| --- | --- | --- |
| 主线 | 三阶课程：入门篇 / 进阶篇 / 精通篇 | 沿用三阶结构，按 EPLAN 知识体系重新切分 |
| 横向 | 工程化能力横向贯穿（UDT/规范/版本/虚拟调试/安全） | 改造为 EPLAN 工程化：部件库/宏/项目规范/报表/3D Pro Panel/版本管理 |
| 支撑 | 课程 / 视频 / 项目库 / 仿真 / 资源 / 社区 / 工具 | 精简为 课程 / 视频 / 工程化 / 资源，聚焦"学-看-做" |
| 配套 | 绿色"配套"标记 + HMI 仿真 + 源文件下载 | 沿用"配套"标记 + 示例工程文件下载 + 内嵌视频 |

## 三、EPLAN 2025 知识体系（网站内容主线）

依据 EPLAN 官方 Release Notes、EPLAN Japan V2025 新功能白皮书、EPLAN Education Center 课程目录梳理，得到如下三阶主线：

### ① 入门篇 · 约 2 周（打基础）
- EPLAN 平台与 Electric P8 概念、ECAD vs CAD
- 项目结构：项目 / 页 / 页类型 / 图框 / 层
- 界面分区：页导航器、设备导航器、插入中心、部件管理
- 符号库与 IEC 符号、插入符号、设备标识 (DT)
- 连接与连接定义点、自动连线、电位传递
- 中断点与跨页连接、T 形连接
- 项目模板（GB / IEC / NFPA / GOST）选择
- 第一个项目：电机启停原理图

### ② 进阶篇 · 约 1 月（架构化）
- 宏：窗口宏 / 符号宏 / 页面宏，宏项目与宏值
- 部件管理：部件库、属性、功能模板、图形宏
- 端子排：端子排定义、多层端子、端子排导航器
- 电缆：电缆定义、芯线、屏蔽层、连接
- PLC：PLC 盒子、PLC 连接点、编址、总览
- 报表：报表生成、BOM/端子图表/电缆图表/部件汇总表
- 2025 新功能：评论导航器、宏预览、部件专属属性显示
- 检查与错误导航器、消息管理

### ③ 精通篇 · 约 2 月+（高级与交付）
- EPLAN Pro Panel：3D 机柜布局、布线、碰撞检查
- EPLAN Cable proD（2025 新品）：3D 虚拟布线、精确长度
- 部件数据 Portal 与厂商部件库集成
- API / 自动化脚本、Action 与脚本编程
- 数据交换：与 ERP/PLM/MCAD（Inventor/SolidWorks）联动
- EPLAN Engineering Configuration (EEC) 一体化
- 项目交付：封面/目录/安装/手册，PDF/DWG 导出
- 2025 新功能：机械式穿线（CT 穿芯）、二维码与图片链接、制造数据导出

## 四、权威视频资源清单（全网筛选，已内嵌）

筛选标准：① 厂商官方或其授权机构；② 系统化多讲合集而非零散片段；③ 真实项目实战而非纯念稿；④ 时长足够支撑学习。

| # | 来源 | 标题/系列 | 语言 | 时长/集数 | 权威性 | 嵌入方式 |
| --- | --- | --- | --- | --- | --- | --- |
| V1 | EPLAN 官方中文频道 | Electric P8 入门培训 | 中文 | 16 讲 / 2:36:08 | ★★★★★ 厂商官方 | B 站 iframe |
| V2 | 工控平台 | ePLAN P8 零基础教学 | 中文 | 30 讲 | ★★★★ 系统化零基础 | B 站 iframe |
| V3 | 自学电控 | EPLAN P8 教程全集 | 中文 | 15:34:29 | ★★★★ 超长全集 | B 站 iframe |
| V4 | 吴技可施 | 一小时速学 EPLAN 绘图 | 中文 | 41:24 | ★★★ 速成入门 | B 站 iframe |
| V5 | EPLAN 官方中文频道 | Pro Panel 3D 布局布线系列 | 中文 | 3 讲 | ★★★★★ 厂商官方 | B 站 iframe |
| V6 | 电工杨小飞 + 张海如 | EPLAN 绘图实战合集 | 中文 | 19+66 讲 | ★★★★ 中文实战 | B 站 iframe + 引导 |
| V7 | 亿道数字/山东锌锦 | 2025 新功能中文图文 | 中文 | 图文 | ★★★★ 中文解读 | 引导卡片 |

### 嵌入策略

- **B 站视频**：使用 `//player.bilibili.com/player.html?bvid=xxx&page=N&high_quality=1` iframe 嵌入，符合用户"移动端应用内直接播放，不跳转 B 站"的偏好。每个 BV 号对应一讲，按合集顺序排成播放列表。
- **2025 新功能图文**：EPLAN 2025 新功能的中文系统视频尚未发布，以亿道数字、山东锌锦等中文图文深度解读为引导卡片，配合官方 16 讲与 Pro Panel 系列食用；官方原文博客/帮助可用浏览器一键翻译成中文对照阅读。

### 选用的 B 站视频 BV 号（杨小飞合集核心讲次）

| 讲次 | BV 号 | 主题 |
| --- | --- | --- |
| 第 2 课 | BV12rCcBxESU | 菜单栏深度解析与绘图工具入门 |
| 第 4 课 | BV1iiCXBDEBV | 从实物到图纸：EPLAN 绘制并联电路 |
| 第 6 课 | BV1TzCdBjEbq | 点动+自锁+故障指示经典电机控制电路 |
| 第 17 课 | BV163CYBKEYM | 中间继电器点动控制电路 |

> 完整合集入口：https://space.bilibili.com/626562605/channel/collectiondetail?sid=6736435

## 五、网站架构设计

见上方 [站点结构](#站点结构)。

### 页面规划

- **首页**：Hero 区 + 三阶学习架构图 + 工程化能力横向贯穿 + 视频入口 + 数据统计。
- **课程三阶**：每阶列出主题清单、学习时长、配套视频、配套资源标记。
- **视频中心**：按"官方新功能 / 中文系统课 / 英文系统课 / 实战项目"分组，每个视频内嵌 iframe + 章节时间戳 + 学习要点。
- **工程化**：部件库与宏、项目规范与命名、报表与交付、3D Pro Panel、Cable proD、版本与协同。
- **资源**：项目模板、示例工程、部件库、官方文档链接。

### 设计语言

- 主题色：EPLAN 品牌蓝 `#005293` + 工程灰 `#1f2937` + 配套绿 `#16a34a`。
- 字体：系统无衬线 + 等宽数字。
- 卡片化布局、响应式断点 768/1024px。
- 沿用参考站的"绿色配套"标记语义。

## 六、技术实现方案

| 项 | 选型 | 理由 |
| --- | --- | --- |
| 形态 | 纯静态多页 HTML + CSS | 与参考站一致，部署简单（可放 Render/Netlify/GitHub Pages），无后端依赖 |
| 视频嵌入 | iframe（B 站 player / YouTube embed / Vimeo embed） | 不跳转、站内沉浸式播放，符合移动端直放偏好 |
| 交互 | 原生 JS（播放列表、章节跳转、标签切换） | 不引入框架，加载快、可控 |
| 部署 | 静态托管 | 可一键部署到 Render / Netlify / GitHub Pages |

## 七、开发里程碑

- [x] 调研参考站结构
- [x] 全网筛选权威视频并验证嵌入方式
- [x] 产出开发报告
- [x] 构建网站首页与课程三阶页
- [x] 构建视频中心并内嵌全部权威视频
- [x] 构建工程化与资源页
- [x] 本地预览验证
- [x] 推送到 GitHub 仓库
- [ ] 开启 GitHub Pages 获得公网域名

## 八、后续可选增强

1. 增加学习进度跟踪（localStorage 记录已看完的视频）。
2. 增加 2025 新功能"评论导航器/二维码链接"的交互式 HMI 仿真（参考站的 lab 思路）。
3. 接入 EPLAN Data Portal 部件检索 API，做站内部件查找。
4. 接入 EPLAN Education Center 官方 eLearning 嵌入（需注册许可，目前用引导卡片）。

---

<div align="center">

*本站为学习用途，EPLAN 为 EPLAN GmbH 注册商标，视频版权归原作者所有。*

</div>
