import { NgModule } from '@angular/core';
import { TestHelloComponent } from './test-hello/test-hello';
import { NgDayCardComponent } from './ng-day-card/ng-day-card';
@NgModule({
	declarations: [TestHelloComponent,
    NgDayCardComponent],
	imports: [],
	exports: [TestHelloComponent,
    NgDayCardComponent]
})
export class ComponentsModule {}
