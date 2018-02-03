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
import { AddCommandPage } from '../pages/add-command/add-command';
import { AddShortcutPage } from '../pages/add-shortcut/add-shortcut';
import { AddCategoryPage } from '../pages/category-add/category-add';
import { CategoryFilterPage } from '../pages/category-filter/category-filter';
import { CategoryFilterViewPage } from '../pages/category-filter-view/category-filter-view';

import { CommandServiceProvider } from '../providers/command-service/command-service';
import { ShortcutServiceProvider } from '../providers/shortcut-service/shortcut-service';
import { CategoryServiceProvider } from '../providers/category-service/category-service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage, 
    CommandsPage,
    ShortcutsPage,
    InfoPage,
    AddCommandPage, 
    AddShortcutPage, 
    AddCategoryPage, 
    CategoryFilterPage, 
    CategoryFilterViewPage, 
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
    AddCommandPage, 
    AddShortcutPage, 
    AddCategoryPage, 
    CategoryFilterPage, 
    CategoryFilterViewPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommandServiceProvider , 
    ShortcutServiceProvider, 
    CategoryServiceProvider
  ]
})
export class AppModule {}
