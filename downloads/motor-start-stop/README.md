# 电机启停 · 标准控制电路示例工程

## 项目概述

本示例为 EPLAN Electric P8 入门篇主题 8 的配套工程，包含电机启停（点动+自锁+过载故障指示）完整控制电路。

## 文件清单

| 文件 | 说明 |
|------|------|
| `motor-start-stop.elk` | EPLAN 项目文件（即将上线） |
| `parts-list.csv` | BOM 部件清单（可直接导入 EPLAN 部件库） |
| `wiring-diagram.pdf` | 原理图 PDF 导出（即将上线） |
| `terminal-chart.pdf` | 端子排图表（即将上线） |

## 部件清单 (BOM)

| 序号 | 部件编号 | 名称 | 数量 | 厂商 |
|------|----------|------|------|------|
| 1 | QF1-3 | 微型断路器 MC3320B-3P | 1 | ABB |
| 2 | KM | 交流接触器 AF09-30-10 | 1 | ABB |
| 3 | FR | 热继电器 TF42-13 | 1 | ABB |
| 4 | SB1 | 急停按钮急停按钮 M22-PV13 | 1 | ABB |
| 5 | SB2 | 点动按钮（绿色）M22-PV11 | 1 | ABB |
| 6 | SB3 | 自锁按钮（绿色）M22-PV11 | 1 | ABB |
| 7 | HL | 故障指示灯（红色）M22-LED230V-R | 1 | ABB |
| 8 | M | 三相异步电机 5.5kW | 1 | - |

## 使用方法

1. 在 EPLAN 中新建项目，选择 GB 模板
2. 导入 `parts-list.csv` 到部件库
3. 新建多线原理图页
4. 按照视频中心 V2 第 6 讲的步骤绘制电路
5. 生成端子排图表和 BOM 报表

## 配套视频

- [B 站工控平台 · 第 6 讲 · 项目结构搭建](https://eplan-2025-learn-site.vercel.app/videos/index.html#v2)
- [B 站杨小飞 · 第 6 课 · 点动+自锁+故障指示](https://eplan-2025-learn-site.vercel.app/videos/index.html#v6)

## 学习建议

1. 先看视频了解整体流程
2. 照着视频自己重画一遍
3. 对照本 BOM 检查部件是否齐全
4. 尝试修改电路（如增加正反转）
