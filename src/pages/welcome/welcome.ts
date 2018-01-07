
import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../ngrx';

import { CloseWelcomeAction } from '../../ngrx/action/openwelcome';
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(private store: Store<fromRoot.State>) {}

  OpenWelcome() {
    // 跳到首页
    this.store.dispatch(new CloseWelcomeAction());
  }
}
