import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id :number;
editMode=false;
Rform: FormGroup;
  constructor(private route:ActivatedRoute,
    private RecipeService:RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.editMode=params['id'] !=null;
      this.inForm();
       
    });


  }  get control() { 
    return (<FormArray>this.Rform.get('ingredient')).controls;
  }
  addIng(){
    (<FormArray>this.Rform.get('ingredient')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount': new FormControl(null,[
          Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)] )
    })
    )}

  onSubmit(){

  }
  private inForm(){
    let RName='';
    let RImg='';
    let RDes='';
    let Ringredients= new FormArray([]);
    if (this.editMode){
      const recipe=this.RecipeService.getRecipe(this.id);
      RName=recipe.name;
      RImg=recipe.imagePath;
      RDes=recipe.description;
      if(recipe['ingredient']){
        
        for(let ingredient of recipe.ingredient){
          Ringredients.push(new FormGroup({
            'name': new FormControl(ingredient.name),
            'amount': new FormControl(ingredient.amount,[
              Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)
          ])

          })
          );
        }
      }
    }
    this.Rform=new FormGroup({
      'name':new FormControl(RName,Validators.required),
      'ImgP':new FormControl(RImg,Validators.required),
      'Des':new FormControl(RDes,Validators.required),
      'ingredient': Ringredients
    });

  }

}
