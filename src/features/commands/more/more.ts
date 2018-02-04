import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { AlertController } from 'ionic-angular';

import { CommandsPage } from '../../../pages/commands/commands';

import { CategoryFilterViewPage } from '../../../features/commands/category-filter-view/category-filter-view';

import { CommandProvider } from '../../../providers/command/command';
import { CategoryProvider } from '../../../providers/category/category';


@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

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

  //commands data model
  private commands: {
    text: string,
    description: string,
    category: string
  }[] = [];

  constructor(
    public navCtrl: NavController,
    private storage: Storage,
    public alertCtrl: AlertController,
    private commandService: CommandProvider,
    private categoryService: CategoryProvider
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

  viewMorePage() {
    this.navCtrl.push(MorePage);
  }

  filterCommandsByCategory(value: {
    category: string
  }) {

    let arr = [];

    for (var key in this.commands) {
      if (value.category === this.commands[key].category) {
        arr.push(this.commands[key]);
        this.categoriesFilter = arr;
      }
    }

    this.categoryService.addfilteredCategory(arr);

    this.navCtrl.push(CategoryFilterViewPage);
  }

  alertDeleteData() {

    let confirm = this.alertCtrl.create({
      title: 'Delete data?',
      message: 'You sure you want to delete all your commands data?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            //..
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteData();
          }
        }
      ]
    });
    confirm.present();
  }

  deleteData() {

    this.storage.set('commands', null);
    this.storage.set('categories', null);
    this.storage.set('categoriesFilter', null);

    this.navCtrl.push(CommandsPage);

  }

}
