import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
       
    ],
    exports: [
   
        
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule
    ]

})
export class CoreModule{

}