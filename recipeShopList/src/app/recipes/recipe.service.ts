import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService{
recipeSelected=new EventEmitter<Recipe>();
   private recipes: Recipe[]= [
        new Recipe('Test Recipe','Test Recipe Description','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=768:*'),
        
        new Recipe('Test Recipe2','Test Recipe2 Description','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=768:*'),
      ];

getRecipes(){
    return this.recipes.slice();
 }
}