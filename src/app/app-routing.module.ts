import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeLandComponent } from './recipes/recipe-land/recipe-land.component';
import { ShoopingListComponent } from './shooping-list/shooping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [{path: '', redirectTo: '/recipes', pathMatch:'full'},{ path: 'recipes', component: RecipesComponent, children: [
  {path:'',component: RecipeLandComponent},
  {path:'new',component: RecipeEditComponent},
  {path:':id',component: RecipeDetailComponent},
  {path:':id/edit',component: RecipeEditComponent}
  
]},
{ path: 'shooping-list', component: ShoopingListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
 