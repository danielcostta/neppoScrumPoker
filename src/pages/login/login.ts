import {Component} from '@angular/core';
import {LoadingController, MenuController, NavController} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

import {AuthProvider} from "../../providers/auth/auth";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthProvider]
})
export class LoginPage {
  private formLogin: FormGroup;

  private email: string;
  private password: string;
  private loading: any;

  constructor(public fb: FormBuilder,
              public menuCtrl: MenuController,
              public authService: AuthProvider,
              public loadingCtrl: LoadingController,
              public navCtrl: NavController) {
    menuCtrl.enable(true);

    this.formLogin = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    })
  }

  ionViewDidLoad() {
    this.showLoader();

    this.authService.checkAuthentication().then((res) => {
      console.log("Already authorized");
      this.loading.dismiss();
      //this.navCtrl.setRoot(HomePage);
    }, (err) => {
      console.log("Not already authorized");
      this.loading.dismiss();
    });
  }

  login() {
    this.showLoader();

    let credentials = {
      email: this.email,
      password: this.password
    };

    this.authService.login(credentials).then((result) => {
      this.loading.dismiss();
      console.log(result);
      //this.navCtrl.setRoot(HomePage);
    }, (err) => {
      this.loading.dismiss();
      console.log(err);
    });

  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Verificando...'
    });

    this.loading.present();
  }

}
