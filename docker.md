# 安装（linux）

- 1. 更新系统
     
 确保系统包是最新的：

 sudo yum update -y
 
- 2. 卸载旧版本的 Docker
     
 如果你有安装过旧版本的 Docker（叫 docker 或 docker-engine），可以先将它们卸载：

 sudo yum remove docker docker-common docker-selinux docker-engine
- 3. 安装依赖包
     
Docker 需要一些额外的依赖包：

sudo yum install -y yum-utils device-mapper-persistent-data lvm2
- 4. 设置 Docker 仓库
     
使用以下命令来设置 Docker 的官方仓库：

sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
- 5. 安装 Docker
     
安装 Docker CE（社区版）：

sudo yum install -y docker-ce

- 6. 启动 Docker
     
安装完成后，可以启动 Docker 服务：

sudo systemctl start docker
- 7. 设置开机自启
     
为了让 Docker 在系统启动时自动启动，可以执行以下命令：

sudo systemctl enable docker
- 8. 验证 Docker 安装
     
运行一个简单的 hello-world 容器来验证 Docker 是否安装成功：

sudo docker run hello-world

如果你看到 “Hello from Docker!” 的信息，说明 Docker 已经成功安装并运行。

额外步骤：配置非 root 用户运行 Docker

如果你希望不使用 sudo 就能运行 Docker，可以将当前用户添加到 docker 组：

sudo usermod -aG docker $USER

然后退出当前终端并重新登录，或者执行 newgrp docker 使更改立即生效。

完成以上步骤后，Docker 就已成功在 CentOS 7 上安装并可以使用了。

curl -fsSL get.docker.com -o get-docker.sh

sh get-docker.sh --mirror Aliyun

# 启动
systemctl start docker
systemctl enable docker #设置开机自启

# 配置镜像加速
- vim /etc/docker/daemon.json
  
 {
 
  "registry-mirrors": ["https://u3f6r21f.mirror.aliyuncs.com"]
  
}

- sudo systemctl deamon-reload
- sudo systemctl restart docker

# docker image
- 1.docker version #版本
- 2.docker images #查看所有的镜像
  docker image ls
  docker images -q #只展示镜像id
- 3.docker image prune #清理临时的没有被使用的镜像
- 4.docker search mysql #查找镜像
- 5.docker pull mysql:5.7 #拉取指定版本的镜像
  docker pull mysql #拉取最新的latest
- 6.docker rmi  id/name #删除镜像(id可以只写部分)
  docker image rm mysql:5.7
  docker image rm -f mysql #删除正在运行的镜像
  docker rmi -f $(docker images mysql -q) #批量删除
  
# docker container
- 1.docker ps #查看所有运行中的容器
- 2.docker ps -a #查看所有的容器
  docker container #查看所有的容器
- 3.docker run -d -p 8080:8080 --name tomcat01 镜像名 # -d:后台运行; -p:运行的端口号; --name:容器名（要唯一）
- 4.docker start 容器名/id #启动容器 # restart / stop /kill
- 5.docker rm -f 容器名/id #删除容器 -f:删除在运行的容器
  docker rm -f (docker ps -qa) # -q只显示id
- 6.docker logs id #查看日志
  docker logs -f id #查看实时日志
  docker logs -ft id #-t显示时间戳
- 7.docker top id #查看容器内部的进程
- 8.docker execut -it id bash #进入容器内部，可以使用ls / cd ,退出使用exit
- 9.docker cp ./test.html 274838438:/usr/local/tomcat/webapps #将外部资源复制到容器内部的文件夹，复制出来将路径调换即可
- 10.docker inspect 274838438 #查看容器的详细信息，如ip、端口号、运行环境等

# docker 数据卷
- 1.docker run -d -p 8080:8080 --name tomcat01 -v /opt/apps:/usr/local/tomcat/webapps tomcat:8.0-jre #将外部的/opt/apps 目录与容器内部的webapps目录做绑定，当外部数据变化是内部自动变化
- 2.docker run -d -p 8080:8080 --name tomcat01 -v aa:/usr/local/tomcat/webapps tomcat:8.0-jre8 #会自动在/var/lib/docker/volumes目录下生成aa数据卷
  
# 自定义镜像
- docker commit -m "描述信息" -a "作者" tomcat01 my_tomcat:1.0 #将容器打包成一个镜像
- docker save my_tomcat:1.0 -o my-tomcat-1.0.tar #保存镜像
- docker load -i my-tomcat-1.0.tar #加载镜像到docker
