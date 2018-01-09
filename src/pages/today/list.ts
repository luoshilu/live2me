import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../ngrx';
import * as todayRest from '../../ngrx/action/today.action';

import { Rest } from '../../server/Utils';
import { Observable } from 'rxjs/Observable';
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class TodayPage {
    rest$: Observable<Rest[]>;
    rest: Rest;
    constructor(public navCtrl: NavController, public alertCtrl: AlertController, private store: Store<fromRoot.State>) {
      this.rest$ = store.select(fromRoot.getRestsList);
      this.store.dispatch(new todayRest.LoadRestAction());
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
