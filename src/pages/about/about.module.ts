import { NgModule } from '@angular/core';
import { AboutPage } from "./about";
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        AboutPage
    ],
    imports: [
        IonicPageModule.forChild(AboutPage)
    ]
})
export class ContactPageModule {}