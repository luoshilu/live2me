import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {
  public items: String[] = ['个人资料', '我的日程记录', '统计图', '设置', '关于Live2me']
  constructor(public navCtrl: NavController) {

  }
  openItem(item){
    console.log(item);
    
  }
}
