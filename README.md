# vue-bilibili-danmu-admin

> 由 **魅影** 维护（[www.vuphub.fun](https://www.vuphub.fun)）。基于原作者 **苏青安 / 何俊杰** 的作品进行二次修改，遵循 MIT 协议，保留原作版权信息，详见 [LICENSE](LICENSE)。

⚠️ 本项目仅供学习交流使用，禁止用于商业或非法用途。

本项目是 [`php-bilibili-danmu`](https://github.com/mywltd/php-bilibili-danmu) 的 **前端管理后台（独立构建版本）** ，用于配合弹幕服务端使用，实现**更完整的**后台控制功能。

## ❓ 为什么要单独开一个仓库？

原项目 [`php-bilibili-danmu`](https://github.com/mywltd/php-bilibili-danmu) 实际上已经内置了一个原生后台，**已可直接使用，此项目非刚需**。本项目的目标是为追求更强大后台功能的用户提供一个更完善的替代方案。

由于在推荐服务器配置时出于成本考虑，建议使用较低配置的服务器（如 **2核2G**）。这种配置在实际运行项目时并不会有明显问题，但如果尝试在服务器上直接构建本项目，性能压力会非常大，构建过程可能会失败甚至卡死。

因此，我们将前端后台代码单独抽离到此仓库，**建议用户在本地完成构建后再上传到服务器**。这并不是一项复杂的操作，欢迎动手尝试，如有困难也可以联系作者获取帮助。

---

## ✨ 功能特性

- ✅ 更细致的机器人控制
- ✅ 更优的用户交互体验
- ✅ 更清晰的使用逻辑
- ✅ 更丰富的信息展示（历史弹幕信息、礼物信息等）
- 🚧 持续扩展中...

---

## 👀 预览

| <img src="https://raw.githubusercontent.com/mywltd/vue-bilibili-danmu-admin/main/src/assets/preview/demo01.png"> | <img src="https://raw.githubusercontent.com/mywltd/vue-bilibili-danmu-admin/main/src/assets/preview/demo02.png"> |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| <img src="https://raw.githubusercontent.com/mywltd/vue-bilibili-danmu-admin/main/src/assets/preview/demo03.png"> | <img src="https://raw.githubusercontent.com/mywltd/vue-bilibili-danmu-admin/main/src/assets/preview/demo04.png"> |
| <img src="https://raw.githubusercontent.com/mywltd/vue-bilibili-danmu-admin/main/src/assets/preview/demo05.png"> | <img src="https://raw.githubusercontent.com/mywltd/vue-bilibili-danmu-admin/main/src/assets/preview/demo06.png"> |
| <img src="https://raw.githubusercontent.com/mywltd/vue-bilibili-danmu-admin/main/src/assets/preview/demo07.png"> | <img src="https://raw.githubusercontent.com/mywltd/vue-bilibili-danmu-admin/main/src/assets/preview/demo08.png"> |
| <img src="https://raw.githubusercontent.com/mywltd/vue-bilibili-danmu-admin/main/src/assets/preview/demo09.png"> | <img src="https://raw.githubusercontent.com/mywltd/vue-bilibili-danmu-admin/main/src/assets/preview/demo10.png"> |
| <img src="https://raw.githubusercontent.com/mywltd/vue-bilibili-danmu-admin/main/src/assets/preview/demo11.png"> | <img src="https://raw.githubusercontent.com/mywltd/vue-bilibili-danmu-admin/main/src/assets/preview/demo12.png"> |
| <img src="https://raw.githubusercontent.com/mywltd/vue-bilibili-danmu-admin/main/src/assets/preview/demo13.png"> | <img src="https://raw.githubusercontent.com/mywltd/vue-bilibili-danmu-admin/main/src/assets/preview/demo14.png"> |

---

## 📦 使用说明

> **本项目需要本地构建打包后上传部署，不建议在低配服务器上执行构建命令。**

### 1. 下载项目

```bash
git clone https://github.com/mywltd/vue-bilibili-danmu-admin.git
cd vue-bilibili-danmu-admin
```

### 2. 安装 Node.js

请前往官网下载安装适合你系统的版本：

👉 [https://nodejs.org/zh-cn](https://nodejs.org/zh-cn)

建议使用稳定的 LTS 版本。

### 3. 配置环境变量

复制 `.env.example` 为 `.env`：

```bash
cp .env.example .env
```

根据实际情况填写请求地址、密钥等信息，具体信息可在机器人控制台系统配置中查看。

### 4. 安装依赖 & 构建项目

```bash
npm install
npm run build
```

执行后将生成 `dist/` 目录，即为最终可部署版本。

---

## 🚀 部署方式

### ❓ 自动部署

联系作者，你总能联系到作者的

### ✅ 手动部署

将 `dist/` 文件夹复制到你的服务器上，并放置到原项目中：

```bash
# 一键部署的用户，把 dist 文件夹复制到该目录即可：
/opt/bilibili-robots/php/public/
```

默认会自动识别该目录下的静态文件并提供访问。

---

## 🧩 配套项目

[![Core](https://img.shields.io/badge/php--bilibili--danmu--core-B站交互核心模块-blueviolet?style=for-the-badge&logo=php)](https://github.com/mywltd/php-bilibili-danmu-core)
[![Docker](https://img.shields.io/badge/php--bilibili--danmu--docker-Docker一键部署容器-2496ed?style=for-the-badge&logo=docker)](https://github.com/mywltd/php-bilibili-danmu-docker)
[![API](https://img.shields.io/badge/php--bilibili--danmu-项目本体-007acc?style=for-the-badge&logo=php)](https://github.com/mywltd/php-bilibili-danmu)
[![Admin](https://img.shields.io/badge/vue--bilibili--danmu--admin-前端：管理后台-42b883?style=for-the-badge&logo=vue.js)](https://github.com/mywltd/vue-bilibili-danmu-admin)
[![Shop](https://img.shields.io/badge/vue--bilibili--danmu--shop-前端：移动端积分商城-3eaf7c?style=for-the-badge&logo=vue.js)](https://github.com/mywltd/vue-bilibili-danmu-shop)

## 致谢与版权

- 原作者：[苏青安 / 何俊杰](https://github.com/zxc7563598)
- 原仓库：[zxc7563598/vue-bilibili-danmu-admin](https://github.com/zxc7563598/vue-bilibili-danmu-admin)
- 管理后台模板原作者：Ronnie Zhang（vue-naive-admin）
- 本仓库：由 **魅影** 维护，基于原作二次修改（MIT）
- 个人网站：[www.vuphub.fun](https://www.vuphub.fun)
