---
title: Linux下安装mysql和走过的坑
date: 2019-10-06 22:27:55
tags:
    - 工具
    - 数据库
comments: true
categories: 数据

updated: 2019-10-07 22:27:55
---

[TOC]



## 安装

实际上大部分服务器都自带mysql的  除非你想装一从0从开始的干净LINUX



```
#wget http://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.17-linux-glibc2.5-x86_64.tar.gz
```



--解压压缩包

\#tar -xzvf /root/mysql-5.7.17-linux-glibc2.5-x86_64.tar.gz

--移动并修改文件名

\#mv /root/mysql-5.7.17-linux-glibc2.5-x86_64 /usr/local/mysql

### 此处省略登陆 密码设置 等事项直接奔 

## 踩过的坑

### 1.如何让外网可以访问/使用 这台服务器上的mysql

用mysql -uroot -p 登陆mysql，然后采用以下方法开启远程访问权限：

```
mysql>use mysql;
mysql>update user set host = '%' where user = 'root';
（%代表所有IP都可以访问过来，也可以换成指定的IP
mysql>FLUSH RIVILEGES；（完成/刷新
```

**设置mysql的配置文件**     /etc/mysql/my.cnf
     找到 bind-address  =127.0.0.1  将其修改为：

　

```
　bind-address  =0.0.0.0
```


　　重启mysql：/etc/init.d/mysql restart;

坑来啦：发现外网还是不能访问

```

mysql>use mysql
mysql>select host, user from user;
查询当前用户又哪些，发现root又好几个对应的host 这是不行滴（至少我实验的结果是这样）
所以自己再创个用户吧 用这个用户提供给外部访问

mysql>update user set host = '%' where user = 'rootNew';
mysql>FLUSH RIVILEGES；（完成/刷新
```



## 常用的命令

补充：

--退出mysql命令窗口

\#exit

 --查看mysql状态

\#service mysql status

--停止mysql

\#service mysql stop

--启动mysql

\#service mysql start