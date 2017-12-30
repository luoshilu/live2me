import { NgModule } from '@angular/core';
import { ListPage } from "./list";
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        ListPage
    ],
    imports: [
        IonicPageModule.forChild(ListPage)
    ]
})
export class ContactPageModule {}