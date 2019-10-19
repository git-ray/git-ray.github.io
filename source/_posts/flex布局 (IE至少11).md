---
title: CSS-flex基础
date: 2019-10-06 22:27:55
top: 2
tags:
    - CSS
    - 响应式
    - 前端
comments: true
categories: 前端

updated: 2019-10-07 22:27:55
---

[TOC]



## FLEX作用：

主要目的是使item的宽度、高度按一定顺序填充父容器的可用空间。![1571479387_1_.jpg](https://i.loli.net/2019/10/19/gL6lsvDTFXScfU9.png)

## 写在父元素的flex属性：

​	

|                 |                  |                                                              |
| :-------------: | ---------------- | :----------------------------------------------------------- |
| flex-direction  | 元素排列方向     | flex-direction:      row    row-reverse    column  column-reverse |
|    flex-wrap    | 换行             | flex-wrap:       nowrap   wrap  wrap-reverse                 |
|    flex-flow    | 上面两种的缩写   | flex-flow，是flex-direction和flex-wrap的简写形式<br />flex-flow:<flex-direction> <flex-wrap>; |
| justify-content | 水平对齐方式     | justify-content:      flex-start   flex-end  center  space-between  space-around |
|   align-items   | 垂直对齐方式     | align-items:           stretch  flex-start  flex-end  center  baseline |
|  align-content  | 多行垂直对齐方式 | align-content : stretch   flex-start  flex-end  center  space-between space-around |



1. display: flex | inline-flex  （此属性为必须）
   父容器样式中的display属性设置为 flex 或 inline-flex。
2. 设置子元素 item对齐的属性 
   - justify-content：
     控制所有item在main axis(主轴)上的对齐方式。
     - flex-start 默认值：item从 main axis(主轴)头部开始。
     - flex-end：item从 main axis(主轴)尾部开始。
     - center：item在 main axis(主轴)居中展示。
     - space-between：item均匀的分布在 main axis(主轴)上，其中第一个在 main axis(主轴)头部，最后一个在 main axis(主轴)尾部。
     - space-around：item分布在 main axis(主轴)上。每个item的左右间隔是相等的。如每个item左右间隔为15px，第1个item与开始初间隔15px，第1个与第2个item间隔30px。
     - space-evenly：item均匀分布在 main axis(主轴)上。
     - ![1571479425_1_.jpg](https://i.loli.net/2019/10/19/wMk6LbDOfqBRAxo.png)
   - align-content：
     当 flex-wrap:wrap* 时(即item可以自动换行排列时才能用这个属性)，控制item在cross axis(交叉轴)上的对齐方式。
     - stretch 默认值：item高度撑开到整个cross axis(交叉轴)。
     - flex-start：item头对齐在cross axis(交叉轴)的开始处。
     - flex-end：item尾对齐在cross axis(交叉轴)的结尾处。
     - center：item垂直居中。
     - space-between：item均匀的分布在cross axis(交叉轴)上，其中第一个在cross axis(交叉轴)头部，最后一个在cross axis(交叉轴)尾部。
     - space-around：item分布在cross axis(交叉轴)上。每个item的上下间隔是相等的。。如每个item上下间隔为15px，第1个item与开始初间隔15px，第1个与第2个item间隔30px。
     - ![1571479442_1_.jpg](https://i.loli.net/2019/10/19/fupD3dRWo5GStEO.png)
   - align-items：
     控制所有item在cross axis(交叉轴)的对齐方式。
     - stretch 默认值：item高度撑开到整个cross axis(交叉轴)。
     - flex-start：item头对齐在cross axis(交叉轴)的开始处。
     - flex-end：item尾对齐在cross axis(交叉轴)的结尾处。
     - center：item垂直居中。
     - baseline：根据内容基线对齐。
     - ![1571479433_1_.jpg](https://i.loli.net/2019/10/19/eKzM4IjCiRHg5qp.png)
   - 主轴与交叉轴
     - flex-direction/flow设置了row 或者 column的方向 【就是主轴方向，另一方向则为交叉轴】←👈这是重点！
     - ![1571479453_1_.jpg](https://i.loli.net/2019/10/19/lh1MsjEzTvJLS9u.png)
     - main axis /cross axis
       (主轴)：指的是与flex-direction设定的值方向一致的轴，如flex-direction:row；那么主轴就是横轴。
       (交叉轴)：与main axis(主轴)交叉的轴，如主轴为横轴，交叉轴就是纵轴。
3. flex-direction: row | row-reverse | column | column-reverse;
     设置item展示的方向
     - row 默认值：item显示在一行，从左到右依次展示。
     - row-reverse：item显示在一行，从右到左依次展示。
     - column：item显示在一列，从上到下依次展示。
     - column-reverse：item显示在一列，从下到上依次展示。
     - ![1571479463_1_.jpg](https://i.loli.net/2019/10/19/JtGmFCEWif3zXlr.png)
4. flex-wrap: nowrap | wrap | wrap-reverse;  
   当item在一行展示不下时，设置换行显示的方式。
   - nowrap 默认值：item不会换行。
   - wrap：按照item本身的宽度展示，若当前行展示不下时会换一行展示。
   - wrap-reverse：同wrap，不过是按相反方向换行展示item
   - ![1571479471_1_.jpg](https://i.loli.net/2019/10/19/pnqAah7bJoPVQz4.png)
5. flex-flow:      
   是flex-direction flex-wrap 的简写方式两者的属性都可以混合用
   - ![1571479481_1_.jpg](https://i.loli.net/2019/10/19/ZnACF9Ib3TvqgSE.png)

## 写在子元素的flex属性

|             |                  |                                                              |
| ----------- | ---------------- | :----------------------------------------------------------: |
| order       | 显示顺序         |                    type:"interger"，默认0                    |
| flex-grow   | 放大比例         | type:"Number"，默认0，即如果存在剩余空间，也不会放大；如果所有项目的flex-grow属性为1，则他们将等分剩余空间（如果有剩余空间）；不同项目设置不同flex-grow属性值，根据设置的数据按比例分配剩余空间 |
| flex-shrink | 缩小比例         | type:"Number"，默认为1，即如果空间不足，项目将缩小；
如果有一个项目的flex-shrink为0，空间不足时，它不缩小。
不同项目设置不同flex-shrink属性值，根据设置的数据按比例缩小
！注意：先根据宽度（当宽度超多定值时）再根据内容缩小 |
| flex-basis  | 伸缩基准值       | flex-basis:   auto           number       initial      inherit
基准值：自动(默认)  数值（100px）   初始     继承 |
| align-self  | 纵轴方向对齐方式 | 单个项目有与其他项目不一样的对齐方式，可覆盖align-items
align-self： auto  flex-start      flex-end   center   baseline   stretch" |



1. item的默认宽度、高度
   - 1)父容器设置了height，而item没有设置，那么item的height会填满父容器的height。因为默认情况下parent设置item的样式为align-items : stretch。
   - 2)父容器未设置height，某个item设置了height，其他item的height会等于item中最大的height。
   - 3)父容器和item都没有设置height，item会根据内容大小设置height，其他item的height会等于item中最大的height。

2. order: <integer>; /* default is 0 */可以控制item在父容器中展现的顺序。
   order属性定义项目的排列顺序。数值越小（包含负值），排列越靠前，默认为0

   - <https://blog.csdn.net/qq_44607694/article/details/89762348>

3. flex-basis: number | auto; 
   设置item的初始化大小。

   - auto 默认值：根据内容区域的设置大小。

   - number ：可以为具体数字或百分比。

   - inherit ：从父元素继承该属性。

   - ## Flex Items的应用准则

     - **content –> width –> flex-basis (limted by max|min-width)**
       也就是说，

     - 如果没有设置flex-basis属性，那么flex-basis的大小就是项目的width属性的大小

     - 如果没有设置width属性，那么flex-basis的大小就是项目内容(content)的大小

     - ```
       item {
           width: 30px;
           flex-basis: 250px;
       }此处的width将失效，宽会变成250px
       
       ```

     - ## 使用max-width来限制flex-basis

     - ```
       item {
           flex-basis: 250px;
           max-width: 100px;
       }即使我们将flex-basis设置为250px，item的宽度还是被限制在了100px。所以最终的flex-basis是100px：
       
       同理用在 min-width
       ```

       

     

4. flex-grow: <number>; /* default 0 */ 
   指定item如何瓜分剩余空间。number 为0 表示不会增长
    1，表示所有 的item都会等比例的增长分配充剩余的空间：
   ![1571479491_1_.jpg](https://i.loli.net/2019/10/19/BRQTbwzpgld5oWK.png)

5. flex-shrink: <number>; /* default 1 */
   item缩减的占比,参考 grow 增，效果与之相反，如果item总宽度大于了父盒子，那么会按number的比例进行缩减/吸收

   - 算法参考：
     容器的宽度为400px, 子项1的占用的基准空间(flex-basis)为250px，子项2占用的基准空间是150px，子项3占用基准空间是100px，总基准空间为 250+150+100=500px。容器放不下，多出来的空间需要被每个子项根据自己设置的flex-shrink 进行吸收。 子项1的flex-shrink: 1(未设置默认为1)， 子项2 flex-shrink: 2，子项3 flex-shrink: 2。子项1需要吸收的的空间为 `(250*1)/(250*1+150*2+100*2) * 100 = 33.33px`，子项1真实的空间为 250-33.33 = 216.67px。同理子项2吸收的空间为`(150*2)/(250*1+150*2+100*2) * 100=40px`，子项2真实空间为 `150-40 = 110px`。子项3吸收的空间为`(100*2)/(250*1+150*2+100*2) * 100 = 26.67px`，真实的空间为`100-26.67=73.33px`。

6. flex   
   flex-grow flex-shrink flex-basis 的简写方式

   - flex: flex-grow flex-shrink flex-basis;
     默认值：0 1 auto

## 一般自适应布局场景

1. 左右
   - ![1571497108_1_.jpg](https://i.loli.net/2019/10/19/sG57ZHuJoydINnk.png)
   - ![1571497099_1_.jpg](https://i.loli.net/2019/10/19/MfQ1O34RDPXbsye.png)
2. 水平垂直居中
   - ![1571497108_1_.jpg](https://i.loli.net/2019/10/19/sG57ZHuJoydINnk.png)



