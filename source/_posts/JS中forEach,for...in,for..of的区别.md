---
title: forEach,for...in,for..of的区别
date: 2019-08-09 18:52:39
tags:
    - JS
    - 前端
comments: true
categories: 前端

updated: 2019-10-07 22:27:55
---





## 它们的共同点就是 要遍历的都是    数组

forEach ：可以取出、操作  数组的 key
arr.forEach( ( key )=>{
console.log(arr [key]) })

---

for..in ：按index操作
for (var index in arr) {
console.log(arr[index]);
}

---

for..of :   直接按value操作，不考虑key
for (var value of myArray) {
console.log(value);
}

---

##   补充：  对象的遍历 方法

Object.keys（entity）取出给定对象的 键作组成一个数组


let person = {name:"张三",age:25,address:"深圳",getName:function(){}}
Object.keys(person) // ["name", "age", "address","getName"]

遍历对象内所有 键值对
Object.keys(person).forEach((key) => {
console.log( person（key）)  

