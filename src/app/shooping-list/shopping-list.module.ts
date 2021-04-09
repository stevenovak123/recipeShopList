import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ShoopingListComponent } from "./shooping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";

@NgModule({
    declarations:[
        ShoopingListComponent,
        ShoppingEditComponent,
    ],
    imports:[ SharedModule,FormsModule,RouterModule.forChild([{ path:'shooping-list', component: ShoopingListComponent},])]
})
export class ShoppingListModule{

    
}