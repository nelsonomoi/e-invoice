import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';



const LOGOUT_REDIRECT = ['/account/login']

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = 'KHbu6L6lvFn8EN5W=VlhbsjVls?/mbln!WGP3mHqA?-0xkBiH61Pi0xVL7s?b8pBq6hjJkCm=cqQpbo/bVBmsirz-2xvkznHcOvpk3?hmQ7/kO6z8ratCUU9ksDL8Mp-u0JqFELMXB=2AKeZg1cnkAVGdL/wnPdNDi6jst2Fwr=T5zSclHXR-rkm3/Ml5?gE0JY6K7GXaWz0b8WwVmnC7mMFBcZv?tCL-9qY5e-!Okb/WNw84h!H4bChfWZp!MPz';

  constructor(
    private storageService: StorageService,
    private router: Router
    ) { }


  authenticate(username:string,password:string): boolean{
    try {
      this.storageService.store("token",this.token)
      return true
    } catch (error) {
      return false
    }
  }


  isAuthenticated(): boolean {

    this.token = this.storageService.retrieve("token")

    if (this.token != null) {
      return true
    }
    return false
  }


  logout(): void{
    console.log("clciked");
    
    this.storageService.remove("token")
    this.router.navigate(LOGOUT_REDIRECT)
  }

}
