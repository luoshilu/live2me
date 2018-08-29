import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TodayPage } from "./list";
import { IonicPageModule } from 'ionic-angular';

import { TimeAxisModule } from '../../components/ng-time-axis/index.module';

//pipes
import { TimeToPositionPipe } from "../../pipes/time-to-position/time-to-position";
import { MoveToTimePipe } from "../../pipes/move-to-time/move-to-time";
import { TimeToHeightPipe } from "../../pipes/time-to-height/time-to-height";
@NgModule({
    declarations: [
        TodayPage,
        TimeToPositionPipe,
        MoveToTimePipe,
        TimeToHeightPipe
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