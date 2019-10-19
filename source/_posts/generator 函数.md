---
title: generator 函数
date: 2019-10-06 22:27:55
tags:
    - ES6
    - JS
    - 前端
comments: true
categories: 前端

updated: 2019-10-07 22:27:55
---



[TOC]



## 写法：

1. 函数   function*   XXX（）{ }  多个加这个*
2. 功能等于return的yield，可以yield多个结果 
3. ![1571474646_1_.jpg](https://i.loli.net/2019/10/19/GEeNy6Oa7ixDQ9w.png)

## 取yield方法：

1. 调用next()方法![1571474662_1_.jpg](https://i.loli.net/2019/10/19/8barWtKeCxJ2XHQ.png)
2. 调用for..of方法![1571474672_1_.jpg](https://i.loli.net/2019/10/19/qtN9Up63rDJvl5H.png)

## next()传参

1. 通过参数传递可以 改变里面的算法  、
   影响后面next()的输出值![1571474685_1_.jpg](https://i.loli.net/2019/10/19/Hl7ZUihMt6NyOnq.png)
2. 让AJAX异步变同步![1571474697_1_.jpg](https://i.loli.net/2019/10/19/QrRZgPwdOBuHVI6.png)

## 用途：

可以连续取出 yield出的 数据。
因为generator可以在执行过程中多次返回，所以它看上去就像一个可以记住执行状态的函数，
利用这一点，写一个generator就可以实现需要用面向对象才能实现的功能

## 相似性

这样看上去，好像我们从Generator/yield换到async/await只需要把*都改为async，
yield都改为await就可以了。 所以很多人都直接拿Generator/yield来解释async/await的行为

