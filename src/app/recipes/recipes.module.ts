import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeLandComponent } from "./recipe-land/recipe-land.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipesComponent } from "./recipes.component";

@NgModule({
    declarations:[
        RecipesComponent,
        RecipeDetailComponent,
        RecipeListComponent,
        RecipeLandComponent,
        RecipeItemComponent,
      RecipeEditComponent 
    ],
    imports:[RouterModule,CommonModule,ReactiveFormsModule],
    exports: [
        RecipesComponent,
        RecipeDetailComponent,
        RecipeListComponent,
        RecipeLandComponent,
        RecipeItemComponent,
      RecipeEditComponent 
    ]
})
export class RecipesModule{}