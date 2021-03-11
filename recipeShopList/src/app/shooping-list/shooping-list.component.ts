import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {
ingredients: Ingredient[] =[ 
  new Ingredient('Apples',5),
  new Ingredient('Tomatoes',5),
  new Ingredient('Spinach',5)
];
  constructor() { }

  ngOnInit(): void {
  }
onIngredientAdded(ingredient:Ingredient){
  this.ingredients.push(ingredient);
}
}
