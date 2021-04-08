
import {Subject} from 'rxjs';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService{
    ingredientChanged= new Subject<Ingredient[]>();
    Edit=new Subject<number>();
    private ingredients: Ingredient[] =[];
      getIngredients(){
          return this.ingredients.slice();
      }
      getIngredient(index:number){
          return this.ingredients[index];
      }
      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientChanged.next(this.ingredients.slice());
      }
      addIngredients(ingredient:Ingredient[]){
          this.ingredients.push(...ingredient);
          this.ingredientChanged.next(this.ingredients.slice());
      }
      update(index:number,newIngredient:Ingredient){
          this.ingredients[index]=newIngredient;
          this.ingredientChanged.next(this.ingredients.slice());

      }
      deleteIngredient(index:number){
          this.ingredients.splice(index,1);
          this.ingredientChanged.next(this.ingredients.slice());
      }
}