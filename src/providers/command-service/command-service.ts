import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class CommandServiceProvider {

  //create a new commands object, then what's the rest going on with {}[] =[]?
  private commands: { commandText: string, commandDescription: string }[] = [];

  constructor(private storage: Storage) {
    //...
  }

  addNewCommand(newCommand: {commandText: string, commandDescription: string}) {
    this.commands.push(newCommand);
    this.storage.set('commands', this.commands);
    console.log(this.storage.get('commands'));
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
