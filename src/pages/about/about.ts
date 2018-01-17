import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  items = [{
      'shortcut': 'Visual Studio Code',
      'description': 'Shortcuts for Visual Studio Code'
    },
    {
      'shortcut': 'Ctrl + B',
      'description': 'Beautify selection (must have beautify plugin installed, and may need to be configured)'
    },
    {
      'shortcut': 'Alt + Up/Down',
      'description': 'Move line or selection up or down'
    }
  ];

  }
