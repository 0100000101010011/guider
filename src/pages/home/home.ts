import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddCommandPage } from '../add-command/add-command';
import { CommandServiceProvider } from '../../providers/command-service/command-service';
//import { SetupPage } from '../../app/setup/setup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  commands: { title: string }[] = [];

  constructor(public navCtrl: NavController, private commandService: CommandServiceProvider) {

  }

  items = [{
      'shortcut': 'Command Line',
      'description': 'Commands for the command line'
    },
    {
      'shortcut': 'cd',
      'description': 'Change directory, by itself will take you to root'
    },
    {
      'shortcut': 'clear',
      'description': 'Clear command line'
    },
    {
      'shortcut': 'start <nameofprogram>',
      'description': 'Start a program'
    },
    {
      'shortcut': 'pwd',
      'description': 'Print working directory, prints the path of the current working directory'
    },
    {
      'shortcut': 'touch <filename>.ext',
      'description': 'Create a file, can create a file with an extension or no extension'
    },
    {
      'shortcut': 'cp',
      'description': 'Copy, to move a file into a directory, you"ll copy the file to the directory and delete the old file eg cp test.js example, makes a copy of the file in the example directory'
    },
    {
      'shortcut': 'rmdir',
      'description': 'Remove directory'
    },
    {
      'shortcut': 'Node',
      'description': 'Node specific commands'
    },
    {
      'shortcut': 'npm start',
      'description': 'Start the app'
    },
    {
      'shortcut': 'npm -v',
      'description': 'View version of local npm install'
    },
    {
      'shortcut': 'npm view npm .version',
      'description': 'View the latest version of npm available as of current, alternatively may use "npm info npm .version'
    },
    {
      'shortcut': 'npm info npm',
      'description': 'View a much more detailed version dump of npm and other packages etc'
    },
    {
      'shortcut': 'npm install npm@latest -g',
      'description': 'Install the latest version of npm'
    },
    {
      'shortcut': 'node',
      'description': 'Brings us into node view, the javascript v8 engine'
    },
    {
      'shortcut': 'process',
      'description': 'While in node view, to show a dump of relevant engine info/details'
    },
    {
      'shortcut': 'process.platform',
      'description': 'While in node view, will show you what platform you"re on eg "win32" for windows and "darwin" for mac'
    },
    {
      'shortcut': 'Node > Ionic',
      'description': 'Ionic specific commands'
    },
    {
      'shortcut': 'ionic build',
      'description': 'Build the app manually, you want to do this first before serving it'
    },
    {
      'shortcut': 'ionic serve',
      'description': 'To build our app automatically and fire up/reload our ionic app in the browser whenever a change is detected'
    },
    {
      'shortcut': 'Node > Electron',
      'description': 'Electron specific commands'
    },
    {
      'shortcut': 'npm run package-win',
      'description': 'Package up our app for windows (takes about 2 mins 35 seconds to package for windows on my windows machine)'
    },
    {
      'shortcut': 'Visual Studio Code',
      'description': 'Visual Studio Code specific commands'
    },
    {
      'shortcut': 'code .',
      'description': 'Open Visual Studio Code'
    }
  ];

  ionViewWillEnter() {
    this.commands = this.getAllCommands();
  }

  addCommand() {
    this.navCtrl.push(AddCommandPage);
  }

  getAllCommands() {
    return this.commandService.getAllCommands();
  }

}