import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }

addUser(user: User){
  let users = [];
   var data = localStorage.getItem('Users');
  if(data!=null){

    users = JSON.parse(data);
    users = [user, ...users];
  }
  else {
    users = [user];
  }
 localStorage.setItem('Users', JSON.stringify(users));
}

}
