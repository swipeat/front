import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ShoppingList } from '../pages/shopping-list/shopping-list';
import { ContactPage } from '../pages/contact/contact';
import { Dishes} from '../pages/dishes/dishes';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import {AuthProvider} from "../providers/auth-provider";
import {RegisterPage} from "../pages/register/register";
import {LifecyclePage} from "../pages/lifecycle/lifecycle";

@NgModule({
  declarations: [
    MyApp,
    ShoppingList,
    ContactPage,
    Dishes,
    TabsPage,
      LoginPage,
      RegisterPage,
      LifecyclePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppingList,
    ContactPage,
    Dishes,
    TabsPage,
      LoginPage,
      RegisterPage,
    LifecyclePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthProvider]
})
export class AppModule {}
