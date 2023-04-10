import { CustomersComponent } from './pages/customers/customers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';


const routes: Routes = [
  {
    path: 'customers',
    component: CustomersComponent
  }
 
]


@NgModule({
  declarations: [
    CustomerComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule
  ]
})
export class CustomerModule { }
