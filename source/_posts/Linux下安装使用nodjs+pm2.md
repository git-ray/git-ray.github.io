---
title: Linux下安装使用nodejs+pm2
date: 2019-10-06 22:27:55
tags:
    - 工具
    - 服務器
comments: true
categories: 建站

updated: 2019-10-07 22:27:55
---

[TOC]



## 安装Nodejs

提示：需要nodejs版本控制的需要安装nvm作为前提。
这里演示的是固定版本的nodejs安装

### 安装 wget

```undefined
sudo yum -y install wget
```

### 下载nodejs二进制包

```ruby
sudo wget https://nodejs.org/dist/v10.14.2/node-v10.14.2-linux-x64.tar.xz
```

*下载后会得到一个 node-v10.14.2-linux-x64.tar.xz 的压缩文件*

### 解压

```css
sudo tar -xvJf node-v10.14.2-linux-x64.tar.xz
```

*解压后会得到一个 node-v10.14.2-linux-x64 的目录*

### 移动 && 重命名

```bash
cp node-v10.14.2-linux-x64/* /usr/local/node-v10.14.2-linux-x64   
```

### 添加环境变量

```sh
sudo vim /etc/profile
# 找到最后一行加入以下内容
export PATH=${PATH}:/usr/local/nodejs/bin/
```

### 建立软连接

```
ln -s /usr/local/src/node-v10.14.2-linux-x64/bin/node  /usr/local/bin/node
```

### 测试是否安装成功

```bash
node  -v
# 或者
npm -v
```

*node -v是查看nodejs版本, npm -v 是查看npm版本*

```

```

---

## 安装PM2

提示：安装pm2，这里默认你已经安装了node.js和npm
1.安装

```
npm install pm2 -g
```

根据安装的nodejs的路径不同每个人 PM2的安装路径不一样（它是自己找的） 需要注意自己的是什么路径。

```
/usr/local/node-v8.9.3-linux-x64/bin/pm2 -> /usr/local/node-v8.9.3-linux-x64/lib/node_modules/pm2/bin/pm2
/usr/local/node-v8.9.3-linux-x64/bin/pm2-dev -> /usr/local/node-v8.9.3-linux-x64/lib/node_modules/pm2/bin/pm2-v
/usr/local/node-v8.9.3-linux-x64/bin/pm2-docker -> /usr/local/node-v8.9.3-linux-x64/lib/node_modules/pm2/bin/p-docker
/usr/local/node-v8.9.3-linux-x64/bin/pm2-runtime -> /usr/local/node-v8.9.3-linux-x64/lib/node_modules/pm2/bin/2-runtime
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.1.3 (node_modules/pm2/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.3: wanted {“os”:“darwin”,“ch”:“any”} (current: {“os”:“linux”,“arch”:“x64”})

```

2 创建软连接

操作描述：在linux上的设置软连接相当于是windows下的配制环境变量一个道理，只是这里用了命令完成的操作。这里我们就开始为pm2创建软连接，这里首先要明确的是，我们要知道谁和谁去连接，问题来了？知道是哪个和哪个连接吗？好了，答案是：我们的linux下的全局$PATH和我们pm2的安装路径。那么我们如何知道他们的路径分别是哪里呢？
参考摘自：https://blog.csdn.net/qq_36772866/article/details/88689422

 1）全局path路径

```
 echo $PATH
```

回车后…

```
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin
```

说明，也话你的路径和我的不一样，但没关系，你可以选择任何一个以：隔开的路径做为系统环境路径，我通常会选/usr/local/bin

通常我们在安装pm2的时间会有一个安装路径显示，如下代码于是，这就是你的pm2的安装路径为：/usr/local/node-v8.9.3-linux-x64/bin/pm2

2）建立软连接



`

```
ln` `-s /usr/local/node-v8.9.3-linux-x64/bin/pm2 /usr/local/bin/  
前一个为pm2安装目录
```

3.确认是否安装成功 

```
pm2 list
```

---



## 使用PM2运行nodejs项目

在开发模式的时候，我们常用`nodemon`和`webpack`热更新nodejs项目（如express）和前端项目（如vue），但需要部署的时候我们就不能再用开发环境的配置了，需要改成生产环境配置。为了使得项目可以稳健的运行在服务端，node可以使用nohup启动，前端项目可以使用nginx代理。
但是为了更加规范管理，我们应该使用pm2来管理node项目。

#### 1.在项目中添加processes.json文件

```
{
    "apps": {
        "name": "myapp",
        "script": "bin/www",
        "env": {
            "NODE_ENV": "production"
            "port":"3000"
        }
    }
}
```

关于端口 需要看自己项目怎么配置的，我是写死的3000  （/bin/www里 var port = normalizePort('3000');）

#### 2.修改package.json里的命令

```
 "scripts": {
    "start": "pm2 start processes.json",
  },
```

#### 3.向Linux传入项目文件 放在任意位置如 /www/myapp

cd到myapp 执行

```
pm2 start app.js或者processes
```

#### 4. pm2 list 查看是否已经运行 如果运行了 查看端口3000是否在线

```
netstat -nlp    查看当前所有端口
```

如果发现3000端口不存在，但pm2 list又在线那么 大概率是软连接配错了，需要 删除当前的pm2对应的软连接  重新配 慢慢搞  我在这儿卡了很久因为没有一条龙的文档让我看，都是各个博客综合来弄的 大家的东西不够统一。

#### 5.大功告成

