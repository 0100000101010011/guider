import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddShortcutPage } from './add-shortcut';

@NgModule({
  declarations: [
    AddShortcutPage,
  ],
  imports: [
    IonicPageModule.forChild(AddShortcutPage),
  ],
})
export class AddShortcutPageModule {}
