import { Component } from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {RecipesProvider} from "../../providers/recipes-provider";

@Component({
  selector: 'dishes',
  templateUrl: 'dishes.html',
  providers: [RecipesProvider]
})
export class Dishes {

  recipes: Array<any>;

  constructor(public navCtrl: NavController, public params: NavParams, private recipesProvider:RecipesProvider) {

        this.searchRecipes(3);

  }

  public searchRecipes(amount:number) {

      this.recipesProvider.getRecipes(amount).subscribe(
          data => {
            this.recipes =  data.results;
            for(var i=0; i<this.recipes.length; i++) {
                this.recipes[i].amount = 1;
            }
              this.recipesProvider.saveDishes(this.recipes);

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
              newRecipe.amount = 1;
              for(var i=0; i< this.recipes.length; i++) {
                  if(this.recipes[i].recipe_id == recipeId){
                      // We change that one

                      this.recipes[i] = newRecipe;
                      console.log(this.recipes[i]);

                  }
              }
              this.recipesProvider.saveDishes(this.recipes);
          },
          err => {
              console.log(err);
          },
          () => console.log('Loaded a new recipe because the user didnt liked the recipe with id = '+recipeId)
      );

  }

  public clickRemoveLastDishe() {

      this.recipes.pop();
      this.recipesProvider.saveDishes(this.recipes);

  }

  public isClickRemoveLastDishesDisabled() {
      if(this.recipes && this.recipes.length > 0) {
          return false;
      }
      return true;
  }

  public clickAddRandomDishe(){

      this.recipesProvider.getOneRandomRecipe().subscribe(
          data => {
              var newRecipe =  data.results[0];
              this.recipes.push(newRecipe);
              this.recipesProvider.saveDishes(this.recipes);
          },
          err => {
              console.log(err);
          },
          () => console.log('Loaded a new recipe because the user asked for it')
      );



  }

  public addEater(dishe) {
        dishe.amount++;
  }

  public removeEater(dishe) {
      if(dishe.amount > 1)
            dishe.amount--;
  }

}
