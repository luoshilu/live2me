import { NgModule } from '@angular/core';
import { TimeToPositionPipe } from './time-to-position/time-to-position';
import { MoveToTimePipe } from './move-to-time/move-to-time';
import { TimeToHeightPipe } from './time-to-height/time-to-height';
@NgModule({
	declarations: [TimeToPositionPipe,
    MoveToTimePipe,
    TimeToHeightPipe],
	imports: [],
	exports: [TimeToPositionPipe,
    MoveToTimePipe,
    TimeToHeightPipe]
})
export class PipesModule {}
