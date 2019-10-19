---
title: vue中的动画：【transation】【transationGroup】
date: 2019-10-06 22:27:55
top: 4
tags:
    - VUE
    - 框架
    - 前端
comments: true
categories: 前端

updated: 2019-10-07 22:27:55
---



[TOC]







## 【transation】标签包裹的单个元素都可以使用过渡类名

## 【transationGroup】包裹v-for循环出来的

# 全场动画

1. 淡入淡出的位移案例

   - ![](https://i.loli.net/2019/10/16/Ln5hQzoWIDu6iCS.png)
   - ![](https://i.loli.net/2019/10/16/A3c9mKt5bLUBo1u.png)

2. ul表单位移案例（v-for）

   - ![](https://i.loli.net/2019/10/16/QIaXE4ygkBH7fzV.png)
   - ![](https://i.loli.net/2019/10/16/KJDdzeBNH5kVf8L.png)
   - ![](https://i.loli.net/2019/10/16/B8HO2Svws1ujeMc.png)

   - is="transition-group"如果是 table表单 可以不用transitionGroup标签包裹 需要如此处理**
     - 去除transition-group标签 写到  is属性里
       name=所需的name![](![1571235785_1_.jpg](https://i.loli.net/2019/10/16/5CP79qjJguWxHOl.png))
     - ![](https://i.loli.net/2019/10/16/NQ9kc3EaMnAj6mP.png)
   - appear入场效果  使效果适用于入场
     - 当页面展示出来时。![](https://i.loli.net/2019/10/16/Jy2Zv5nBWM86qIX.png)
     - ![](https://i.loli.net/2019/10/16/GOYmxAXPl3VUCMg.png)

   - tag="标签名（自己想给的任意标签）"   解决了  transition-group渲染始终为span标签问题![](https://i.loli.net/2019/10/16/arfZSvVxwg6LnIA.png)

3. 元素位移类![](https://i.loli.net/2019/10/16/nmu8MYLfCwpbxFP.png)

   

# 半场动画

钩子函数 实现单进 单出

1. 生命钩子属性 示范![](https://i.loli.net/2019/10/16/8sboYrOIhgSXi7J.png)

2. 案例 实现小球掉入购物车
   - ![](https://i.loli.net/2019/10/16/6GxXY9sKrkHTnSI.png)
   - ![](https://i.loli.net/2019/10/16/gh6i9ebH2QLdMAo.png)
   - 进入前![](https://i.loli.net/2019/10/16/cCZkLmtEpS495ue.png)
   - ![](https://i.loli.net/2019/10/16/NfVjsw1oCFbJxYi.png)
   - ![](https://i.loli.net/2019/10/16/NfVjsw1oCFbJxYi.png)
   - 进入后+消失
     注意重点 要写done()![img](https://i.loli.net/2019/10/16/nHrqF5XYRefdD7G.png)
   - ![](https://i.loli.net/2019/10/16/9Np5gHTq1Z7lcrK.png)

# 修改v-前缀 实现单独控制（否则 新的transiation包裹的元素全是一样的动画）

1. ![1571237075_1_.jpg](https://i.loli.net/2019/10/16/1Mr3cBVoslUfi9y.png)
2. ![1571237083_1_.jpg](https://i.loli.net/2019/10/16/ni3Se89vBGbsyDH.png)