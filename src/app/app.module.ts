import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { Http } from '@angular/http';
import {HttpModule} from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Data } from '../server/data';
// storotage
import { DataStorage } from '../server/dataStorage';
import { IonicStorageModule } from '@ionic/storage'; // storage

import { Database } from '@ngrx/db';
// 公共方法
import { Operat } from '../server/operators';
// store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from '../ngrx/index';
// effects
import { EffectsModule } from '@ngrx/effects';
import { ScheEffects } from '../ngrx/effect/sche.effect';
import { TodayEffects } from '../ngrx/effect/today.effect';
import { WelcomeEffects } from '../ngrx/effect/welcome.effect';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG }from '@angular/platform-browser';

// onsenUI
// import { OnsenModule } from 'ngx-onsenui';
// 自定义移动端事件
// import * as Hammer                                   from 'hammerjs';
export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    // 31允许各个方向滑动， direction: Hammer.DIRECTION_VERTICAL垂直方向，默认水平
      'swipe': {velocity: 0.2, threshold: 12 } 
  }
}
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(ScheEffects),
    EffectsModule.run(WelcomeEffects),
    EffectsModule.run(TodayEffects),
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      statusbarPadding: true
    }),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    Http,
    HttpModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide  : HAMMER_GESTURE_CONFIG, useClass : MyHammerConfig},
    Data,
    DataStorage,
    Operat,
    Database
  ]
})
export class AppModule {}
