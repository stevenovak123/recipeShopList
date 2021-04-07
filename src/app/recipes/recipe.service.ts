

import { ShoppingListService } from './../shooping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService{

 RChanged= new Subject<Recipe[]>();
   
 private recipes: Recipe[]=[];
constructor(private slService: ShoppingListService){

}
addRecipe(recipe: Recipe){
   this.recipes.push(recipe);
   this.RChanged.next(this.recipes.slice());
}
updateRecipe(index: number, newRecipe:Recipe){
   this.recipes[index] = newRecipe;
   this.RChanged.next(this.recipes.slice());
}

getRecipes(){
    return this.recipes.slice();
 }
 getRecipe(index:number){
    return this.recipes[index];
 }
 addIngredientsToShoppingList(ingredient:Ingredient[]){
    this.slService.addIngredients(ingredient);
 }
 deleteRecipe(index :number){
    this.recipes.splice(index,1);
    this.RChanged.next(this.recipes.slice());
 }
 setRecipes(recipes :Recipe[]){
    this.recipes=recipes;
    this.RChanged.next(this.recipes.slice());
 }

}