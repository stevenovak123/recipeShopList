import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListService } from './shooping-list/shopping-list.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShoopingListComponent } from './shooping-list/shooping-list.component';
import { ShoppingEditComponent } from './shooping-list/shopping-edit/shopping-edit.component';
import { RecipeLandComponent } from './recipes/recipe-land/recipe-land.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    ShoopingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    DropdownDirective,
    RecipeLandComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
