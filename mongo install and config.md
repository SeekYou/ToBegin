# MongoDB安装及配置

### 一、从官网下载MongoDB对应操作系统下载包，双击一路next，有一个Custom(自定义)选项，你可以更改安装路径。安装过程略。。

### 二、复制mongodb的安装路径，到mongo.exe的上一级目录,比如`D:\Program Files\MongoDB\Server\3.4\bin`添加到系统变量的path中。

### 三、以管理员权限打开CMD，cd到mongo.exe目录下，输入以下命令
```
mongod --dbpath d:\mongodb\data --logpath d:\mongodb\logs\mongodb.log --install --serviceName "mongodb"
```
  dbpath为本地数据库存放路径，logpath为日志存放路径，日志要指明file，而不是dictionary，serviceName为windows服务名称，提示成功或没有任何提示的话，右击计算机图标，选择管理，查看服务，找到mongodb这个服务，开启了则配置服务正确。

### 四、开发中开启关闭mongodb服务
在管理员权限下的cmd中输入`net start mongodb`提示服务已开启，输入`net stop mongodb`则关闭了数据库连接服务

----

mongoDB 可视化工具推荐Robo 3T，安装过程略。。

[mongoDB官网教程](http://docs.mongoing.com/manual-zh/tutorial/install-mongodb-on-windows.html)

[民间教程](http://www.runoob.com/mongodb/mongodb-window-install.html)