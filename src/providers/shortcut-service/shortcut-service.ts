import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class ShortcutServiceProvider {

  //create a new commands object, then what's the rest going on with {}[] =[]?
  private shortcuts: { shortcutText: string, shortcutDescription: string }[] = [];

  constructor(private storage: Storage) {
    //...
  }

  addNewShortcut(newShortcut: {shortcutText: string, shortcutDescription: string}) {
    this.shortcuts.push(newShortcut);
    this.storage.set('shortcuts', this.shortcuts);
  }

  getShortcuts() {
    return this.storage.get('shortcuts').then(
      (shortcuts) => {
        this.shortcuts = shortcuts == null ? [] : shortcuts;
        return this.shortcuts.slice();
      }
    );
  }

}
