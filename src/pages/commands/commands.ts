import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { reorderArray } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { AddCommandPage } from '../add-command/add-command';
import { CategoryFilterPage } from '../category-filter/category-filter';

import { CommandServiceProvider } from '../../providers/command-service/command-service';
import { CategoryServiceProvider } from '../../providers/category-service/category-service';


@Component({
  selector: 'page-commands',
  templateUrl: 'commands.html'
})
export class CommandsPage {

  categories: {
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
    public alertCtrl: AlertController,
    private commandService: CommandServiceProvider,
    private categoryService: CategoryServiceProvider
  ) {

  }

  ionViewWillEnter() {
    this.commandService.getCommands().then(
      (commands) => { this.commands = commands }
    );
    this.categoryService.getCategories().then(
      (categories) => { this.categories = categories }
    );
  }

  popAddCommand() {
    this.navCtrl.push(AddCommandPage);
  }

  popChooseCategory() {
    this.navCtrl.push(CategoryFilterPage);
  }

  reorderCommands(indexes) {
    this.commands = reorderArray(this.commands, indexes);
    this.storage.set('commands', this.commands);
  }

  alertDeleteCommand(command) {

    let confirm = this.alertCtrl.create({
      title: 'Delete command?',
      message: 'You sure you want to delete this command?',
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
            this.deleteCommand(command);
          }
        }
      ]
    });
    confirm.present();
  }

  deleteCommand(command) {
    var index = this.commands.indexOf(command, 0);
    if (index > -1) {
      this.commands.splice(index, 1);
      this.storage.set('commands', this.commands);
    }
  }

}