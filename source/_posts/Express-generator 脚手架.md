---
title: Express-generator 脚手架
date: 2019-10-06 22:27:55
top: 7
tags:
    - Nodejs
    - 前端
    - 后端
    - 脚手架   
comments: true
categories: 后端

updated: 2019-10-07 22:27:55
---



## 快速创建一个Express应用框架。

```javascript
  npm install express-generator -g
express myapp --view=pug
cd myapp
npm install

\# Run the myapp on Windows
SET DEBUG=myapp:* & npm start

\# Run myapp on Linux/Mac OS X
DEBUG=myapp:* npm start  
```

## 使用nodemon 插件开启热启动 不用每次都重启express

```javascript
npm install --save-dev nodemon
```

修改 package.json 的 scripts 内容：
"scripts": { "start": "node ./bin/www", "devstart": "nodemon ./bin/www" }![1571514273_1_.jpg](https://i.loli.net/2019/10/20/6DNJPZ7RQ24LrbY.png)

之后，使用 SET DEBUG=myapp:* & npm run devstart 启动 express 服务。
这样在开发过程中修改文件的时候，express服务就会自动重启，非常方便。

## 生成的文档目录结构

![1571514282_1_.jpg](https://i.loli.net/2019/10/20/1a2d73qhncjR6rt.png)
把app.js文件引进/bin/www

## 跨域配置：就是在 app.js 添加

![1571514292_1_.jpg](https://i.loli.net/2019/10/20/ivuLgECcNf7rhF5.png)

## bodypaser解析器 插件的用法

https://www.jianshu.com/p/4ebcc5acff45

