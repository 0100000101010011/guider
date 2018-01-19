import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class CommandServiceProvider {

  //create a new commands object, then what's the rest going on with {}[] =[]?
  private commands: { title: string }[] = [];

  constructor(private storage: Storage) {
    //...
  }

  addNewCommand(newCommand: {title: string}) {
    this.commands.push(newCommand);
    this.storage.set('commands', this.commands);
  }

  getCommands() {
    return this.storage.get('commands').then(
      (commands) => {
        this.commands = commands == null ? [] : commands;
        return this.commands.slice();
      }
    );
  }

}
