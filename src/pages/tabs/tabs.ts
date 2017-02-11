import { Component } from '@angular/core';

import { Dishes } from '../dishes/dishes';
import { ShoppingList} from '../shopping-list/shopping-list';
import { ContactPage } from '../contact/contact';
import {NavParams} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Dishes;
  tab2Root: any = ShoppingList;
  tab3Root: any = ContactPage;


  constructor(public params: NavParams) {



  }

  public refreshList() {

  }
}
