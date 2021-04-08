import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import{ exhaustMap, map, take, tap} from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';


@Injectable({providedIn:'root'})

export class DataStorageService{
    constructor(private http:HttpClient,
        private recipesService:RecipeService,
        private authService: AuthService){}
    storeRecipes(){
        const recipes= this.recipesService.getRecipes();
      return this.http.put('https://recipeapp-1b34c-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe(Response=>{
            console.log(Response);
        });
    }
    fetchRecipes(){
        return this.http
        .get<Recipe[]>(
          'https://recipeapp-1b34c-default-rtdb.firebaseio.com/recipes.json'
        )
        .pipe(
          map(recipes => {
            return recipes.map(recipe => {
              return {
                ...recipe,
                ingredients: recipe.ingredient ? recipe.ingredient : []
              };
            });
          }),
          tap(recipes => {
            this.recipesService.setRecipes(recipes);
          })
        );
    }
  }
