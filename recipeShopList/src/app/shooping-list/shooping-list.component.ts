import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css'],
  
})
export class ShoopingListComponent implements OnInit,OnDestroy {
ingredients: Ingredient[];
private  subscription:Subscription
  constructor(private slService: ShoppingListService ) { }

  ngOnInit(): void {
    this.ingredients= this.slService.getIngredients();
    this.slService.ingredientChanged.subscribe((ingredients:Ingredient[])=>
    {
   this.ingredients=ingredients;
    });
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

}
