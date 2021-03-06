import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from "../pages/login/login";
import {CadastroProjetoPage} from '../pages/cadastro-projeto/cadastro-projeto';
import {CadastroEstoriaPage} from "../pages/cadastro-estoria/cadastro-estoria";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    CadastroEstoriaPage,
    CadastroProjetoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      //Confiração padrão para todas as plataformas
      mode: 'md',
      menuType: 'overlay'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    CadastroEstoriaPage,
    CadastroProjetoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
