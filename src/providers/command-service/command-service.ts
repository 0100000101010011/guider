/*import { HttpClient } from '@angular/common/http';*/
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class CommandServiceProvider {

  private notes: { title: string }[] = [];

  constructor() {
    /*
    console.log('Hello CommandServiceProvider Provider');
    */
  }

  saveCommand(note: {title: string}) {
    this.notes.push(note);
  }

  getAllCommands() {
    return [...this.notes];
  }

}
