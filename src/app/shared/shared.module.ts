import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { loadingSpinnerComponent } from "./spinner/loading-spinner.component";

@NgModule({
    declarations:[
        AlertComponent,
        loadingSpinnerComponent,
        DropdownDirective
],
    imports:[
        CommonModule
    ],
    exports:[
        AlertComponent,loadingSpinnerComponent
        ,DropdownDirective,CommonModule
    ]
})

export class SharedModule{}