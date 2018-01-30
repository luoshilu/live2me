import { Component, Input} from '@angular/core';
import date from 'date.js'; 

@Component({
    selector: 'ng-time-axis',
    templateUrl: 'index.html',
    providers: []
})
export class TimeAxisComponent {
    @Input() userMinTime: Date;
    @Input() userMaxTime: Date;

    scales: number[]; // 时间毫秒列表
    type: string = 'min'; // 每一刻度为分钟
    q = 15*60*1000;　// 每一刻度为15分钟
    constructor(){
        let nowHours = date().getHours();
        if (!this.userMinTime) {
            // 默认为现在的整点
            this.userMinTime = date(`yesterday ${nowHours}:00`);
        }
        if (!this.userMaxTime) {
            // 默认２４小时以后
            this.userMaxTime = date(`tomorrow at ${nowHours}`);;
        }
        this.setScales(this.userMinTime, this.userMaxTime);
    }
    setScales(start, end) {
        let minTime = start.getTime();
        let maxTime = end.getTime();
        let totle = maxTime - minTime;
        let scalesList = [];
        for (let i = 0;i < totle;) {
            scalesList.push(i);
            i = i + this.q;
        }
        this.scales = scalesList;
    }
}
