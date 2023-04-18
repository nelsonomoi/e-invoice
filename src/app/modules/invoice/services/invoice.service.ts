import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

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

}
