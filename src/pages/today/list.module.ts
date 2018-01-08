import { NgModule } from '@angular/core';
import { TodayPage } from "./list";
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        TodayPage
    ],
    imports: [
        IonicPageModule.forChild(TodayPage)
    ]
})
export class TodayPageModule {}