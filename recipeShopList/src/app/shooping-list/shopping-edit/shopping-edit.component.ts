import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput',{static:false}) nameInputReference:ElementRef;
 @ViewChild('amountInput',{static:false}) amountInputReference:ElementRef;
 
  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName=this.nameInputReference.nativeElement.value;
    const ingAmount=this.amountInputReference.nativeElement.value;
    const newIngredient=new Ingredient(ingName,ingAmount);
    this.slService.addIngredient(newIngredient);
   
  }
}
