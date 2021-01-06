import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import * as alertyfy from 'alertifyjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private AuthService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const token = this.AuthService.authUser(loginForm.value);
    if(token)
    {
      localStorage.setItem('token',(token.email,token.userName));
      alertyfy.success("Login Successful.");
      this.router.navigate(['/main']);
    } else
    {
      alertyfy.error("Email or Password is not correct. Please try again.");
    }
  }

}
