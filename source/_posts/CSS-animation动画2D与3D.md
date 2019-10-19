---
title: CSS-animation动画2D与3D
date: 2019-10-06 22:27:55
tags:
    - CSS
    - 动画
    - 前端
comments: true
categories: 前端

updated: 2019-10-07 22:27:55
---





[TOC]



## 2D

1. transform-origin可以调整元素转换变形的原点。

   - transform-origin: left top;
     transform: rotate(45deg);
     ![1571500851_1_.jpg](https://i.loli.net/2019/10/20/GxU9ruhHsl7Z3LD.png)
   - ![1571500862_1_.jpg](https://i.loli.net/2019/10/20/unWwrKasGxplCI4.png)

2. 移动 translate(x, y) 

   - 值为具体px或  自身百分比 此例为盒子横纵坐标居中![1571500870_1_.jpg](https://i.loli.net/2019/10/20/3obyR7EGVrJWOv2.png)
     

3. 缩放 scale(x, y)

   - ![1571500878_1_.jpg](https://i.loli.net/2019/10/20/F6YEipfs5qXJkdV.png)

4. 旋转 rotate(deg) 

   - ![1571500885_1_.jpg](https://i.loli.net/2019/10/20/leO5EhAo9Xp43WS.png)

5. 倾斜 skew(deg, deg)

   - ![1571500893_1_.jpg](https://i.loli.net/2019/10/20/Ir5hETJAoz1GmfS.png)
     ---





---



## 3D

 rotateX()  ； rotateY() ； rotateZ()；

- 分别是沿着 x；y ；z轴 立体旋转.

 translateX(x)；  translateY(y)； translateZ(z)；translate3d(x,y,z)

- 代表沿着X /Y /Z 轴移动。
  x和y可以是长度值，也可以是百分比，百分比是相对于其本身元素水平方向的宽度和垂直方向的高度和；z只能设置长度值。

## 

## transition: 要过渡的属性 花费时间 运动曲线 何时开始; （放在要变化的元素本身(变化之前)）

- 写法1 ：总体掌控耗时

  ```
  div{
      color: red;
      transition: 1s ease;
      这里的transition:就控制了整个动画的时间为1S（包括所有的变化）
  }
  div{
      transform:rotate(7deg);
       color: blue;
  
  }
  ```

  

- 写法2：单独设置某几项变化耗时状态等![1571501838_1_.jpg](https://i.loli.net/2019/10/20/POxB8SZnal6G3IH.png)

- ![1571501829_1_.jpg](https://i.loli.net/2019/10/20/BLASdRWMDl6YGUZ.png)

## transform: 2D/3D的变化内容（元素的动画）

- 注意transform里只装上述2D /3D 里的内容变化  什么width ,background-color这些跟在transform一个 地方就行

- ```
  div{
      color: red;
      transition: 1s ease;
      这里的transition:就控制了整个动画的时间为1S（包括所有的变化）
  }
  div{
      transform:rotate(7deg);
       color: blue;
  
  }
  ```

## transform-style: preserve-3d;  设置平面图有3D效果（会出现交叉碰撞）（一般放在父元素）

- 使用的前提是，动画是由3D 变化属性构成的
  如果不用此属性，backface-visibility ：hidden 将会失效
- ![1571501873_1_.jpg](https://i.loli.net/2019/10/20/IPSv4HGjqge3WZ1.png)
- ![1571501882_1_.jpg](https://i.loli.net/2019/10/20/fQdXsH1Rx8SFMgJ.png)

## perspective: number px  景深：透视距离，调整3D效果数值越大越不明显，（一般放在在父类） 

- 会以父元素的某个点为视点，看所有的子元素，所以看到的每个子元素的样式是不一样的。![1571501900_1_.jpg](https://i.loli.net/2019/10/20/xOszR8r5em4g2ki.png)
- 如果分别放在子类![1571501908_1_.jpg](https://i.loli.net/2019/10/20/kOqosQNUwFcTWtp.png)
- transform: perspective(600px) rotateY(45deg);   
  另一种书写方式 

## perspective-origin：20%，70% 透视的起点 方位 （一般放在父元素）

![1571501917_1_.jpg](https://i.loli.net/2019/10/20/4vjtGdsBroNqfUP.png)



## backface-visibility 

- backface-visibility 属性定义当元素不面向屏幕时是否可见。
- backface-visibility: hidden; /* 不是正面对向屏幕，就隐藏（隐藏背面） */
- 一般例子是 扑克牌，正面和背面不一样。



## animation 动画 

### animation: 动画名称 动画时间 运动曲线 何时开始 播放次数 是否反方向;

- animation-timing-function 运动曲线![1571503338_1_.jpg](https://i.loli.net/2019/10/20/NlxUwQgDecZFTXd.png)
- 用关键词 "from" 和 "to"，等同于 0% 和 100%。![1571503348_1_.jpg](https://i.loli.net/2019/10/20/i5Ar3ZOJ7hYCFbD.png)
  infinite无限循环的意思
- 动画按时间（百分比）阶段性的不同效果![1571503356_1_.jpg](https://i.loli.net/2019/10/20/hjMf5Gm7wCluNId.png)
  如果不写到百分之百，那么剩下的时间 动画会倒放，比如此动画剩下百分之90的时间会慢动作倒放。
  ![1571503364_1_.jpg](https://i.loli.net/2019/10/20/9GjUJStPqMXAFmb.png)

### animation-play-state: paused; 

动画停止 默认: running

