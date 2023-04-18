import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCustomerComponent } from './pages/modals/new-customer/new-customer.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { CoreModule } from "../../core/core.modules";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


const routes: Routes = [
  {
    path: 'customers',
    component: CustomersComponent
  }
 
]


@NgModule({
    declarations: [
        CustomerComponent,
        CustomersComponent,
        NewCustomerComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        DataTablesModule,
        NgxDatatableModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule
    ]
})
export class CustomerModule { }
