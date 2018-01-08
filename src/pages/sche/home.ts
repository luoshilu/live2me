import { Component } from '@angular/core';

import { ModalController , IonicPage } from 'ionic-angular';

import { Schedule } from '../../server/Utils';

import { Data } from '../../server/data';
import { Operat } from '../../server/operators';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../ngrx'
import { Observable } from 'rxjs/Observable';

import {LoadScheAction} from '../../ngrx/action/index'
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class SchePage {
  public scheduleIds: Observable<string[]>;
  public schedules: Observable<Schedule[]>;
  constructor(
    public modalCtrl: ModalController,
    public data: Data,
    public operat: Operat,
    private store: Store< fromRoot.State>) {
      this.scheduleIds = this.store.select(fromRoot.getScheduleIds);
      this.schedules = this.store.select(fromRoot.getSchedulesList);
      this.store.dispatch(new LoadScheAction);
   }

  openModal(select) {
    // 获取该日程
    let modal = this.modalCtrl.create('ModalTaskPage',  select);
    modal.present();
  }
}

