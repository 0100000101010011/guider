import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { CategoryFilterPage } from '../category-filter/category-filter';

import { CategoryServiceProvider } from '../../providers/category-service/category-service';

@IonicPage()
@Component({
  selector: 'page-category-add',
  templateUrl: 'category-add.html',
})
export class AddCategoryPage {

  categories: { 
    category: string 
  }[] = [];

  constructor(
    private navCtrl: NavController, 
    private categoryService: CategoryServiceProvider
  ) {
  }

  addCategory(value: { 
    category: string 
  }) {
    this.categoryService.addNewCategory(value);
    this.navCtrl.pop();
  }

  popChooseCategory() {
    this.navCtrl.push(CategoryFilterPage);
  }

}
