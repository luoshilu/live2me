import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TimeToHeightPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'timeToHeight',
})
export class TimeToHeightPipe implements PipeTransform {
  /**
   * 将时间差转化为高度
   */
  transform(startToEndSecond: number,type: string = 'min', ...args) {
    let q = 60*1000; // 时间单位 分
    let timePrepLength = 1;// 时间和长度的比值;
    let height: number|string = 'auto';
    switch(type) {
      case 'min':
        height = (startToEndSecond/q * timePrepLength);
        break;
    }
    return height;
  }
}
