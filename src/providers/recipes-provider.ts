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

  constructor(public http: Http) {
    console.log('Hello RecipesProvider Provider');
  }

  public getRecipes(amount:number){

    console.log("Retrive recipes from the ws....");
    var url = 'http://localhost:80/recipe/list';
    //url = "https://sleepy-crag-97903.herokuapp.com/recipe/list";


    let headers = new Headers();
    headers.append('Content-Type', 'application/json');


    var response = this.http.get(url + "?nummeals="+amount+"&constraints=chicken").map(data => data.json());
    return response;

  }

  public getOneRandomRecipe(){
    return this.getRecipes(1);
  }

}
