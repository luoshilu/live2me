import { Component } from '@angular/core';

import { ModalController , IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public modalCtrl: ModalController) { }

  openModal(characterNum) {

    let modal = this.modalCtrl.create('ModalTaskPage',  characterNum);
    modal.present();
  }
}

