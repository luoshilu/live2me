# live2me

> 一个关于个人记录的 APP


### 项目idea

>  也许你是一个喜欢记录自己生活的人，但苦于QQ和微信等社交平台已被五大姑八大姨占领,需要一个记录生活点滴的APP。
> 也许你是一个想要自律却三分钟热度无法安排好自己生活的人，急需要借助好的一款工具制糊自己。
> 也许你想有一个完美的记事本。
> 也许你需要一个优雅的阅读器。
> 也许...

### 开发栈

* ionic3
* angular4
* webpack
* node.js
* mongodb

### 开发目标

- [ ] 前期主功能模块定位
- [ ] 需求文档　－－　[文档链接](https://luoshilu.gitbooks.io/live2me-demand/content/)
- [ ] APP原型


### 前端界面
- [ ] ion-tabs 和 ion-slides 结合使用
- [ ] 欢迎页
> 第一次开启app采用的是native的storage组件，第一次启动会写入storage一个变量firstIn,下次启动时如果读取到这个变量则直接跳过欢迎页
> * 使用storage判断是否是第一次使用APP
> * 改变根模块 this.app.getRootNav().setRoot(TabsPage);


### 常用命令
* ionic g page Setting
> 创建一个界面，会自动在page目录下生成*.html,*.module.ts,*.scss,*,html文件
