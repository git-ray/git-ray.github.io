---
title: AJAX基础
date: 2019-10-06 22:27:55
tags:
    - AJAX
    - 前端
comments: true
categories: 前端

updated: 2019-10-07 22:27:55
---























## 介绍

AJAX 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。

## AJAX原生get/post请求

- ![1571504678_1_.jpg](https://i.loli.net/2019/10/20/wULdjvnBktqhu8e.png)

  

  # JQUERY写法

  - ![1571504689_1_.jpg](https://i.loli.net/2019/10/20/98hvRctL6rNMJeH.png)
  - ![img](https://i.loli.net/2019/10/20/7rjYEUigbVZdCck.png)

  - JSONP请求跨域

    - jsonp: 回掉函数的参数的名，默认callback，服务端通过它来获取到回掉函数名，并带着结果一起返回到客户端
      jsonpCallback: 回掉函数名，默认jquery自动生成
      指定jsonpCallback时可以将回掉函数写在ajax外面做其他操作，不指定时不能这样做，只能在success里做操作![1571504713_1_.jpg](https://i.loli.net/2019/10/20/lAI6WEpcvHmksBU.png)
    - getJSON(url,[data],[callback])![1571504721_1_.jpg](https://i.loli.net/2019/10/20/W4fbznloJuh5S2V.png)
    - load() 方法
      - jQuery load() 方法是简单但强大的 AJAX 方法。
      - load() 方法从服务器加载数据，并把返回的数据放入被选元素中。
      - $(selector).load(URL,data,callback);

    

