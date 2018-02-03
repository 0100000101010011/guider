import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryFilterPage } from './category-filter';

@NgModule({
  declarations: [
    CategoryFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoryFilterPage),
  ],
})
export class ChooseCategoryPageModule {}
