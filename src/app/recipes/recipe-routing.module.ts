import { RecipesComponent } from './recipes.component';
import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from '../auth/auth-guard';
import { RecipeLandComponent } from './recipe-land/recipe-land.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeResolverService } from './recipe-resolver.service';


const routes: Routes=[
   
{ path:'recipes', component: RecipesComponent,canActivate:[AuthGuard],  children: [
  { path: '',component: RecipeLandComponent},
  { path: 'new',component: RecipeEditComponent},
  { path: ':id',component: RecipeDetailComponent,resolve:[RecipeResolverService]},
  { path: ':id/edit',component: RecipeEditComponent,resolve:[RecipeResolverService]}
  
]},
];

@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[RouterModule]
})
export class RecipesRoutingModule{}