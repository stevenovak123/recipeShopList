import {
  RecipeService
} from './../recipe.service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  ActivatedRoute,
  Params,
  Router
} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  Rform: FormGroup;
  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.inForm();
    });
  }
  onSubmit() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.Rform.value);
    } else {
      this.recipeService.addRecipe(this.Rform.value);
    }
    this.cancel();
  }
  get control() {
    return ( < FormArray > this.Rform.get('ingredient')).controls;
  }
  addIng() {
    ( < FormArray > this.Rform.get('ingredient')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }
cancel(){
  this.router.navigate(['../'],{relativeTo:this.route})
}
  private inForm() {
    let RName = '';
    let RImg = '';
    let RDescription = '';
    let Ringredients = new FormArray([]);
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      RName = recipe.name;
      RDescription = recipe.description;
      RImg = recipe.imagePath;
      if (recipe['ingredient']) {
        for (let ingredient of recipe.ingredient) {
          Ringredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [
              Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)
            ])

          }));
        }
      }
    }
    this.Rform = new FormGroup({
      'name': new FormControl(RName, Validators.required),
      'imagePath': new FormControl(RImg, Validators.required),
      'description': new FormControl(RDescription, Validators.required),
      'ingredient': Ringredients
    });

  }
  onDelete(index: number){
    (<FormArray>this.Rform.get('ingredient')).removeAt(index);
  }

}
