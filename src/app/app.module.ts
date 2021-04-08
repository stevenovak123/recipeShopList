import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListService } from './shooping-list/shopping-list.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoopingListComponent } from './shooping-list/shooping-list.component';
import { ShoppingEditComponent } from './shooping-list/shopping-edit/shopping-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { loadingSpinnerComponent } from './shared/spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { RecipesModule } from './recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
    ShoopingListComponent,
    ShoppingEditComponent,
   
    DropdownDirective,
    AuthComponent,
    loadingSpinnerComponent,
    AlertComponent
 
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule
    
  ],
  providers: [ShoppingListService,RecipeService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorService,
      multi:true}
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
