import { ToastService } from './../../../../../core/services/toast.service';
import { Customer } from './../../../models/customer.model';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
    selector: 'app-new-customer',
    templateUrl: './new-customer.component.html',
    styleUrls: ['./new-customer.component.css'],
})
export class NewCustomerComponent implements OnInit {

    customerForm: FormGroup = new FormGroup({
        customerType: new FormControl(),
        customerId: new FormControl(),
        firstname: new FormControl(),
        middlename: new FormControl(),
        lastname: new FormControl(),
        name: new FormControl(),
        email: new FormControl(),
        phone: new FormControl()
    })

    isLoading: boolean = false

    isRetail: boolean = false;

    @ViewChild('newCustomerModal') customerModal: any;

    constructor(
      private customerService: CustomerService,
      private toast: ToastService
    ) {}

    ngOnInit(): void {}

    onCustomerTypeChange(event: any): void {
        if (event.target.value == 'RETAIL') {
            this.isRetail = true;
        } else {
            this.isRetail = false;
        }
    }


    onCustomerFormSubmit(){

        // this.isLoading =  true 

        let name = this.customerForm.value.name

        let status = 'ACTIVE'

        if (this.customerForm.value.customerType == 'RETAIL') {
            name = this.customerForm.value.firstname + " "+ this.customerForm.value.middlename + ". "+this.customerForm.value.lastname
        }

        let customer = {
            customerType: this.customerForm.value.customerType,
            customerId: this.customerForm.value.customerId,
            firstname: this.customerForm.value.firstname,
            middlename: this.customerForm.value.middlename,
            lastname: this.customerForm.value.lastname,
            name: name,
            email: this.customerForm.value.email,
            phone: this.customerForm.value.phone,
            status: status
        }

        this.toast.show('Successfully created new customer.'+ customer.name, {
            title: 'Success',
            type: 'success',
            icon: 'success'
        })

        this.toast.show('Failed to create new customer.'+ customer.name, {
            title: 'Error',
            type: 'error',
            icon: 'error'
        })


        // this.customerService.saveCustomer(customer).subscribe(
        //     (resp:any) => {
        //         this.isLoading = false
        //         console.log(resp);
                
        //     },
        //     (error:any) => {
        //         this.isLoading = false
        //         console.log(error);
        //     }
        // )
        
    }
}
