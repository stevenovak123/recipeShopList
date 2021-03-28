import { Subscription } from 'rxjs';
import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy{
  @ViewChild('f',{static:false}) slForm:NgForm;
 subscription:Subscription;
 editMode=false;
 editIndex: number;
 editItem: Ingredient;
  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
    this.slService.Edit.subscribe((index:number)=>
    {
      this.editIndex=index;
      this.editMode=true;
      this.editItem=this.slService.getIngredient(index);
      this.slForm.setValue({
        name:this.editItem.name,
        amount:this.editItem.amount
      })
    });
  }
  onAddItem(form:NgForm){
  const value= form.value; 
    const newIngredient=new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.slService.update(this.editIndex,newIngredient);
    }else{
      this.slService.addIngredient(newIngredient);
   
    }
   
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }}
