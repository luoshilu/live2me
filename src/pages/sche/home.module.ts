import { NgModule } from '@angular/core';
import { SchePage } from "./home";
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        SchePage
    ],
    imports: [
        IonicPageModule.forChild(SchePage)
    ]
})
export class SchePageModule {}