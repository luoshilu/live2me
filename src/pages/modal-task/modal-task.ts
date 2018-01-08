import { Component } from '@angular/core';
import { IonicPage,Platform,ViewController, NavParams } from 'ionic-angular';

// import { Data } from '../../server/data';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../ngrx';
import * as sche from '../../ngrx/action';

import { Schedule } from '../../server/Utils';
@IonicPage()
@Component({
  selector: 'modal-task',
  templateUrl: 'modal-task.html'
})
export class ModalTaskPage {
  public schedule: Schedule;
  public id: string;
  constructor(
    private store: Store<fromRoot.State>,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    const id = this.id = this.params.get('id')
    // 新增日程
    if (id === '0') {
      this.schedule = new Schedule("新计划");
    }
    // 打开某个日程详情
    if (id !== '0') {
      this.schedule = this.params.get('item');
    }
  }
  add() {
    this.store.dispatch(new sche.AddScheAction(this.schedule));
    this.dismiss();
  }
  save() {
    this.store.dispatch(new sche.EditScheAction(this.schedule));
    this.dismiss();
  }
  del() {
    this.store.dispatch(new sche.DelScheAction(this.schedule));
    this.dismiss();
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
