

import { ShoppingListService } from './../shooping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService{

   private recipes: Recipe[]= [
        new Recipe('Pizza','Pizza with cheese','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=768:*',
        [
           new Ingredient('Wheat',2),
           new Ingredient('Pepperoni',8)
        ]),
        
        new Recipe('Burrito','Wrap with rice,beans and guac','https://www.rvcj.com/wp-content/uploads/2019/10/Burrito.jpeg',[
         new Ingredient('Avocado',2),
         new Ingredient('Wrap',1)
      ]),
      ];
constructor(private slService: ShoppingListService){

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

}