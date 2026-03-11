# Cheen - mcp-audit

**项目描述**

基于MCP Server协议的前端安全依赖审计工具

工具支持本地工程和远程仓库，包含CVSS、CWE、依赖链等关键审计信息。

审计结果为标准化 markdown 文件

现在是MVP版本
## 🚀 后续可能支持

- monorepo工程如何处理
- 适配不同的仓库
- 适配不同的本地环境
- 图形展示依赖关系
……


## 审查结果示例：

# `@cheen/project`审计结果


您所审计的工程总共有 **2** 个风险漏洞。

其中：

- **严重漏洞**：共计 **0** 个
- **高危漏洞**：共计 **0** 个
- **中危漏洞**：共计 **2** 个
- **低危漏洞**：共计 **0** 个

> 说明：
>
> - **严重**漏洞被认为是极其严重的，应该立即修复。
> - **高危**漏洞被认为是严重的，应该尽快修复。
> - **中危**漏洞被认为是中等严重的，可以选择在时间允许时修复。
> - **低危**漏洞被认为是轻微的，可以根据自行需要进行修复。

下面是漏洞的详细信息




## 中危漏洞

共计 **2** 个


### `esbuild`

**漏洞描述**：

- esbuild enables any website to send any requests to the development server and read the response
  - npm漏洞编号：`1102341`
  - 漏洞详细说明：https://github.com/advisories/GHSA-67mh-4wv8-2f99
  - 漏洞等级：中危
  - 受影响的版本：`<=0.24.2`


**依赖关系**：



- `@cheen/project` / `vitest` / `vite-node` / `vite` / `esbuild`

  

- `@cheen/project` / `vitest` / `vite` / `esbuild`

  
  

**漏洞包所在目录**：

- `node_modules/esbuild`


### `vue-template-compiler`

**漏洞描述**：

- vue-template-compiler vulnerable to client-side Cross-Site Scripting (XSS)
  - npm漏洞编号：`1111772`
  - 漏洞详细说明：https://github.com/advisories/GHSA-g3ch-rx76-35fx
  - 漏洞等级：中危
  - 受影响的版本：`>=2.0.0 <3.0.0`


**依赖关系**：



- `@cheen/project` / `vue-tsc` / `@vue/language-core` / `vue-template-compiler`

  
  

**漏洞包所在目录**：

- `node_modules/vue-template-compiler`







