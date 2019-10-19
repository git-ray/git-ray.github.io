---
title: VUE框架基础指令
date: 2019-07-04 22:12:23
tags:
    - VUE
    - 框架
    - 前端
comments: true
categories: 前端

updated: 2019-10-07 22:27:55
---

[TOC]



## 用过思维导图的可以直接看我的思维导图链接 

非常直观   建议谷歌浏览器  edge有BUG

右键拽拉，左键展开或收缩。

http://naotu.baidu.com/file/75bb6cf4c9d17d76bbfebad1bf3008c7?token=067b7b76801d8f39

## MVVM 结构展示

![](https://i.loli.net/2019/10/16/NVOaphqBFKzQDel.png)

![](https://i.loli.net/2019/10/16/UAKynjEgZ4HckGP.png)

## v-cloak   v-text   v-html   内容输出指令

​	

![](https://i.loli.net/2019/10/16/V7lL2NRJAfpHjx5.png)v-cloak解决差值标闪烁
（即如果还未加载出msg内容 则会一致显示内容为 {{msg}}  
）
v-cloak 属性 css设置为none就可以 只显示内容 不显示{{msg}}  了 
	

![](https://i.loli.net/2019/10/16/tPodCgBEyhDM1zx.png)v-html 和v-text一样会覆盖元素原本内容
 但解决了 把标签当普通文本输出的问题 ↓
	![](https://i.loli.net/2019/10/16/Ch1y3AUwcGg9ioq.png)分支主题

## v-bind  绑定属性指令

### 	简写方式

​		

![](https://i.loli.net/2019/10/16/eyYT3ZAB71ntgHh.png)冒号=v-bind+冒号

​	![](https://i.loli.net/2019/10/16/xiRGotZP2AQ8vTr.png)	在属性绑定下 可以使用数组，三元表达式等

### 	使用案例

​		

![](https://i.loli.net/2019/10/16/gVN9XzW3eYmHnwi.png)分支主题
		![](https://i.loli.net/2019/10/16/7yOUEmWagrATMdZ.png)分支主题
		![](https://i.loli.net/2019/10/16/Bfk5SgsJFGyvVtZ.png)分支主题
		![](https://i.loli.net/2019/10/16/gc6FndCymGWMSUO.png)被绑定的表达式 可以当做变量+新内容=新表达式
		![](https://i.loli.net/2019/10/16/ukvZUqetiaVNRKW.png)分支主题

## v-on 绑定事件指令

​	![](https://i.loli.net/2019/10/16/tCYio7OaGlTZLm8.png)分支主题
​	缩写方式是   @![](https://i.loli.net/2019/10/16/eE3QtAHNlF9LuTi.png)
​	分支主题
​	按键事件的绑定![](https://i.loli.net/2019/10/16/vjUfS8ezrNnwhRg.png)
​		 

		绑定 回车键 触发add 方法
可以查询马植直接调用不是内置的键
例如F2=113 
@keyup.113="add"
F2 触发add 方法![](https://i.loli.net/2019/10/16/ZV2iYdz4p3ToLPq.png)![]()
		VUE静态调用方法自定义F2=113![](https://i.loli.net/2019/10/16/15AtxRK2pmnrbW3.png)

## v-on 事件修饰符

​	![分支主题](https://i.loli.net/2019/10/16/X1cT4AOt9DCUhuP.png)
​	![分支主题](http://kityminder-img.gz.bcebos.com/72c85f21ca7af1fb1c93c22858328e327a785147)
​	

## 挺麻烦的。图片我全都要重新截图再放到图床 再链接到这里 然后图床网 每小时上传的图有限制把我卡这儿了。

以后再更吧，想看的伙伴直接点我的 思维导图看吧 见楼顶。





prevent阻止默认行为
	capture事件捕获  可以让冒泡顺序反过来触发
	self 实现只有点击当前元素才会触发的事件
（能阻止当前元素下面的元素的冒泡  
和stop不一样（全都阻止））

## vm实例中获取数据或调用方法

​	跑马灯 案例
​	()=>写的方法 
this 指向会保持一致

## 

## vm中实现全局变量

​	分支主题

## v-model 双向绑定l指令 （只能绑定表单带value属性元素的value值）

​	v-bind，绑定的属性（value属性）  当在页面发生数据动态改变时，
this.msg获取回来的数据并不会发生改变
​	v-model同步实现修改
​	绑定方法 和bind不一样

## v-for和key  循环 迭代指令

​	数组遍历
​	对象数组遍历
​	对象遍历
​	重点！KEY的唯一性 避免数据顺序错乱
在2.2后的新版本中 所有循环必须制定key值
​	注意：迭代

## v-if v-else和v-show 指令

​	用来隐藏/展示   的功能

flag =true 或者 false 即 可以来控制
	使用v-if
和v-else的 分别是对应相反的结果

例如flag=true.
login出现，register就消失

## derective【自定义指令】

​	全局自定义指令：实现focus聚焦
​		钩子函数
​			分支主题
​			分支主题
​			 

		v-focous 自定义的
		el=这个input原生对象
所以可以调用原生dom方法.focous()获取焦点
	全局自定义指令 字体颜色设置
		案例：全局 设置字体颜色
		分支主题
	局部自定义
		VM2里有效
		分支主题
	自定义简写形式
		相当于在  bind和update里都写了一份