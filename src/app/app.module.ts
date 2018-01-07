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
import { AuthEffects } from '../ngrx/effect/index';
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(AuthEffects),
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      statusbarPadding: true
    },
  ),
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
    Data,
    DataStorage,
    Operat,
    Database
  ]
})
export class AppModule {}
