import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  ViewController,
  NavParams
} from "ionic-angular";
import { Rest } from "../../server/Utils";
import { Operat } from "../../server/operators";
import { Store } from "@ngrx/store";
import * as fromRoot from "../../ngrx";
import * as today from "../../ngrx/action/today.action";
import date from "date.js";

@IonicPage()
@Component({
  selector: "page-modal-today",
  templateUrl: "modal-today.html"
})
export class ModalTodayPage {
  rest: Rest;
  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public viewCtrl: ViewController,
    private store: Store<fromRoot.State>
  ) {
    let dt = new Operat().dateFormat;
    if (params.get("id")) {
      params.data.startTime = dt(new Date(params.data.startTime), "HH:MM");
      params.data.endTime = dt(new Date(params.data.endTime), "HH:MM");
      this.rest = params.data;
    }
    else{
      this.rest = new Rest("新计划");
      this.rest.startTime = dt(date(), "HH:MM");
      this.rest.endTime = dt(date('in 1 hours'), "HH:MM");
    }
  }
  save() {
    this.rest.startTime = date(this.rest.startTime).getTime();
    this.rest.endTime = date(this.rest.endTime).getTime();
    if(this.rest.endTime < this.rest.startTime) {
      this.rest.endTime = date("in 1 days",this.rest.endTime).getTime();
    }
    this.store.dispatch(new today.AddRestAction(this.rest));
    this.viewDissmiss();
  }
  del() {
    this.store.dispatch(new today.DelRestAction(this.rest));
    this.viewDissmiss();
  }
  viewDissmiss() {
    this.viewCtrl.dismiss();
  }
}
