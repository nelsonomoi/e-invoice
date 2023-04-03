import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { AccountComponent } from './account.component';



@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
