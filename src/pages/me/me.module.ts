import { NgModule } from '@angular/core';
import { MePage } from "./me";
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        MePage
    ],
    imports: [
        IonicPageModule.forChild(MePage)
    ]
})
export class MePageModule {}