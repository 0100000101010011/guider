import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCategoryPage } from './category-add';

@NgModule({
  declarations: [
    AddCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCategoryPage),
  ],
})
export class AddCategoryPageModule {}
