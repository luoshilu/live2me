import {App } from 'ionic-angular';  
import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../ngrx';

import { Storage } from '@ionic/storage'; // storage

import { OpenWelcomeAction } from '../../ngrx/action/openwelcome';
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(private app: App, private storage: Storage, private store: Store<fromRoot.State>) {}

  OpenWelcome() {
    this.storage.set('firstIn', true);
    // 跳到首页
    this.store.dispatch(new OpenWelcomeAction());
  }
}
