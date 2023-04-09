import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './pages/company/company.component';
import { UsersComponent } from './pages/users/users.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    CompanyComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule
  ],
  exports: []
})
export class ParameterModule { }
