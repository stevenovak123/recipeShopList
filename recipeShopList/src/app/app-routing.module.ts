import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeLandComponent } from './recipes/recipe-land/recipe-land.component';
import { ShoopingListComponent } from './shooping-list/shooping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [{path: '', redirectTo: '/recipes', pathMatch:'full'},{ path: 'recipes', component: RecipesComponent, children: [
  {path:'',component: RecipeLandComponent},
  {path:':id',component: RecipeDetailComponent}
]},
{ path: 'shooping-list', component: ShoopingListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
 