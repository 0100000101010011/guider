import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { CategoryAddPage } from '../../../features/commands/category-add/category-add';
import { MorePage } from '../../../features/commands/more/more';

import { CommandProvider } from '../../../providers/command/command';
import { CategoryProvider } from '../../../providers/category/category';


@IonicPage()
@Component({
  selector: 'page-command-add',
  templateUrl: 'command-add.html',
})
export class CommandAddPage {

  //categories data model
  categories: {
    category: string
  }[] = [];

  //commands data model
  commands: {
    text: string,
    description: string,
    category: string
  }[] = [];

  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private commandService: CommandProvider,
    private categoryService: CategoryProvider
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

  viewCategoryAddPage() {
    this.navCtrl.push(CategoryAddPage);
  }

  viewMorePage() {
    this.navCtrl.push(MorePage);
  }

  addCommand(value: {
    text: string,
    description: string,
    category: string
  }) {
    this.commandService.addNewCommand(value);
    this.navCtrl.pop();
  }

}