import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class CommandServiceProvider {

  commands: { 
    text: string, 
    description: string, 
    category: string 
  }[] = [];

  constructor( 
    private storage: Storage
  ) {

  }

  addNewCommand(newCommand: { text: string, description: string, category: string }) {
    this.commands.push(newCommand);
    this.storage.set('commands', this.commands);
  }

  getCommands() {
    return this.storage.get('commands').then(
      (commands) => {
        this.commands = commands == null ? [] : commands;
        // console.log("this is in getCommands");
        // console.log(commands);
        return this.commands.slice();
      }
    );
  }

}
