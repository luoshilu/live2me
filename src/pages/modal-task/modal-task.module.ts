import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalTaskPage } from './modal-task';

@NgModule({
  declarations: [
    ModalTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalTaskPage),
  ],
})
export class ModalTaskPageModule {}
