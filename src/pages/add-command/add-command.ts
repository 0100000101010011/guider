import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { AddCategoryPage } from '../category-add/category-add';
import { CategoryFilterPage } from '../category-filter/category-filter';

import { CommandServiceProvider } from '../../providers/command-service/command-service';
import { CategoryServiceProvider } from '../../providers/category-service/category-service';


@IonicPage()
@Component({
  selector: 'page-add-command',
  templateUrl: 'add-command.html',
})
export class AddCommandPage {

  categories: { 
    category: string 
  }[] = [];

  commands: { 
    text: string, 
    description: string, 
    category: string 
  }[] = [];

  constructor( 
    private navCtrl: NavController, 
    private storage: Storage, 
    private commandService: CommandServiceProvider, 
    private categoryService: CategoryServiceProvider 
  ) {

  }

  ionViewWillEnter() {
    this.storage.get('commands').then(
      (commands) => {
        this.commands = commands;
      }
    );

    this.storage.get('categories').then(
      (categories) => {
        this.categories = categories;
      }
    );
  }

  addCommand(value: {  
    text: string, 
    description: string, 
    category: string 
  }) {
    this.commandService.addNewCommand(value);
    this.navCtrl.pop();
  }
  
  popAddCategory() {
    this.navCtrl.push(AddCategoryPage);
  }

  popChooseCategory() {
    this.navCtrl.push(CategoryFilterPage);
  }

}