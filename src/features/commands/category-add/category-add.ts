import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { MorePage } from '../../../features/commands/more/more';

import { CategoryProvider } from '../../../providers/category/category';


@IonicPage()
@Component({
  selector: 'page-category-add',
  templateUrl: 'category-add.html',
})
export class CategoryAddPage {

  //categories data model
  categories: {
    category: string
  }[] = [];

  constructor(
    private navCtrl: NavController,
    private categoryService: CategoryProvider
  ) {

  }

  viewMorePage() {
    this.navCtrl.push(MorePage);
  }

  addCategory(value: {
    category: string
  }) {
    this.categoryService.addNewCategory(value);
    this.navCtrl.pop();
  }

}
