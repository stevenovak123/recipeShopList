import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css'],
  
})
export class ShoopingListComponent implements OnInit {
ingredients: Ingredient[];
  constructor(private slService: ShoppingListService ) { }

  ngOnInit(): void {
    this.ingredients= this.slService.getIngredients();
    this.slService.ingredientChanged.subscribe((ingredients:Ingredient[])=>
    {
   this.ingredients=ingredients;
    });
  }

}
