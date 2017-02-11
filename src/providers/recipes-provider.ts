import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Config} from "../app/config";


/*
  Generated class for the RecipesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RecipesProvider {

   static recipesSaved: String="";

  constructor(public http: Http) {
    console.log('Hello RecipesProvider Provider');
  }

  public getRecipes(amount:number){

    console.log("Retrive recipes from the ws....");
    var url = 'http://localhost:80/recipe/list';
    url = "https://sleepy-crag-97903.herokuapp.com/recipe/getdishes";
 //   url = "https://sleepy-crag-97903.herokuapp.com/recipe/list";
//

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');


    var response = this.http.get(url + "?numdishes="+amount+"&constraints=chicken").map(data => data.json());
    return response;

  }

  public getOneRandomRecipe(){
    return this.getRecipes(1);
  }



  public saveDishes(recipes){
console.log("saveDishes");
    var ids = "";
    for(var i=0; i<recipes.length; i++) {
      if(i!=0){
        ids+=",";
      }
      ids += recipes[i].recipe_id;

    }

    RecipesProvider.recipesSaved = ids;

    console.log("meals id = "+ RecipesProvider.recipesSaved );

  }

  public getIngredientsForSavedDishes() {

    if(!RecipesProvider.recipesSaved) {
      console.error("HERE");
    } else {

      var url = "https://sleepy-crag-97903.herokuapp.com/list/add_recipes";


      console.log("meals ifdsfafdsd = "+ RecipesProvider.recipesSaved );

      var response = this.http.get(url + "?dishesids=" + RecipesProvider.recipesSaved).map(data => data.json());

      return response;
    }

  }

}
