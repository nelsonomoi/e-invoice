import { ToastService } from './../../../../core/services/toast.service';
import { NewCustomerComponent } from '../modals/new-customer/new-customer.component';
import { CustomerService } from './../../services/customer.service';
import {
    AfterViewInit,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { ModalService } from 'src/app/core/services/modal.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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

    customerData: any[] = [];

    searchCustomerForm = this.fb.group({
      customerId: ['']
    })

    constructor(
        private customerService: CustomerService,
        private modalService: ModalService,
        private toast: ToastService,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        let payload = {
            page: 1,
            size: 10,
        };

        this.customerService.fetchCustomers(payload).subscribe((data: any) => {
          this.customerData = data.content
         
        });
        // const that = this

        // this.dtOptions = {
        //   pagingType: 'full_numbers',
        //   searching: false,
        //   ordering: true,
        //   ajax: (dataTablesParameters: any, callback) => {
        //     console.log(dataTablesParameters);
        //     that.customerService.fetchCustomers(dataTablesParameters).subscribe(
        //       (resp:any) => {
        //         that.customerData = resp.content;
    
        //         callback({
        //           recordsTotal: resp.recordsTotal,
        //           recordsFiltered: resp.recordsFiltered,
        //           data: []
        //         });

        //       });

        //   },
        //   columns: [
        //     { data: 'id' }, 
        //     { data: 'customerId' },
        //     { 
        //       title: 'Name',
        //       render: function(data,type,row){
        //         return row.firstname + ' ' + row.lastname
        //       }
        //      },
        //     { data: 'email' },
        //     { data: 'phone' },
        //     { data: 'status' },
        //     {
        //       title: 'Action',
        //       render: function(data,type,row){

        //       }
        //     }
        //   ]
        // };
    }

    ngOnDestroy(): void {
      
    }

    ngAfterViewInit(): void {
    }

    resetDataTable(){
      let payload = {
        page: 1,
        size: 10,
    };

      this.customerService.fetchCustomers(payload).subscribe((data: any) => {
        this.customerData = data
       
      });
    }

    displayCustomerData(customerData: any) {
    }

    OpenNewCustomerModal(): void {}

  search(){

    this.customerService.searchCustomer(this.searchCustomerForm).subscribe((data: any) => {
        this.customerData = data.content
        this.searchCustomerForm.reset()
    });

    $('#search-customer').modal('hide')
  }
}
