import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { TimeAxisComponent } from './index.component';

@NgModule({
  imports: [CommonModule ],
  declarations: [
    TimeAxisComponent
  ],
  exports: [TimeAxisComponent]
})
export class TimeAxisModule {}
