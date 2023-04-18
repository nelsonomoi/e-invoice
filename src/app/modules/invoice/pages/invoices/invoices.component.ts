import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CustomerService } from 'src/app/modules/customer/services/customer.service';
import { InvoiceDataTable } from '../../models/invoices.datatable';
import { MatTableDataSource } from '@angular/material/table';
import { InvoiceService } from '../../services/invoice.service';
import { catchError, map, startWith, switchMap } from 'rxjs';
import { Customer } from 'src/app/modules/customer/models/customer.model';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit, OnDestroy, AfterViewInit{

  // dataSource: any;

  displayedColumns: string[] = ['id', 'customerId', 'name', 'email','phone','status','action'];

  dataSource = new MatTableDataSource<InvoiceDataTable>() ;

  // customerData: any
  // customerData = new MatTableDataSource<InvoiceDataTable>();
  invoiceTable: InvoiceDataTable;

  totalData: number;

  InvoiceData: any;

  @ViewChild('paginator') paginator: MatPaginator;

  pageSizes = [10, 20,50,100];

  isLoading = false;

  constructor(
    private invoiceService: InvoiceService,
  ){}


  getTableData$(pageNumber: Number, pageSize: Number) {
    let payload = {
      page: pageNumber,
      size: pageSize,
    }

    return this.invoiceService.fetchCustomers(payload);

  }

  ngOnInit(): void {
    // let payload = {
    //     page: 1,
    //     size: 10,
    // };

    // this.invoiceService.fetchCustomers(payload).subscribe((data: any) => {
    //   this.customerData = data.content
    
    // });

  }

  ngOnDestroy(): void {
      
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;

    this.paginator.page
    .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoading = true;
        return this.getTableData$(
          this.paginator.pageIndex + 1,
          this.paginator.pageSize
        ).pipe(catchError(() => observableOf(null)));
      }),
      map((resp:any) => {
        if (resp == null) return [];
        this.totalData = resp.totalElements;
        this.isLoading = false;
        return resp.content;
      })
    )
    .subscribe((empData) => {
      this.InvoiceData = empData;
      this.dataSource = new MatTableDataSource(this.InvoiceData);
    });
    
  }

}


function observableOf(arg0: null): any {
  throw new Error('Function not implemented.');
}

