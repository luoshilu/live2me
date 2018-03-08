import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TimeToPositionPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'timeToPosition',
})
export class TimeToPositionPipe implements PipeTransform {
  /**
   * 时间转为为定位位置
   */
  transform(nowTime, minTime, type: string = 'min', ...args) {
    // 将时间转为定位
    let nowSecond;
    let minSecond;
    let strtype = typeof nowTime;
    if (strtype === 'string'||strtype === 'number') {
      nowSecond = nowTime;
      minSecond = minTime;
    } else {
      nowSecond = nowTime.getTime();
      minSecond = minTime.getTime();
    }
    let second = nowSecond - minSecond; // 当前时间距离起点时间的大小
    let Height = 15;// 每个刻度设置为15px;
    let q;
    let top: number = 0;
    switch(type) {
      case 'min':
        q = 15*60*1000; // 每个刻度设置为１５分钟
        top = (second/q * Height);
        break;
      default:
        top = 0;
    }
    return top;
  }
}
