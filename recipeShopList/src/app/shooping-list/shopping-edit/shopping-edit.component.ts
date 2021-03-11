import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, OnInit, ViewChild,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput',{static:false}) nameInputReference:ElementRef;
 @ViewChild('amountInput',{static:false}) amountInputReference:ElementRef;
 @Output() ingredientAdded=new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName=this.nameInputReference.nativeElement.value;
    const ingAmount=this.amountInputReference.nativeElement.value;
    const newIngredient=new Ingredient(ingName,ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
