import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm : FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })


  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  

  ngOnInit(): void {
    $('#forgot-password').on('click',function(){
      alert("Comming soon.")
    })
  }


  onLoginSubmit(){
    console.log(this.loginForm.value);
    if (this.authService.authenticate(this.loginForm.value.email,this.loginForm.value.password)) {
      this.router.navigate(['/home'])
    }
  }

  
}
