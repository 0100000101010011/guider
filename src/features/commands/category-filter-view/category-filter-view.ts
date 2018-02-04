import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { reorderArray } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { MorePage } from '../../../features/commands/more/more';

import { CategoryProvider } from '../../../providers/category/category';


@Component({
  selector: 'page-category-filter-view',
  templateUrl: 'category-filter-view.html',
})
export class CategoryFilterViewPage {

  //categories data model
  private categories: { 
    category: string 
  }[] = [];

  //categories filter data model
  private categoriesFilter: { 
    text: string, 
    description: string, 
    category: string
  }[] = [];

  constructor( 
    public navCtrl: NavController,
    private storage: Storage,
    public alertCtrl: AlertController, 
    private categoryService: CategoryProvider
  ) {
    
  }

  ionViewWillEnter() {

    this.categoryService.getFiltered().then(
      (categoriesFilter) => { 
        this.categoriesFilter = categoriesFilter;
      }
    );

  }
  viewMorePage() {
    this.navCtrl.push(MorePage);
  }

}
