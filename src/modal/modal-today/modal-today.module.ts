import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalTodayPage } from './modal-today';

@NgModule({
  declarations: [
    ModalTodayPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalTodayPage),
  ],
})
export class ModalTodayPageModule {}
