import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { AddShortcutPage } from '../add-shortcut/add-shortcut';

import { ShortcutServiceProvider } from '../../providers/shortcut-service/shortcut-service';

import { reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-shortcuts',
  templateUrl: 'shortcuts.html'
})
export class ShortcutsPage {

  shortcuts: { shortcutText: string, shortcutDescription: string}[] = [];

  constructor(public navCtrl: NavController, private shortcutService: ShortcutServiceProvider, private storage: Storage) {
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

  clearShortcutStorage() {
    this.storage.set('shortcuts', null);
  }

  reorderShortcuts(indexes) {
    this.shortcuts = reorderArray(this.shortcuts, indexes);
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
