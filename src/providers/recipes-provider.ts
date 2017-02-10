import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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

  public getRecipes(){
console.log("Retrive recipes from the ws....");
    var url = 'https://sleepy-crag-97903.herokuapp.com/recipe/list';

    var data = {
      nummeals: 5
    };

    var response = this.http.post(url, data).map(data => data.json());
    console.log(response);
    return response;

  }

}
