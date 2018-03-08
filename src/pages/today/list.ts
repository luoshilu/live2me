import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../ngrx';
import * as todayRest from '../../ngrx/action/today.action';

import { Rest } from '../../server/Utils';
import { Observable } from 'rxjs/Observable';
// import { log } from 'util';

//pipes
import { TimeToPositionPipe } from '../../pipes/time-to-position/time-to-position';
import { MoveToTimePipe } from '../../pipes/move-to-time/move-to-time';

import date from 'date.js';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [TimeToPositionPipe, MoveToTimePipe]
})
export class TodayPage {
    restIds$: Observable<string[]>;
    restList$: Observable<Rest[]>;
    restsObj$: Observable<{[id: string]:Rest}>;

    minTime = date(`yesterday at${(new Date()).getHours()}:00`);
    nowTime: Date = new Date();

    restsList: Rest[]
    restsObj: {[id: string]:Rest}

    restsListObser: any;
    restsObjObser: any;

    x: number = 0;
    y: number = 0;
    constructor(
      public navCtrl: NavController,
      public alertCtrl: AlertController,
      private store: Store<fromRoot.State>,
      private timeTopositionPipe:TimeToPositionPipe,
      private moveToTimePipe: MoveToTimePipe,
      private modalCtrl: ModalController) {
      this.store.dispatch(new todayRest.LoadRestAction());

      this.restList$ = store.select(fromRoot.getRestsList);
      this.restsObj$ = store.select(fromRoot.getRests);
      this.restIds$ = store.select(fromRoot.getRestIds);

      this.restsListObser = this.restList$.subscribe(rests=>this.restsList = rests);
      this.restsObjObser = this.restsObj$.subscribe(rests=>this.restsObj = rests);
    }
    ngOnInit() {
      setInterval(()=>{
        var now = new Date();
        if (now.getMinutes() !== this.nowTime.getMinutes())
        {
          this.nowTime = now;
        }
      },1000);
    }
    ngAfterViewInit() {
      console.log('ending');
      // 
      // 滚动条设置到当前时间轴
      setTimeout(()=>{
        var h = this.timeTopositionPipe.transform(this.nowTime, this.minTime, 'min');
        console.log(h);
        document.body.scrollTop = 500;
        document.documentElement.scrollTop = 500;
        // window.scrollTo(0, h);
      },500);
    }
    ngOnDestory() {
    this.restsListObser.unsubscribe();
    this.restsObjObser.unsubscribe();
  }
  addRest() {
    this.modalCtrl.create('ModalTodayPage').present();
  }

  delRest(item) {
    this.store.dispatch(new todayRest.DelRestAction(item));
  }
  press(id){
    this.restsObj[id].y = this.timeTopositionPipe.transform(this.restsObj[id].startTime, this.minTime); // 将当前时间转化为top
    this.x = this.restsObj[id].x;
    this.y = this.restsObj[id].y;
    this.restsObj[id].moving = true; // 移动中
  }
  panmove(evt, id){
    if (!this.restsObj[id].moving) {return}
    // 获取移动距离
    let mvx = evt.deltaX;
    let mvy = evt.deltaY;
    // 设置元素定位属性
    this.restsObj[id].x = mvx + this.x;
    this.restsObj[id].y = mvy + this.y;
  }
  panend(item){
    if (!item.moving){return};
    // 将移动距离调整为时间
    let secend:number = this.moveToTimePipe.transform(item.y - this.y, 'min');
    item.startTime = item.startTime + secend;
    item.endTime = item.endTime + secend;
    item.x = 0
    // 发起action,修改rest的store，storage数据
    this.store.dispatch(new todayRest.EditRestAction(item));
    item.moving = false;
  }
  rotatestart(e,id) {
    console.log(e.target);
  }
  editRest(item) {
    this.modalCtrl.create('ModalTodayPage', item).present();
    // let prompt = this.alertCtrl.create({
    //   title: "编辑",
    //   inputs: [{
    //     name: 'name',
    //     value: item.name,
    //     placeholder: '任务名称'
    //   },{
    //     name: 'startTime',
    //     value: (new Date()),
    //     placeholder: '开始时间'
    //   }],
    //   buttons: [
    //     {
    //       text: '取消',
    //       handler: data => {
    //         console.log('Cancel clicked');
    //       }
    //     },
    //     {
    //       text: '保存',
    //       handler: data => {
    //         let newitem = Object.assign(item, data);
    //         this.store.dispatch(new todayRest.EditRestAction(newitem));
    //       }
    //     }
    //   ]
    // })
    // prompt.present();
  }
}
