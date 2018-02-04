import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryFilterViewPage } from './category-filter-view';

@NgModule({
  declarations: [
    CategoryFilterViewPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoryFilterViewPage),
  ],
})
export class CategoryFilterViewPageModule {}
