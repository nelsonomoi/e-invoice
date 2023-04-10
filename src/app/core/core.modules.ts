import { StorageService } from './services/storage.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    providers: [
        StorageService
    ]

})
export class CoreModule{

}