import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddShortcutPage } from './shortcut-add';

@NgModule({
  declarations: [
    AddShortcutPage,
  ],
  imports: [
    IonicPageModule.forChild(AddShortcutPage),
  ],
})
export class AddShortcutPageModule {}
