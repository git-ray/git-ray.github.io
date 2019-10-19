---
title: HTML5 应用程序缓存  manifest
date: 2019-10-09 09:33:17
tags:
    - HTML
    - 前端
comments: true
categories: 前端

updated: 2019-10-07 22:27:55
---





## 应用程序缓存为应用带来三个优势：

1. 离线浏览 - 用户可在应用离线时使用它们
2. 速度 - 已缓存资源加载得更快
3. 减少服务器负载 - 浏览器将只从服务器下载更新过或更改过的资源

## 如需启用应用程序缓存，请在文档的 <html> 标签中包含 manifest 属性

- <!DOCTYPE HTML>
  <html manifest="demo.appcache">
  ...
  </html>
  告诉html要缓存此网页
  加载manifest配置文件 离线内容

- manifest 文件的建议文件扩展名是：".appcache"。

## manifest 文件是简单的文本文件，它告知浏览器被缓存的内容（以及不缓存的内容）。

- manifest 文件有三个部分：
  - CACHE MANIFEST - 在此标题下列出的文件将在首次下载后进行缓存![1571508093_1_.jpg](https://i.loli.net/2019/10/20/1BazOu3NrKVTJi6.png)
  - NETWORK - 在此标题下列出的文件需要与服务器的连接，且不会被缓存![1571508102_1_.jpg](https://i.loli.net/2019/10/20/FQWYeyoL94tMDOm.png)
  - FALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）![1571508111_1_.jpg](https://i.loli.net/2019/10/20/PxijL5nb9agemDW.png)

![1571508162_1_.jpg](https://i.loli.net/2019/10/20/RFgS6py8kCZivOn.png)

## 更新缓存

1. 一旦应用被缓存，它就会保持缓存直到发生下列情况：
   - 用户清空浏览器缓存
   - manifest 文件被修改（参阅下面的提示）
   - 由程序来更新应用缓存

