import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { AddShortcutPage } from '../../features/shortcuts/shortcut-add/shortcut-add';

import { ShortcutProvider } from '../../providers/shortcut/shortcut';

import { reorderArray } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-shortcuts',
  templateUrl: 'shortcuts.html'
})
export class ShortcutsPage {

  shortcuts: { shortcutText: string, shortcutDescription: string}[] = [];

  constructor(
    public navCtrl: NavController, 
    private shortcutService: ShortcutProvider, 
    private storage: Storage, 
    public alertCtrl: AlertController
  ) {
    //..
  }

  ionViewWillEnter() {
    this.shortcutService.getShortcuts().then(
      (shortcuts) => this.shortcuts = shortcuts
    );
  }

  popAddShortcut() {
    this.navCtrl.push(AddShortcutPage);
  }

  /*
  clearShortcutStorage() {
    this.storage.set('shortcuts', null);
  }
  */

  reorderShortcuts(indexes) {
    this.shortcuts = reorderArray(this.shortcuts, indexes);
    this.storage.set('shortcuts', this.shortcuts);
  }

  alertDeleteShortcut(shortcut){

    let confirm = this.alertCtrl.create({
      title: 'Delete shortcut?',
      message: 'You sure you want to delete this shortcut?',
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
            this.deleteShortcut(shortcut);
          }
        }
      ]
    });
    confirm.present();
  }

  deleteShortcut(shortcut) {
    var index = this.shortcuts.indexOf(shortcut, 0);
    if (index > -1) {
      this.shortcuts.splice(index, 1);
      this.storage.set('shortcuts', this.shortcuts);
    }
  }

  /*
  items = [{
      'shortcut': 'Visual Studio Code',
      'description': 'Shortcuts for Visual Studio Code'
    },
    {
      'shortcut': 'Ctrl + J',
      'description': 'Toggle terminal and panel'
    },
    {
      'shortcut': 'Ctrl + B',
      'description': 'Beautify selection (must have beautify plugin installed, and may need to be configured)'
    },
    {
      'shortcut': 'Alt + Up/Down',
      'description': 'Move line or selection up or down'
    },
    {
      'shortcut': 'Ctrl + P',
      'description': 'Go to file... opens up a prompt'
    },
    {
      'shortcut': 'Ctrl + K, Ctrl + T',
      'description': 'Change theme color'
    }
  ];

  */

  }
