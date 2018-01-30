import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MoveToTimePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'moveToTime',
})
export class MoveToTimePipe implements PipeTransform {
  /**
   * 移动距离转化为时间
   */
  transform(move: number = 0, type: string = 'min', ...args) {
    let Height = 15; // 每个刻度是15px;
    let secend:number = 0;
    switch(type) {
      case 'min':
      let minVal = Math.floor(move/Height); // 计算分钟数(min的每个刻度是15px)
      secend = minVal * 15 * 60 * 1000; // 每个刻度15分钟，计算总的毫秒数
      break;
    }
    return secend;
  }
}
