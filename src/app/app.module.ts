import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {IonicStorageModule} from '@ionic/storage';

import {MyApp} from './app.component';
import {LoginPage} from "../pages/login/login";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {AuthProvider} from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {
}
