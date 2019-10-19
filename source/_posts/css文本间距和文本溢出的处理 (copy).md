---
title: css文本间距和文本溢出的处理
date: 2019-06-12 09:35:32
tags:
    - css   
    - 前端
comments: true
categories: 前端

updated: 2019-10-07 22:27:55
---



[TOC]



# 文本间距

```
line-height: 行间距
text-aglin； 水平对齐方式
text-indent: 首行缩进
letter-spacing: 字间距
word-spacing: 单词间距
```

# 文本溢出的处理

1. word-break:自动换行 主要处理英文单词
   - break-all	允许在单词内换行。
   - keep-all	只能在半角空格或连字符处换行。
2. white-space：自动换行 可以处理中文
   - pre	空白会被浏览器保留。其行为方式类似 HTML 中的 pre 标签。
   - nowrap	文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。
   - pre-wrap	保留空白符序列，但是正常地进行换行。
   - pre-line	合并空白符序列，但是保留换行符。
   - inherit	规定应该从父元素继承 white-space 属性的值。
3. word-wrap （CSS3）强制文本进行换行 - 即使这意味着会对单词进行拆分
   - 
4. text-overflow 文字溢出
   - ellipsis : 　当对象内文本溢出时显示省略标记（...）
   - clip : 　不显示省略标记（...），而是简单的裁切



