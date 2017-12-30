import {App } from 'ionic-angular';  
import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';  
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(private app: App) {
  }

  goHome() {
    this.app.getRootNav().setRoot(TabsPage);
  }

}
