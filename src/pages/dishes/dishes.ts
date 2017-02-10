import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {RecipesProvider} from "../../providers/recipes-provider";

@Component({
  selector: 'dishes',
  templateUrl: 'dishes.html',
  providers: [RecipesProvider]
})
export class Dishes {

  recipes: Array<any>;

  constructor(public navCtrl: NavController, private recipesProvider:RecipesProvider) {
    recipesProvider.getRecipes();
  }

  searchRecipes() {

      this.recipesProvider.getRecipes().subscribe(
          data => {
            this.recipes = data.results;
            console.log(data);
          },
          err => {
            console.log(err);
          },
          () => console.log('Recipes search is Complete')
      );

  }

}
