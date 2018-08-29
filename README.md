# live2me

> 一个关于个人记录的 APP

### 项目 idea

> 更方便使用的记录本

### 开发栈

- ionic3
- angular4
- webpack
- node.js
- mongodb

### 开发目标

- [x] 前期主功能模块定位
- [x] 需求文档
- [x] APP 原型

### 前端界面

- [x] 欢迎页
  > ~~使用 storage 判断是否是第一次使用 APP 及改变根模块 -- 完成~~
  > 界面设计

* 日程

- [x] 日程设计
  > ~~基础设计 -- 完成~~
- [x] 创建任务
  > ~~关于 ionic3 modal 的使用 -- 完成~~
- [x] 根据时间长短　设置rest的高度
- [ ] 相同时间内有２个任务以上时的排版问题
- [ ] 未完成，正在做，完成　三种rest展现设计
- [ ] 可以向上滑动打开过去的rest
- [ ] 添加跳转到当前时间的快捷按钮
- [ ] 添加输入日期的验证

* 计划

- [ ] 创建系列计划

* 未解决的问题

- [ ] 修改rest，打开viewModal，点击取消按钮，调用this.viewCtrl.dismiss();会使rest数据变化

### 常用命令

- ionic g page Setting
  > 创建一个界面，会自动在 page 目录下生成*.html,*.module.ts,_.scss,_,html 文件
  > 更多创建组件，指令，管道的命令
  > [](https://ionicframework.com/docs/cli/generate/)
