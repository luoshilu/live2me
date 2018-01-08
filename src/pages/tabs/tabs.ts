import { Component } from '@angular/core';
import {  IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  today = 'TodayPage';
  sche = 'SchePage';
  me = 'MePage';

  constructor() {

  }
}
