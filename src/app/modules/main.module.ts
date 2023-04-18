import { CustomerModule } from './customer/customer.module';
import { ParameterModule } from './parameter/parameter.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoiceModule } from './invoice/invoice.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';




@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    CustomerModule,
    InvoiceModule,
    ParameterModule
  ]
})
export class MainModule { }
