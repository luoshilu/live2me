import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { DataStorage } from "../server/dataStorage"; // storage

import { Store } from "@ngrx/store";
import * as rootReducer from "../ngrx";
import { Observable } from "rxjs/Observable";

import { OpenWelcomeAction } from "../ngrx/action/openwelcome";
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  TabsPage: any = "TabsPage";
  welcomeHome: any = "WelcomePage";
  welcome: Observable<Boolean>;
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    data: DataStorage,
    store: Store<rootReducer.State>
  ) {
    this.welcome = store.select(rootReducer.getScheduleWelcomeState);

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    data.visitedWelcomePage().then(res => {
      // 第一次打开
      if (!res) {
        store.dispatch(new OpenWelcomeAction());
      }
    });
  }
}
