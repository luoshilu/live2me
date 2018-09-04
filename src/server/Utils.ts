
import {Operat} from './operators';
/**
 * 用于定义数据类
 */

 // 日程
 export class Rest {
    id: string;
    name: string;
    detail: string;
    startTime: Date | string | number;
    endTime: Date| string | number;
    complent: boolean;
    x: number;
    height: number;
    y: number;
    width: string; // 宽度(同时间段有多个任务时，宽度取百分比,left)
    moving: Boolean; // 是否在移动中
    constructor(name: string){
        this.id = 'rest' + (new Date()).getTime();
        this.name = name;
        this.detail = '';
        this.startTime = (new Date()).getTime();
        this.endTime = (new Date()).getTime() + 1000*3600;
        this.complent = false;
        this.x = 0;
        this.y = 0;
        this.height = 0;
        this.moving = false;
    }
 }

  // 计划
  export class Schedule {
    id: string;
    name: string;
    detail: string;
    startTime: string;
    endTime: string;
    complent: boolean;
    constructor(name: string){
        let dt = (new Operat()).dateFormat;
        this.id = 'sche' + (new Date()).getTime();
        this.name = name;
        this.detail = '';
        this.startTime = dt(new Date(), 'yyyy-MM-ddThh:mm:ss+08:00');
        this.endTime = dt(new Date((new Date()).getTime() + 1000*3600*24), 'yyyy-MM-ddThh:mm:ss+08:00');
        this.complent = false;
    }
 }

 // 用户
 export class User {
     name: string;
     info: string;
 }