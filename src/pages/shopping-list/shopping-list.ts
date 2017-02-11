import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { RecipesProvider } from "../../providers/recipes-provider";

@Component({
  selector: 'shopping-list',
  templateUrl: 'shopping-list.html',
    providers:[RecipesProvider]
})
export class ShoppingList {

  public ingredients: Array<any>;

  constructor(public navCtrl: NavController, public recipesProvider: RecipesProvider) {

   this.loadList();
  }

  public loadList(){

    this.recipesProvider.getIngredientsForSavedDishes().subscribe(
        data => {
          this.ingredients =  data.results;
          console.log("RECEIVED INGREDIENTS");
          console.log(this.ingredients);

        },
        err => {
          console.log(err);
        },
        () => console.log('Recipes search is Complete')
    );

  }



}
