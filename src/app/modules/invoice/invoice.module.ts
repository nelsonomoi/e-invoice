import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressBarModule } from '@angular/material/progress-bar';

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
    DataTablesModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSortModule
  ]
})
export class InvoiceModule { }
