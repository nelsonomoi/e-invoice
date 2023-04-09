import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './pages/company/company.component';
import { UsersComponent } from './pages/users/users.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    CompanyComponent,
    UsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: []
})
export class ParameterModule { }
