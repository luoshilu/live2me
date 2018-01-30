import { NgModule } from '@angular/core';
import { TimeToPositionPipe } from './time-to-position/time-to-position';
import { MoveToTimePipe } from './move-to-time/move-to-time';
@NgModule({
	declarations: [TimeToPositionPipe,
    MoveToTimePipe],
	imports: [],
	exports: [TimeToPositionPipe,
    MoveToTimePipe]
})
export class PipesModule {}
