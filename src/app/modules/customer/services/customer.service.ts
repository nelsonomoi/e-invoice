import { Customer } from './../models/customer.model';
import { environment } from './../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  BASE_URL =  environment.BASE_API_ENDPOINT +"/customer"

  constructor(
    private http: HttpClient
  ) { }


  fetchCustomers(dataTablesParameters: any) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // queryParams 

    const payload = dataTablesParameters 
    
    return this.http.post(`${this.BASE_URL}/paging`,payload,{headers:headers})
  }


  saveCustomer(payload: Customer){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.BASE_URL,payload,{ headers })

  }


  searchCustomer(searchCustomerForm:any) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let payload = {
      customerId: searchCustomerForm.controls.customerId.value
    }

    return this.http.post(this.BASE_URL+"/search",payload,{ headers })
  }

}
