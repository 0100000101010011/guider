import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { reorderArray } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { CommandAddPage } from '../../features/commands/command-add/command-add';
import { MorePage } from '../../features/commands/more/more';

import { CommandProvider } from '../../providers/command/command';
import { CategoryProvider } from '../../providers/category/category';


@Component({
  selector: 'page-commands',
  templateUrl: 'commands.html'
})
export class CommandsPage {

  //categories data model
  private categories: {
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
    this.commandService.getCommands().then(
      (commands) => { this.commands = commands }
    );
    this.categoryService.getCategories().then(
      (categories) => { this.categories = categories }
    );
  }

  viewCommandAddPage() {
    this.navCtrl.push(CommandAddPage);
  }

  viewMorePage() {
    this.navCtrl.push(MorePage);
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