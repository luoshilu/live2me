import { Component, Input } from "@angular/core";
import date from "date.js";
import Rx from "rxjs";
import "rxjs/observable/interval";

@Component({
  selector: "ng-time-axis",
  templateUrl: "index.html",
  providers: []
})
export class TimeAxisComponent {
  @Input()
  showMinTime: Date;
  @Input()
  showMaxTime: Date;

  scales: number[]; // 时间毫秒列表
  type: string = "min"; // 每一刻度为分钟
  q:number = 15 * 60 * 1000; // 每一刻度为15分钟
  maxTime: Date;
  constructor() {
    let nowHours = date().getHours();
    if (!this.showMinTime) {
      // 默认为现在
      this.showMinTime = date();
    }
    if (!this.showMaxTime) {
      // 默认２４小时以后
      this.showMaxTime = date(`tomorrow at ${nowHours}`);
    }
    let tmpObservable = Rx.Observable.interval(100);
    tmpObservable.subscribe({
      next: () => {
        if(this.showMaxTime !== this.maxTime){
          this.setScales(this.showMinTime,this.showMaxTime);
        }
      }
    });
  }
  setScales(start, end) {
    let minTime = start.getTime();
    let maxTime = end.getTime();
    let totle:number = maxTime - minTime;
    console.log(totle);
    let scalesList = [];
    for (let i:number = 0; i < totle; ) {
      scalesList.push(i);
      i = i + this.q;
    }
    this.scales = scalesList;
    
    this.maxTime = this.showMaxTime;
  }
}
