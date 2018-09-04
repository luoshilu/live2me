<p align="center">

# live2me

[![Build Status](https://travis-ci.org/luoshilu/live2me.svg?branch=master)](https://travis-ci.org/luoshilu/live2me)

</p>

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
- [x] 首次只拉取当前时间轴内的任务,下个时间轴时再拉取新内容
- [ ] ~~相同时间内有２个任务以上时的排版~~　
> 1.[{s:1,e:4},{s:5,e:6},{s:2,e:9}] 输入[s:3,e:4]　如何快速判断与数组中的哪些对象有交集
> 2.根据交集数量，出现顺序设置当前rest的宽度和左偏移
> 3.交集类型：1-1交集，1-(多并列)交集，(多并列)-1交集，(多并列)-(多并列)交集

- [ ] 可以向上滑动打开过去的rest
- [ ] 未完成，正在做，完成　三种rest展现
- [x] 添加跳转到当前时间的快捷按钮
- [x] 添加输入日期的验证

* 计划

- [ ] 创建系列计划

* 未解决的问题

- [ ] 修改rest，打开viewModal，点击取消按钮，调用this.viewCtrl.dismiss();会使rest数据变化
- [x] rest会渲染两次

### 常用命令

- ionic g page Setting
  > 创建一个界面，会自动在 page 目录下生成*.html,*.module.ts,_.scss,_,html 文件
  > [更多](https://ionicframework.com/docs/cli/generate/)创建组件，指令，管道的命令
