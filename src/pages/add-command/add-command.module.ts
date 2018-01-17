import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCommandPage } from './add-command';

@NgModule({
  declarations: [
    AddCommandPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCommandPage),
  ],
})
export class AddCommandPageModule {}
