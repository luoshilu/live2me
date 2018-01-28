import { NgModule } from '@angular/core';
import { TodayPage } from "./list";
import { IonicPageModule } from 'ionic-angular';

import { TimeAxisModule } from '../../components/ng-time-axis/index.module'

@NgModule({
    declarations: [
        TodayPage
    ],
    imports: [
        IonicPageModule.forChild(TodayPage),
        TimeAxisModule
    ]
})
export class TodayPageModule {}