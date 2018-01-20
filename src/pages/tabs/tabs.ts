import { Component } from '@angular/core';

import { ShortcutsPage } from '../shortcuts/shortcuts';
import { InfoPage } from '../info/info';
import { CommandsPage } from '../commands/commands';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CommandsPage;
  tab2Root = ShortcutsPage;
  tab3Root = InfoPage;

  constructor() {

  }
}
