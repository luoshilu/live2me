/**
 * storage 数据
 */

import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Schedule } from './Utils';
@Injectable()
export class DataStorage {
  constructor(public storage: Storage){}
  /**
   * 获取日程数据
   */
  getSchedules(): Promise<Schedule[]> {
    return this.storage.get('schedule').then(res=>res).catch(()=>false);
  }
  /**
   * 添加数据
   * @param data 
   */
  addSchedule(data): Promise<Boolean>{
    return this.storage.get('schedule').then(res => {
      if (!res) {
        return this.storage.set('schedule', [data]).then(res => true).catch(e=>false);
      }
      if (res) {
        console.log(data);
        res.push(data);
        return this.storage.set('schedule', res).then(res => true).catch(e=>false);
      }
    }).catch(e => false)
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
