---
title: VUE项目性能优化
date: 2019-08-11 08:50:36
top: 3
tags:
    - VUE
    - 框架
    - 前端
comments: true
categories: 前端

updated: 2019-10-07 22:27:55
---

[TOC]



# vue项目性能优化（路由懒加载、gzip加速、cdn加速）

1. ## 基础优化

   - 不要在模板中写复杂的表达式

   - 慎用watch尤其是deep

   - 合理的使用v-if/v-show/v-for

   - 善用keep-alive  

     - keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。![](https://i.loli.net/2019/10/16/d3x67LgsbpVQ524.png)
     - ![](https://i.loli.net/2019/10/16/bCt7EAVSHY45dIN.png)include - 字符串或正则表达，只有匹配的组件会被缓存
       exclude - 字符串或正则表达式，任何匹配的组件都不会被缓存![](https://i.loli.net/2019/10/16/iBEWtmeplJbG4Sa.png)include/exclude里的 值必须是 组件的名，需要自己在组件里定义才生效
     - 如果只想 router-view 里面某个组件被缓存，怎么办？![](https://i.loli.net/2019/10/16/kVHjsvLpPXoeG6m.png)
     - 缓存组件 其实就是缓存 那些静态的页面的东西、不涉及动态数据
       那么静态的东西 html 是缓存在哪儿的呢![](https://i.loli.net/2019/10/16/5fYuQKJBbgc9E4z.png)

   - 使用Object.freeze()

     - ![](i.loli.net/2019/10/16/ugAY6PHEhFBORpo.png)
     - ![](https://i.loli.net/2019/10/16/B8hIASWqdbzlaLN.png)
     - ![](https://i.loli.net/2019/10/16/koC97ymDUfQLqv4.png)

     ---

     

2. ## 开启GZIP

   - ![](https://i.loli.net/2019/10/16/w51mEzsVeMFQ7dY.png)
   - ![](https://i.loli.net/2019/10/16/MtUve2EALhsiV9m.png)
   - ![](https://i.loli.net/2019/10/16/Afp3kuhlynULo6E.png)
   - 

3. ## 路由懒加载

   - ![](https://i.loli.net/2019/10/16/8UqmYrQIjbZ57lT.png)

   - ![](https://i.loli.net/2019/10/16/MVmj8OGo3vsQ2zI.png)

   - 补充 关于CSS 和 图片

     -   这也是在webpack.prod.conf.js里
       用 chunkhash 解决 JS. CSS 指纹
       用hash 解决 图片等指纹
       用contenthash（ExtractTextPlugin插件提供的）
       将css代码从打包后的js代码中分离出来

       
       用ExtractTextPlugin 引入的CSS 指纹 不会和JS冲突

       https://www.cnblogs.com/giggle/p/9583940.html
       https://www.cnblogs.com/heyushuo/p/8543889.html  
       不过如果是cli打包的话 这些已经默认配置好了的

     - 

4. ## CDN加速

   - 介绍

     - 为什么要用CDN![](https://i.loli.net/2019/10/16/sHWpAJlLGdybPIn.png)

     - CDN一般加载一些常用的 写死的不更新的 源生JS CSS  jquery vue 库等、但是定制的JS 其他文件等需要商家付费

     - CDN的不足![](https://i.loli.net/2019/10/16/c5ej4qpAyrJL7m9.png)

     - 到底要不要用CDN呢![](https://i.loli.net/2019/10/16/OjVRCksly43EeGf.png)

     - ![](https://i.loli.net/2019/10/16/Yr4WoJ2BGs8DhTc.png)

       ```
       <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
       <script>window.jQuery || document.write('<script src="js/jquery-1.11.0.min.js" type="text/javascript"><\/script>')</script>
       都可以
       
       <script type="text/javascript">
           window.jQuery || document.write("<script src='javascript/jquery-1.7.1.min.js'>" + "<" + "/script>");
       </script>
       这种是自信的 默认jqeury已经被用户在其他网站加载过了  所以自己就不请求了 反正都一样
       ```

       

   - 在vue项目中的使用

     - https://www.cnblogs.com/Fordestiny/p/8684556.html