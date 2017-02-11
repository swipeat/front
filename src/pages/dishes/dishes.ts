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

        this.searchRecipes(5);
  }

  public searchRecipes(amount:number) {

      this.recipesProvider.getRecipes(amount).subscribe(
          data => {
            this.recipes =  data.results;
            console.log( this.recipes);
          },
          err => {
            console.log(err);
          },
          () => console.log('Recipes search is Complete')
      );

  }

  public dontLikeRecipe(recipeId) {


      // Load a new one for this entry
      this.recipesProvider.getOneRandomRecipe().subscribe(
          data => {
              var newRecipe =  data.results[0];
              for(var i=0; i< this.recipes.length; i++) {
                  if(this.recipes[i].recipe_id == recipeId){
                      // We change that one

                      this.recipes[i] = newRecipe;
                      console.log(this.recipes[i]);

                  }
              }
              console.log( this.recipes);
          },
          err => {
              console.log(err);
          },
          () => console.log('Loaded a new recipe because the user didnt liked the recipe with id = '+recipeId)
      );

  }

}
