#git 
git init #初始化
git add README.md #添加版本控制文件
git commit -m "first commit" #提交到本地仓库
git branch -M main #创建新的分支
git remote add origin https://github.com/MTLDDB/study-notes.git #连接远程服务器
git push -u origin main #提交到分支

git pull origin master #从分支拉取代码

git status #检查状态

git reflog #查看记录

git reset --hard e1dc23c #修改版本e1dc23c为reflog查到的版本号
 
git checkout master（分支名）#切换分支

git merger test(分支名) #合并分支 注：合并冲突时手动修改冲突后执行git commit -m "merge test 更新了1.txt文件" ，冲突自动消失


