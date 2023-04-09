import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  fetchStudents(dataTablesParameters:any){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const payload = dataTablesParameters
    
    return this.http.post("http://localhost:8080/api/v1/students",payload,{ headers })
  }
}
