import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../ngrx';
import * as todayRest from '../../ngrx/action/today.action';

import { Rest } from '../../server/Utils';
import { Observable } from 'rxjs/Observable';
import { log } from 'util';
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class TodayPage {
    restIds$: Observable<string[]>;
    restList$: Observable<Rest[]>;
    restsObj$: Observable<{[id: string]:Rest}>;

    restsList: Rest[]
    restsObj: {[id: string]:Rest}

    restsListObser: any;
    restsObjObser: any;

    x: number = 0;
    y: number = 0;
    constructor(public navCtrl: NavController, public alertCtrl: AlertController, private store: Store<fromRoot.State>) {
      this.store.dispatch(new todayRest.LoadRestAction());

      this.restList$ = store.select(fromRoot.getRestsList);
      this.restsObj$ = store.select(fromRoot.getRests);
      this.restIds$ = store.select(fromRoot.getRestIds);

      this.restsListObser = this.restList$.subscribe(rests=>this.restsList = rests);
      this.restsObjObser = this.restsObj$.subscribe(rests=>this.restsObj = rests);
      
    }
  ngOnDestory() {
    this.restsObjObser.unsubscribe();
  }
  addRest() {
    let prompt = this.alertCtrl.create({
      title: "新建任务",
      inputs: [{
        name: 'name',
        placeholder: '任务名称'
      }],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '保存',
          handler: data => {
            let newrest = new Rest(data.name);
            this.store.dispatch(new todayRest.AddRestAction(newrest));
          }
        }
      ]
    })
    prompt.present();
  }

  delRest(item) {
    this.store.dispatch(new todayRest.DelRestAction(item));
  }
  swipeup(evt) {
    log(evt.target);
    // log('123');
  }
  panstart(x,y){
    this.x = x;
    this.y = y;
  }
  panmove(evt, id){
    // 获取移动距离
    let mvx = evt.deltaX;
    let mvy = evt.deltaY;
    // 设置元素定位属性
    this.restsObj[id].x = mvx + this.x;
    this.restsObj[id].y = mvy + this.y;
  }
  panend(item){
    // 发起action,修改rest的store，storage数据
    item.x = 0;  // 居中
    this.store.dispatch(new todayRest.EditRestAction(item));
  }
  editRest(item) {
    let prompt = this.alertCtrl.create({
      title: "编辑",
      inputs: [{
        name: 'name',
        value: item.name,
        placeholder: '任务名称'
      }],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '保存',
          handler: data => {
            let newitem = Object.assign(item, data);
            this.store.dispatch(new todayRest.EditRestAction(newitem));
          }
        }
      ]
    })
    prompt.present();
  }
}
