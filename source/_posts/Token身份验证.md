---
title: Token身份验证
date: 2019-10-06 22:27:55
tags:
    - JavaScript
    - Token
    - 前端
comments: true
categories: 前端

updated: 2019-10-07 22:27:55
---



Token、session、coockie的区别

https://www.cnblogs.com/moyand/p/9047978.html

https://blog.csdn.net/weixin_43358075/article/details/89387856



基于Token的身份验证的过程如下:

- 每一次请求都需要token。token应该在HTTP的头部发送从而保证了Http请求无状态。
  我们同样通过设置服务器属性Access-Control-Allow-Origin:* ，
  让服务器能接受到来自所有域的请求。需要主要的是，在ACAO头部标明(designating)*时，
  不得带有像HTTP认证，客户端SSL证书和cookies的证书。
- 1.用户登录校验，校验成功后就返回Token给客户端。
- 2.客户端收到数据后保存在客户端
- 3.客户端每次访问API是携带Token到服务器端。
- 4.服务器端采用filter过滤器校验。校验成功则返回请求数据，校验失败则返回错误码

我个人是吧token存在 localstorage的，但日常使用是用vuex拿出localstorage里的数据来使用的，

token里可以放任何想向后端发送的信息  例如 账号密码，邀请码，各种验证码等。

