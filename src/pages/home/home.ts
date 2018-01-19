import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddCommandPage } from '../add-command/add-command';
import { CommandServiceProvider } from '../../providers/command-service/command-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  commands: {title: string}[] = [];

  constructor(public navCtrl: NavController, private commandService: CommandServiceProvider) {

  }

  ionViewWillEnter() {
    this.commandService.getCommands().then(
      (commands) => this.commands = commands
    );
  }

  popAddCommand() {
    this.navCtrl.push(AddCommandPage);
  }

/*
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
    'shortcut': 'ls -l',
    'description': 'List contents of the current working directory'
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
    'shortcut': 'Node/NPM',
    'description': 'Node and npm specific commands'
  },
  {
    'shortcut': 'npm start',
    'description': 'Start the app'
  },
  {
    'shortcut': 'npm list -g --depth 0',
    'description': 'View all globally installed packages'
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
    'shortcut': 'ionic info',
    'description': 'View ionic version and environment details including npm version, node version and OS)'
  },
  {
    'shortcut': 'ionic start',
    'description': 'Create a new ionic project, with this option you"ll be prompted to name your project and pick a starter template (when prompted for cordova installation choose yes, and when prompted to install the free ionic SDK, choose no)'
  },
  {
    'shortcut': 'ionic start <nameofproject> tabs',
    'description': 'Create a new ionic project with the project name and the tabs template'
  },
  {
    'shortcut': 'npm install ionic cordova -g',
    'description': 'Install Ionic and Cordova (cordova to access native device apis eg camera, geolocation etc)'
  },
  {
    'shortcut': 'npm install ionic@latest -g',
    'description': 'Install the latest version of ionic'
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
    'shortcut': 'cordova plugin add cordova-sqlite-storage --save',
    'description': 'Step one, add the cordova-sqlite-storage plugin'
  },
  {
    'shortcut': 'npm install @ionic-native/sqlite --save',
    'description': 'Step 2, install the cordova-sqlite-storage plugin'
  },
  {
    'shortcut': 'ionic g provider <nameofservice>',
    'description': 'Create a new service'
  },
  {
    'shortcut': 'Node > Electron',
    'description': 'Electron specific commands'
  },
  {
    'shortcut': 'electron .',
    'description': 'Start electron desktop app'
  },
  {
    'shortcut': 'npm install -g electron',
    'description': 'Install Electron'
  },
  {
    'shortcut': 'electron --help',
    'description': 'To check that Electron has been installed and access help'
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
*/

}