import { Component } from '@angular/core';
import {  IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  today = 'HomePage';
  list = 'ListPage';
  me = 'MePage';

  constructor() {

  }
}
