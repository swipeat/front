import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController, AlertController, Loading} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth-provider";
import {TabsPage} from "../tabs/tabs";
import {RegisterPage} from "../register/register";
import {LifecyclePage} from "../lifecycle/lifecycle";

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthProvider]
})
export class LoginPage {

  loading: Loading;
  registerCredentials = {email: 'demo', password: 'demo'};

  constructor(private nav: NavController, private auth: AuthProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}

  public createAccount() {
    this.nav.push(RegisterPage);
  }

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
          if (allowed) {
            setTimeout(() => {
              this.loading.dismiss();
              this.nav.setRoot(LifecyclePage)
            });
          } else {
            this.showError("Access Denied");
          }
        },
        error => {
          this.showError(error);
        });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
