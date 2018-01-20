import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { ShortcutServiceProvider } from '../../providers/shortcut-service/shortcut-service';

@IonicPage()
@Component({
  selector: 'page-add-shortcut',
  templateUrl: 'add-shortcut.html',
})
export class AddShortcutPage {

  constructor(private navCtrl: NavController, private shortcutService: ShortcutServiceProvider) {

  }

  addShortcut(value: {title: string}) {
    this.shortcutService.addNewShortcut(value);
    this.navCtrl.pop();
  }

}
