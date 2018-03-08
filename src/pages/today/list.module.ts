import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TodayPage } from "./list";
import { IonicPageModule } from 'ionic-angular';

import { TimeAxisModule } from '../../components/ng-time-axis/index.module';

//pipes
import { TimeToPositionPipe } from '../../pipes/time-to-position/time-to-position';
@NgModule({
    declarations: [
        TodayPage,
        TimeToPositionPipe
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
    imports: [
        IonicPageModule.forChild(TodayPage),
        TimeAxisModule
    ]
})
export class TodayPageModule {}