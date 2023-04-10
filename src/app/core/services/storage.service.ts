import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  store(key:any,value:any):void{
    sessionStorage.setItem(key,value)
  }

  retrieve(key:any): any{
    return sessionStorage.getItem(key)
  }

  remove(key:any):void{

    sessionStorage.removeItem(key)
  }

}
