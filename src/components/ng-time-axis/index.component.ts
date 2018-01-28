import { Component} from '@angular/core';
import date from 'date.js'; 

@Component({
    selector: 'ng-time-axis',
    templateUrl: 'index.html',
    providers: []
})
export class TimeAxisComponent {
    scales: number[];
    minTime: Date = date('at 00:00');
    type: string = 'min';
    maxTime: Date = date('tomorrow at 12pm');
    q = 15*60*1000;
    constructor(){
        this.setScales();
    }
    setScales() {
        let minTime = this.minTime.getTime();
        let maxTime = this.maxTime.getTime();
        let totle = maxTime - minTime;
        let scalesList = [];
        for (let i = 0;i < totle;) {
            scalesList.push(i);
            i = i + this.q;
        }
        this.scales = scalesList;
        console.log(this.scales.length);
    }
}