import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { reorderArray } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { CategoryFilterPage } from '../category-filter/category-filter';

import { CategoryServiceProvider } from '../../providers/category-service/category-service';


@Component({
  selector: 'page-category-filter-view',
  templateUrl: 'category-filter-view.html',
})
export class CategoryFilterViewPage {

  categories: { 
    category: string 
  }[] = [];

  categoriesFilter: { 
    text: string, 
    description: string, 
    category: string
  }[] = [];

  constructor( 
    public navCtrl: NavController,
    private storage: Storage,
    public alertCtrl: AlertController, 
    private categoryService: CategoryServiceProvider
  ) {
  }

  ionViewWillEnter() {

    this.categoryService.getFiltered().then(
      (categoriesFilter) => { 
        this.categoriesFilter = categoriesFilter;
      }
    );

  }
  popChooseCategory() {
    this.navCtrl.push(CategoryFilterPage );
  }

}
