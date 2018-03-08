import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams } from 'ionic-angular';
import { Rest } from '../../server/Utils';
import {Operat} from '../../server/operators';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../ngrx';
import * as today from '../../ngrx/action/today.action';
import date from 'date.js';

@IonicPage()
@Component({
  selector: 'page-modal-today',
  templateUrl: 'modal-today.html',
})
export class ModalTodayPage {
  rest: Rest = (new Rest(''));
  constructor(public navCtrl: NavController, public params: NavParams,public viewCtrl: ViewController, private store: Store<fromRoot.State>,) {
    if (params.get('id')) {
      let dt = (new Operat()).dateFormat;
      params.data.startTime = dt(new Date(params.data.startTime), 'HH:MM');
      params.data.endTime = dt(new Date(params.data.endTime), 'HH:MM');
      this.rest = params.data;
    }
  }
  save() {
    this.rest.startTime = date(this.rest.startTime).getTime();
    this.rest.endTime = date(this.rest.endTime).getTime();
    this.store.dispatch(new today.AddRestAction(this.rest));
    this.dismiss();
  }
  del() {
    this.store.dispatch(new today.DelRestAction(this.rest));
    this.dismiss();
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
