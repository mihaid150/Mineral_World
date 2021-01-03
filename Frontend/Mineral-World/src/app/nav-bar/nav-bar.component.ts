import { Component, OnInit } from '@angular/core';
import * as alertyfy from 'alertifyjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  loggedinUser:string | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loggedIn()
  {
    var data = localStorage.getItem('token');
    if( data !=null){
        this.loggedinUser = data;
     }
    return this.loggedinUser;
  }

  onLogout()
  {
    localStorage.removeItem('token');
    alertyfy.success("Logout Successful");
    this.router.navigate(['/user/login']);
  }

}
