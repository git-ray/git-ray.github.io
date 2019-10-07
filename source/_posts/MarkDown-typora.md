---
title: 小虫的markdown工具 Typora 教程
date: 2019-10-07 22:26:56
tags:
    - 文本工具
comments: true
categories: 工具
---

# Typora教程 

## 1.标题

使用简单的 `ctrl+数字键` 就可以快速完成各种级别的标题

## 2.下划线

ctrl + u

<u>下划线</u>

---



## 3.删除线

alt + shift + 5

~~删除线~~

---



## 4.字体加粗

**ctrl_+ b**

## 5.斜体字

ctr + i

*字体倾斜*

---



## 6.无序列表

```undefined
* 无序列表1
+ 无序列表2
- 无序列表3
```

一级：减号+space + 回车
N级： tab + 回车
退出当前层级：回车+回车+....

- 123
- 456 
  - 阿瑟东
  - 阿瑟东
  - 阿瑟东
    - 阿瑟东
    - 阿瑟东

---



### 有序列表

有序列表的好处是：只用输入1.后面回车会自动补全；
输入数字+“.”之后输入空格
1. 123
2. 456
3. 789

shift+tab去除缩进

### 任务列表

```css123as1d32asd
-[ ] 抽烟
-[x] 喝酒
-[ ] 烫头
```

---



## 7.表格

ctrl+t

| asd  | asd  | asd  |     asd | asd  | asd  |
| :--: | :--: | ---- | ------: | ---- | ---- |
|      |      |      |         | asd  | asd  |
| asd  | asd  | asd  |     asd |      |      |
|      |      |      |         | asd  |      |
|      |      |      |         |      |      |
| njio | 123  | asd  |     asd |      |      |
|      |      |      |         |      |      |
| asd  | asd  | asd  | asd asd | asd  |      |
|      |      |      |         |      |      |
|      |      |      |         |      |      |

---



## 8.引用

`> + space + enter` 或者 `ctrl + shift + q`

> > asdasd
> > as45d
> >
> > asd

shift+tab去除缩进=退出引用

---



## 9、插入链接

ctrl + k

[这是一个链接](www.baidu.com)

---



## 10、插入图片

本地直接拖拉图片到 `md` 文件 或者配合 `MPic`完成图片上传图床并复制链接到 `md` 文件（推荐）或者 `ctrl + shift + i`


​	![jay](H:\桌面\deskEditWork\ray-hexo\git-ray.github.io\public\img\jay.jpg)



---



## 11、代码块



一些功能是没用快捷键的需要自己配置，比如代码块就没有

文件=》偏好设置=》找到并打开高级设置=》打開conf.user.json=》
我這裏設置的 "Ctrl+Shift+p"

```javascript

```

```javascript
"keyBingding":{
"Code Fences":"Ctrl+Shift+p"
}


```

---



## 對文本的操作

### 12、文章跳转

`ctrl + home` 跳转至文章开头，`ctrl + end` 跳转至文章末尾，这个就不再演示了

13、选中英文单词/中文

`ctrl + d` 或者 `ctrl + shift + left/right` 左右进行文本选中

---



## 15、按行选中

ctrl + l

---



### 16、快速搜索

ctrl + f

---



### 17、替换

ctrl + h

---



#### 19、快速打开笔记

ctrl + p

---



### 20、toc 快速生成目录

[toc] + enter

[TOC]

---



#### 21、着重关键字

ctrl + shift + 反引号键（tab 键上面那个键）

`著重關鍵字`

22、表情符号

英文状态下的引号，输入字母自动显示表情符号

:zap: asd :blonde_woman:asd

---



#### 23、新建文件

`ctrl + n`，这个就不再演示了

26、分割线

`--- + enter`，这个也不再演示

---

---



#### 29、段落快捷键

```
ctrl + 0
```

---



## 30、定义脚注

```
文字[^脚注]
```