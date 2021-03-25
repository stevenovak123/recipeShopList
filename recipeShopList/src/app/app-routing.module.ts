import { ShoopingListComponent } from './shooping-list/shooping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [{path: '', redirectTo: '/recipes'},{ path: 'recipes', component: RecipesComponent},
{ path: 'shopping-list', component: ShoopingListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
