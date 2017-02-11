import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Dishes} from "../dishes/dishes";
import {TabsPage} from "../tabs/tabs";

/*
  Generated class for the Lifecycle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lifecycle',
  templateUrl: 'lifecycle.html'
})
export class LifecyclePage {

  constructor(public nav: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {

  }

  clickNext(){
    console.log("HERE");
    this.nav.setRoot(TabsPage);
  }

}
