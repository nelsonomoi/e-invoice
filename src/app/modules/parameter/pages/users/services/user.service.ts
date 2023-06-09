import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL =  environment.BASE_API_ENDPOINT +"/customer"

  constructor(private http: HttpClient) { }


  fetchStudents(dataTablesParameters:any){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const payload = dataTablesParameters
    
    return this.http.post(this.BASE_URL+"/all",payload,{ headers })
  }
}
