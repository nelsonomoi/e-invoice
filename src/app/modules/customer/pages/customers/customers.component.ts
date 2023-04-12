import { ToastService } from './../../../../core/services/toast.service';
import { NewCustomerComponent } from '../modals/new-customer/new-customer.component';
import { CustomerService } from './../../services/customer.service';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalService } from 'src/app/core/services/modal.service';

declare var $: any;

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild(NewCustomerComponent) newCustomerModal: NewCustomerComponent;

    dtOptions: DataTables.Settings;

    dtTrigger: Subject<any> = new Subject<any>();

    customerData: any;

    constructor(
      private customerService: CustomerService,
      private modalService: ModalService,
      private toast: ToastService
      ) {}

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'full_numbers',
            paging: true,
            pageLength: 10,
            lengthMenu: [5, 10, 25],
            serverSide: true,
            processing: true,
            ajax: (dataTablesParameters: any, callback) => {
                this.customerService
                    .fetchCustomers(dataTablesParameters)
                    .subscribe((data: any) => {
                        this.customerData = data.content;
                        callback({
                            recordsTotal: data.totalElements,
                            recordsFiltered: data.totalElements,
                            data: this.customerData,
                        });
                    });
            },
            columns: [
                { data: 'id', searchable: false },
                { data: 'customerId', searchable: false },
                {
                    data: 'name',
                    render: function (data, type, row) {
                      if (row.customerType !='RETAIL') {
                        return row.name
                      }else{
                        return row.middlename+'. '+ row.firstname + '  ' + row.lastname;
                      }
                        
                    },
                },
                { data: 'email' },
                { data: 'phone' },
                {
                    data: 'status',
                    searchable: false,
                    render: function (data, type, row) {
                      if (row.status == 'ACTIVE') {
                        return `<span class="badge badge-success">`+row.status+`</span>`;
                      }else if(row.status == 'ENDED'){
                        return `<span class="badge badge-secondary">`+row.status+`</span>`;
                      }else{
                        return `<span class="badge badge-danger">`+row.status+`</span>`;
                      }
                       
                    },
                },
                {
                    data: null,
                    render: function (data, type, row) {
                        return `<button class="btn btn-sm"><i class="anticon anticon-eye"></i></button>`;
                    },
                },
            ],
        };
    }

    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }

    ngAfterViewInit(): void {
        this.dtTrigger.next(null);
      //   this.toast.show('This page has loaded successfully.', {
      //     title: 'Success',
      //     type: 'success',
      //     icon: 'success'
      // })
    }


    OpenNewCustomerModal(): void{
      
    }


    // onCustomerTypeChange(event:any): void{
    //   if (event.target.value == 'RETAIL') {
    //     this.isRetail = true
    //   }else{
    //     this.isRetail = false
    //   }
      
     
    // }
}
