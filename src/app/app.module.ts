import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { CommandsPage } from '../pages/commands/commands';
import { ShortcutsPage } from '../pages/shortcuts/shortcuts';
import { ContactPage } from '../pages/contact/contact';
import { AddCommandPage } from '../pages/add-command/add-command';
import { AddShortcutPage } from '../pages/add-shortcut/add-shortcut';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { CommandServiceProvider } from '../providers/command-service/command-service';
import { ShortcutServiceProvider } from '../providers/shortcut-service/shortcut-service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage, 
    CommandsPage,
    ShortcutsPage,
    ContactPage,
    AddCommandPage, 
    AddShortcutPage
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
    ContactPage,
    AddCommandPage, 
    AddShortcutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommandServiceProvider , 
    ShortcutServiceProvider
  ]
})
export class AppModule {}
