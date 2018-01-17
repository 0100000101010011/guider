import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommandServiceProvider } from '../../providers/command-service/command-service';

@IonicPage()
@Component({
  selector: 'page-add-command',
  templateUrl: 'add-command.html',
})
export class AddCommandPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private commandService: CommandServiceProvider) {
  }

  saveCommand(value: { title: string }) {
    this.commandService.saveCommand(value);
  }

  /*
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCommandPage');
  }
  */

}
