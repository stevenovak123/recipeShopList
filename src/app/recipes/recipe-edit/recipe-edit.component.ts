import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id :number;
editMode=false;
form: FormGroup;
  constructor(private route:ActivatedRoute,
    private RecipeService:RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.editMode=params['id'] !=null;
      this.inForm();
       
    });


  }
  private inForm(){
    let RName='';
    let RImg='';
    let RDes='';

    if (this.editMode){
      const recipe=this.RecipeService.getRecipe(this.id);
      RName=recipe.name;
      RImg=recipe.imagePath;
      RDes=recipe.description;

    }
    this.form=new FormGroup({
      'name':new FormControl(RName),
      'ImgP':new FormControl(RImg),
      'Des':new FormControl(RDes),
    })

  }

}
