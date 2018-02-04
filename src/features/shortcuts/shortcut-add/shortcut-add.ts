import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

import { ShortcutProvider } from '../../../providers/shortcut/shortcut';

@IonicPage()
@Component({
  selector: 'page-shortcut-add',
  templateUrl: 'shortcut-add.html',
})
export class AddShortcutPage {

  constructor(
    private navCtrl: NavController, 
    private shortcutService: ShortcutProvider
  ) {
    //...
  }

  addShortcut(value: {
    shortcutText: string, shortcutDescription
  }) {
    this.shortcutService.addNewShortcut(value);
    this.navCtrl.pop();
  }

}
