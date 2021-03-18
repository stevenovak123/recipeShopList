import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]

})
export class RecipesComponent implements OnInit {
  SelectedRecipe:Recipe
  constructor(private RecipeService:RecipeService) { }

  ngOnInit(): void {
    this.RecipeService.recipeSelected.subscribe((Recipe:Recipe) =>{
      this.SelectedRecipe= Recipe;
    }
    );
  }

}
