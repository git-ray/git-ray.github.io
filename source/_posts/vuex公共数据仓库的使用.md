---
title: vux公共数据仓库的使用
date: 2019-10-06 22:27:55
top: 5
tags:
    - VUE
    - 框架
    - 前端
comments: true
categories: 前端

updated: 2019-10-07 22:27:55
---



1. 认识

   - ![](https://i.loli.net/2019/10/16/JMcBHr2ZzLRmbAX.png)
   - state：既然vuex是用来储存数据的，那么我们的储存地点就是这里。
   - mutations：对数据的处理都是在这里进行。
   - actions：专门用来提交mutations的。
   - getters：获得到state上的数据的。
   - 所以总的来说就是建立一个state，然后调用actions来提交mutations处理state中的数据，最后用getters得到state中的数据。
     至于为什么要用actions来提交mutations处理state中的数据，原因是mutation 必须是同步函数，
     而action是异步的不会影响主进程的速度，所以通过actions来调用mutations

2. 安装

   - ![](https://i.loli.net/2019/10/16/wHWDnAYPFQup9SJ.png)
   - ![](https://i.loli.net/2019/10/16/aZVKnJfIMr9mb6A.png)
   - ![](https://i.loli.net/2019/10/16/MWPpXhOTl5ZryRD.png)
   - ![](https://i.loli.net/2019/10/16/xMq7tA4BI8dNWKm.png)

3. 使用

   - this.$store.xxx                        直接获取state数据

     - ![](![1571220159_1_.jpg](https://i.loli.net/2019/10/16/wWsqVHASQ3bc1Gv.png)
     - ![](https://i.loli.net/2019/10/16/sN9aKbRi46IEYQ2.png)
     - ![](https://i.loli.net/2019/10/16/8ezvx6RZWIDfCoQ.png)
     - ![](https://i.loli.net/2019/10/16/W3AKECFRy2JvHpY.png)

   - this.$store.commit(方法名)     线程同步mutations 操作state数据

     - vuex里![](https://i.loli.net/2019/10/16/rvUq96YfIA3dNzZ.png)
     - 用参数 操作
       只能传2个参数
       但参数可以是对象，可以把过多的数据放对象里![](https://i.loli.net/2019/10/16/jSvJR6ZA3mQa1ox.png)
     - 组件方法里   可传参![](https://i.loli.net/2019/10/16/ArnFGlqiM1V5S3K.png)

   - this.$store.getters.属性名            this.$store.getters.方法名(参数)   
     getters获取state里的数据（只读）并进行加工返回拿来使用，但不会改变state里数据值

     - 只要state数据发生改变 引用了getters读出来的数据自动在页面刷新![](https://i.loli.net/2019/10/16/QvXaEcjeVh52fL8.png)
     - Getter 接受 state 作为其第一个参数：
       - ![](https://i.loli.net/2019/10/16/yBATbCDnIUEFkW6.png)
     - Getter 也可以接受其他 getter 作为第二个参数：
       - 貌似一般是 其他mudle里的 getters![](https://i.loli.net/2019/10/16/sN3C5mBrUnGEOd7.png)
     - 通过让 getter 返回一个函数，来实现给 getter 传参
       - getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
         所以用mapGetters映射到组件属性上比较好![](https://i.loli.net/2019/10/16/irS9NYUnTj1tc2b.png)
     - 通常在computed里 使用，
       - ![](https://i.loli.net/2019/10/16/bgSr2Ak5pfajhCu.png)

   - this.$store.dispatch(方法名'，参数)      actions线程异步让mutations提交

     - 一般书写方式

       - ![](https://i.loli.net/2019/10/16/bzjsyYtaV5fXliL.png)

     - 解构参数书写方式

       -   这里把state 也传进来了  实际直接用this.state 也可以
         这里state获取了cart里added（已添加了的商品的一个对象）
         并用扩展运算符 把已添加的商品合集或者对象变成了数组的元素

         product是参数。是由this.$state.dispatch(方法名,参数)一起传进来  ![](https://i.loli.net/2019/10/16/gRYcv7emNTw6yxP.png)

     

     - 分发/异步调用方法
       - 传参  案例![](https://i.loli.net/2019/10/16/l7eMivoOTquZYfF.png)

   - 重点：  ...mapGetters,...mapActions        一般都这么用

     - https://www.cnblogs.com/mengfangui/p/9150799.html
     - 同理用在 mapMutation、mapState 、mapGetters 等 一回事。
       一般放在computed里 ：就不用在data里写个对应的映射属性或者method里写个映射的方法
       还可以时时更新，所有有关联的计算都会被重新计算
     - ![](https://i.loli.net/2019/10/16/hfmZJbyBx316TGN.png)
     - ![](https://i.loli.net/2019/10/16/Q7qnPDgafiBMNEZ.png)

   - mudles 解决单一store内容太多太复杂和臃肿，Vuex 允许我们将 store 分割成模块（module）  参考官网

   

   