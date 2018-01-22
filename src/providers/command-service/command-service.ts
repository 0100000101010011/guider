import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class CommandServiceProvider {

  private commands: { commandText: string, commandDescription: string }[] = [];

  constructor(private storage: Storage) {
    //...
  }

  addNewCommand(newCommand: { commandText: string, commandDescription: string }) {
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
