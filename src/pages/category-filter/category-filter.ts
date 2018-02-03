import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { CommandsPage } from '../commands/commands';
import { CategoryFilterViewPage } from '../category-filter-view/category-filter-view';

import { CommandServiceProvider } from '../../providers/command-service/command-service';
import { CategoryServiceProvider } from '../../providers/category-service/category-service';


@IonicPage()
@Component({
  selector: 'page-category-filter',
  templateUrl: 'category-filter.html',
})
export class CategoryFilterPage {

  categories: { 
    category: string 
  }[] = [];

  categoriesFilter: { 
    text: string, 
    description: string, 
    category: string
  }[] = [];

  commands: { 
    text: string, 
    description: string, 
    category: string 
  }[] = [];

  constructor( 
    public navCtrl: NavController, 
    private storage: Storage,  
    private commandService: CommandServiceProvider, 
    private categoryService: CategoryServiceProvider 
  ) {
   
  }

  ionViewWillEnter() {

    //pull categories from storage to populate popup
    this.categoryService.getCategories().then(
      (categories) => { this.categories = categories }
    );
    this.commandService.getCommands().then(
      (commands) => { 
        this.commands = commands;
       }
    );
  }

  filterCommands(value: { 
    category: string 
  }) {

    let arr = [];

    for (var key in this.commands) {
      if(value.category === this.commands[key].category) {
        arr.push(this.commands[key]);        
        this.categoriesFilter = arr;
      }
    }

    this.categoryService.addfilteredCategory(arr);

    this.navCtrl.push(CategoryFilterViewPage);
  }

  clearCommandStorage() {

    this.storage.set('commands', null);
    this.storage.set('categories', null);
    this.storage.set('categoriesFilter', null);

    this.navCtrl.push(CommandsPage);

  }

  popChooseCategory() {
    this.navCtrl.push(CategoryFilterPage);
  }

}
