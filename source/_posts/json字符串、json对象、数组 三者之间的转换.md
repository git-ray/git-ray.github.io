---
title: json字符串、json对象、数组 三者之间的转换
date: 2019-08-15 23:20:53
tags:
    - JavaScript
    - 前端
comments: true
categories: 前端

updated: 2019-10-07 22:27:55

---



json字符串：let jsonStr = '[{"id":"01","open":false,"pId":"0","name":"A部门"},{"id":"01","open":false,"pId":"0","name":"A部门"},]'

- var jsonObj = JSON.parse(jsonStr)//json          字符串转化成json对象（原生方法）
- let jsonStr1 = JSON.stringify(jsonObj)          json对象转化成json字符串- 

- json对象转化成json数组对象

  - ```
    let arr1=[];
    for(let i in jsonObj){
     arr1.push(jsonObj[i]);
    }
    ```

- json数组转化成json字符串

  - ```javascript
    var jsonStr11 = JSON.stringify(arr1)
    ```

    



























json字符串：let jsonStr = '[{"id":"01","open":false,"pId":"0","name":"A部门"},{"id":"01","open":false,"pId":"0","name":"A部门"},]'

