import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CommandServiceProvider } from '../../providers/command-service/command-service';

@IonicPage()
@Component({
  selector: 'page-add-command',
  templateUrl: 'add-command.html',
})
export class AddCommandPage {

  constructor(private navCtrl: NavController, private commandService: CommandServiceProvider) {
    //..
  }

  addCommand(value: { commandText: string, commandDescription: string }) {
    this.commandService.addNewCommand(value);
    this.navCtrl.pop();
  }

}
