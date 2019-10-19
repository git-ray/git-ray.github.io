---
title: Linux下安装nginx
date: 2019-10-09 00:19:38
tags:
    - 工具
    - 服務器
comments: true
categories: 建站

updated: 2019-10-07 22:27:55
---

[TOC]



## Linux下安装Nginx

### 介绍

官网：<http://nginx.org/>
中文文档: <http://www.nginx.cn/doc/>

---

Nginx能干的事情很多,这里简要罗列一-些：

1. 可直接支持Rails和PHP的程序
2. 可作为HTTP反向代理服务器
3. 作为负载均衡服务器
4. 作为邮件代理服务器
5. 帮助实现前端动静分离

### Nginx安装

#### **Nginx下载**

官网下载：<http://nginx.org/en/download.html>
或者直接在linux执行命令：`wget http://nginx.org/download/nginx-1.12.2.tar.gz`
这里下载的版本是1.12.2

#### **安装步骤**

```bash
# 安装依赖
yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel
# 解压缩
tar -zxvf linux-nginx-1.12.2.tar.gz
cd nginx-1.12.2/
# 执行配置
./configure
# 编译安装(默认安装在/usr/local/nginx)
make
make install
```

###### 防火墙配置

nginx默认监听80端口，如果未关闭防火墙需要配置iptables规则开放80端口(以centos6为例)。
编辑配置文件：`vim /etc/sysconfig/iptables`
在文件中间添加iptables规则
`-A INPUT -m state --state NEW -m tcp -p tcp --dport 80 -j ACCEPT`
重启防火墙：`service iptables restart`
或者关闭iptables规则：`iptables -F && iptables -t nat -F`

###### Nginx验证

nginx主配置文件：`/usr/local/nginx/conf/nginx.conf`
nginx日志文件：`/usr/local/nginx/logs/access.log`
启动Nginx：`/usr/local/nginx/sbin/nginx`
然后直接访问ip地址，比如：<http://192.168.0.110/>，如果能看到如下Nginx主页说明安装ok。

###### Nginx常用命令

测试配置文件：`${Nginx}/sbin/nginx -t`
启动命令：`${Nginx}/sbin/nginx`
停止命令：`${Nginx}/sbin/nginx -s stop/quit`
重启命令：`${Nginx}/sbin/nginx -s reload`
查看进程命令：`ps -ef | grep nginx`
平滑重启：`kill -HUP [Nginx主进程号(即ps命令查到的PID)]`

以上参考来自<https://www.jianshu.com/p/9f2c162ac77c>

###### Linux下装多个  Nginx

一般在./configure的阶段会要求通过prefix设置安装路径。
因此，在./configure的时候指定不同的prefix就可以安装多个nginx啦

值得注意的是，安装完之后，两个nginx的监听端口要设置成不同的监听端口。否则，会有一个nginx无法启动。

```javascript
./configure --prefix=/home/work/nginx1 .....//第一个nginx的安装配置 make && make install
./configure --prefix=/home/work/nginx2 .....//第二个nginx的安装配置 make && make install
cd /home/work/nginx1/conf/nginx.conf && 修改第一个nginx的监听端口. ./home/work/nginx1/sbin/nginx
cd /home/work/nginx2/conf/nginx.conf && 修改第二个nginx的监听端口. ./home/work/nginx2/sbin/nginx
```

参考来自：<https://blog.csdn.net/qq_35071164/article/details/85621311>



