import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable({providedIn:'root'})

export class DataStorageService{
    constructor(private http:HttpClient,
        private recipesService:RecipeService){}
    storeRecipes(){
        const recipes= this.recipesService.getRecipes();
        this.http.put('https://recipeapp-1b34c-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe(Response=>{
            console.log(Response);
        });
    }
    fetchRecipes(){
        this.http.get<Recipe[]>('https://recipeapp-1b34c-default-rtdb.firebaseio.com/recipes.json').subscribe(recipes=>{
        this.recipesService.setRecipes(recipes);
        })
    }
}