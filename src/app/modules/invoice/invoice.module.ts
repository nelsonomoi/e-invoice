import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [

  {
    path: 'invoices',
    component: InvoicesComponent
  }
 
]


@NgModule({
  declarations: [
    InvoiceComponent,
    InvoicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule
  ]
})
export class InvoiceModule { }
