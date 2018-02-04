import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommandAddPage } from './command-add';

@NgModule({
  declarations: [
    CommandAddPage,
  ],
  imports: [
    IonicPageModule.forChild(CommandAddPage),
  ],
})
export class CommandAddPageModule {}
