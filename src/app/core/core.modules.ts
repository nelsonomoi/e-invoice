import { ToastMessagesComponent } from './components/toast-messages/toast-messages.component';
import { StorageService } from './services/storage.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [ToastMessagesComponent],
    exports: [ToastMessagesComponent],
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