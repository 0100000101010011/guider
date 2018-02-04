import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { CommandsPage } from '../pages/commands/commands';
import { ShortcutsPage } from '../pages/shortcuts/shortcuts';
import { InfoPage } from '../pages/info/info';

//load features for commands pages
import { CategoryAddPage } from '../features/commands/category-add/category-add';
import { CategoryFilterViewPage } from '../features/commands/category-filter-view/category-filter-view';
import { CommandAddPage } from '../features/commands/command-add/command-add';
import { MorePage } from '../features/commands/more/more';

//load features for shortcuts pages (update name to ShortcutAddPage)
import { AddShortcutPage } from '../features/shortcuts/shortcut-add/shortcut-add';

//load providers
import { CommandProvider } from '../providers/command/command';
import { ShortcutProvider } from '../providers/shortcut/shortcut';
import { CategoryProvider } from '../providers/category/category';

@NgModule({
  declarations: [
    MyApp,
    TabsPage, 
    CommandsPage,
    ShortcutsPage,
    InfoPage,
    CategoryAddPage, 
    CategoryFilterViewPage, 
    CommandAddPage, 
    MorePage, 
    AddShortcutPage, 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), 
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage, 
    CommandsPage,
    ShortcutsPage,
    InfoPage,
    CategoryAddPage, 
    CategoryFilterViewPage,  
    CommandAddPage, 
    MorePage, 
    AddShortcutPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommandProvider, 
    ShortcutProvider, 
    CategoryProvider
  ]
})
export class AppModule {}
