import { environment } from './../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

    const payload = dataTablesParameters
    
    return this.http.post(this.BASE_URL+"/all",payload,{ headers })
  }
}
