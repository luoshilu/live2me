/**
 * storage 数据
 */

import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Schedule, Rest } from './Utils';
@Injectable()
export class DataStorage {
  constructor(public storage: Storage){}
  /**
   * 获取计划列表数据
   */
  getSchedules(): Promise<Schedule[]> {
    return this.storage.get('schedule').then(res=>res).catch(()=>false);
  }
  /**
   * 添加计划数据
   * @param data 
   */
  addSchedule(data): Promise<Boolean>{
    return this.storage.get('schedule').then(res => {
      if (!res) {
        return this.storage.set('schedule', [data]).then(res => true).catch(e=>false);
      }
      if (res) {
        res.push(data);
        return this.storage.set('schedule', res).then(res => true).catch(e=>false);
      }
    }).catch(e => false)
  }
  /**
   * 编辑计划数据
   * @param data 
   */
  editSchedule(data): Promise<Boolean>{
    return this.storage.get('schedule').then(res => {
      let result: Boolean = false;
      let newsches = res.map(sche => {
        if (sche&&sche.id === data.id) {
          result = true;
          return data;
        } else {
          return sche;
        }
      })
      if (result) {
        return this.storage.set('schedule', newsches).then(res => true).catch(e=>false);
      } else {
        return false;
      }
    }).catch(e => false)
  }
  /**
   * 删除计划
   * @param data 
   */
  delSchedule(id): Promise<Boolean>{
    return this.storage.get("schedule").then(res=>{

      let newSches = res.filter(sche => {
        if (!sche && typeof(sche)!="undefined" && sche!=0) {
          return false;
        } else {
          return sche.id&&sche.id != id;
        }
      });

      return this.storage.set("schedule", newSches).then(res=>true).catch(e=>false);
    }).catch(e => false);
  }

 /**
   * 获取日程列表数据
   */
  getRests(): Promise<Rest[]> {
    return this.storage.get('Rest').then(res=>{
      console.log(res);
      
      return res;
    }).catch(()=>false);
  }
  /**
   * 添加日程数据
   * @param data 
   */
  addRest(data): Promise<Boolean>{
    return this.storage.get('Rest').then(res => {
      if (!res) {
        return this.storage.set('Rest', [data]).then(res => true).catch(e=>false);
      }
      if (res) {
        res.push(data);
        return this.storage.set('Rest', res).then(res => true).catch(e=>false);
      }
    }).catch(e => false)
  }
  /**
   * 编辑日程数据
   * @param data 
   */
  editRest(data): Promise<Boolean>{
    return this.storage.get('Rest').then(res => {
      let result: Boolean = false;
      let newsches = res.map(sche => {
        // 如果找到了要编辑的对象，则返回新对象
        if (sche.id === data.id) {
          result = true;
          return data;
        } else {
          return sche;
        }
      })
      if (result) {
        return this.storage.set('Rest', newsches).then(res => true).catch(e=>false);
      } else {
        return false;
      }
    }).catch(e => false)
  }
  /**
   * 删除日程
   * @param data 
   */
  delRest(id): Promise<Boolean>{
    return this.storage.get("Rest").then(res=>{

      let newSches = res.filter(sche => {
        if (!sche && typeof(sche)!="undefined" && sche!=0) {
          return false;
        } else {
          return sche.id&&sche.id != id;
        }
      });

      return this.storage.set("Rest", newSches).then(res=>true).catch(e=>false);
    }).catch(e => false);
  }
  
  /**
   * 初始访问
   * @param data 
   */
  firstIn(data?:Boolean): Promise<Boolean>{

    // get
    if (typeof data === 'undefined') {
      return this.storage.get('firstIn').then(res=>res).catch(e=>e);
    }
    // set
    if (data) {
      return this.storage.set('firstIn', data).then(res=>res).catch(e=>e);
    }
  }
}
