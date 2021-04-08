import { RecipeResolverService } from './recipes/recipe-resolver.service';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeLandComponent } from './recipes/recipe-land/recipe-land.component';
import { ShoopingListComponent } from './shooping-list/shooping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [{path: '', redirectTo: '/recipes', pathMatch: 'full'},
{ path:'recipes', component: RecipesComponent, children: [
  { path: '',component: RecipeLandComponent},
  { path: 'new',component: RecipeEditComponent},
  { path: ':id',component: RecipeDetailComponent,resolve:[RecipeResolverService]},
  { path: ':id/edit',component: RecipeEditComponent,resolve:[RecipeResolverService]}
  
]},
{ path:'shooping-list', component: ShoopingListComponent},
{path:'auth',component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
 