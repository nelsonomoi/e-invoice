import { ToastMessagesComponent } from './components/toast-messages/toast-messages.component';
import { StorageService } from './services/storage.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
    declarations: [
        ToastMessagesComponent,
        PaginationComponent
    ],
    exports: [
        ToastMessagesComponent,
        PaginationComponent
    ],
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