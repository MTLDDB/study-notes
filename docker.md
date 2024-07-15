# 安装（linux）
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
