import { Component } from "@angular/core";
import { NavController, ModalController, IonicPage } from "ionic-angular";
import { AlertController } from "ionic-angular";

import { Store } from "@ngrx/store";
import * as fromRoot from "../../ngrx";
import * as todayRest from "../../ngrx/action/today.action";

import { Rest } from "../../server/Utils";
import { Observable } from "rxjs/Observable";
// import { log } from 'util';

//pipes
import { TimeToPositionPipe } from "../../pipes/time-to-position/time-to-position";
import { MoveToTimePipe } from "../../pipes/move-to-time/move-to-time";
import { TimeToHeightPipe } from "../../pipes/time-to-height/time-to-height";

import date from "date.js";

@IonicPage()
@Component({
  selector: "page-list",
  templateUrl: "list.html",
  providers: [TimeToPositionPipe, MoveToTimePipe, TimeToHeightPipe]
})
export class TodayPage {
  restIds$: Observable<string[]>;
  restList$: Observable<Rest[]>;
  restsObj$: Observable<{ [id: string]: Rest }>;

  // axisMinTime = date(`yesterday at${new Date().getHours()}:00`);
  axisMinTime: Date = date('in 1 days',date(`yesterday at ${date().getHours()}.00`)); // 轴的最小时间
  axisMaxTime: Date = date('in 1 days'); // 轴的最大时间
  nowTime: Date = date(); // 当前时间

  restsList: Rest[];
  restsObj: { [id: string]: Rest };

  restsListObser: any;
  restsObjObser: any;

  x: number = 0;
  y: number = 0;

  scrollY: number = 0;
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private store: Store<fromRoot.State>,
    private timeTopositionPipe: TimeToPositionPipe,
    private moveToTimePipe: MoveToTimePipe,
    private timeToHeightPipe: TimeToHeightPipe,
    private modalCtrl: ModalController
  ) {
    
    this.store.dispatch(new todayRest.LoadRestAction(this.axisMinTime, this.axisMaxTime));

    this.restList$ = store.select(fromRoot.getRestsList);
    this.restsObj$ = store.select(fromRoot.getRests);
    this.restIds$ = store.select(fromRoot.getRestIds);

    this.restsListObser = this.restList$.subscribe(
      rests => (this.restsList = rests)
    );
    this.restsObjObser = this.restsObj$.subscribe(
      rests => (this.restsObj = rests)
    );
  }
  ngOnInit() {
    setInterval(() => {
      var now = date();
      if (now.getMinutes() !== this.nowTime.getMinutes()) {
        this.nowTime = date();
      }
    }, 1000);
  }
  ngAfterViewInit() {
    // 滚动条滚动到当前时间轴
    // var h = this.timeTopositionPipe.transform(
    //   this.nowTime,
    //   this.axisMinTime,
    //   "min"
    // );
    // scrollY = h;
  }
  doInfinite(): Promise<any> {
    return new Promise(resolve => {
      // 延长时间轴
      let amt = this.axisMaxTime;
      this.axisMaxTime = date("24 hours later", date("1 hours later",amt));
      this.store.dispatch(new todayRest.LoadRestAction(this.axisMinTime, this.axisMaxTime));
      if (this.axisMaxTime) {
        resolve();
      }
    });
  }
  ngOnDestory() {
    this.restsListObser.unsubscribe();
    this.restsObjObser.unsubscribe();
  }
  addRest() {
    this.modalCtrl.create("ModalTodayPage").present();
  }

  delRest(item) {
    this.store.dispatch(new todayRest.DelRestAction(item));
  }
  press(id) {
    this.restsObj[id].y = this.timeTopositionPipe.transform(
      this.restsObj[id].startTime,
      this.axisMinTime
    ); // 将当前时间转化为top
    this.x = this.restsObj[id].x;
    this.y = this.restsObj[id].y;
    this.restsObj[id].moving = true; // 移动中
  }
  panmove(evt, id) {
    if (!this.restsObj[id].moving) {
      return;
    }
    // 获取移动距离
    let mvx = evt.deltaX;
    let mvy = evt.deltaY;

    // 设置元素定位属性
    this.restsObj[id].x = mvx + this.x;
    this.restsObj[id].y = mvy + this.y;
  }
  panend(item) {
    if (!item.moving) {
      return;
    }
    // 将移动距离调整为时间
    let secend: number = this.moveToTimePipe.transform(item.y - this.y, "min");
    item.startTime = item.startTime + secend;
    item.endTime = item.endTime + secend;
    item.x = 0;
    // 发起action,修改rest的store，storage数据
    this.store.dispatch(new todayRest.EditRestAction(item));
    item.moving = false;
  }
  rotatestart(e, id) {
    console.log(e.target);
  }
  editRest(item) {
    this.modalCtrl.create("ModalTodayPage", item).present();
  }
}
