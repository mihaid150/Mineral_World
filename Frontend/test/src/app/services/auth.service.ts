import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user: any){
   let UserArray  = [];
   var data = localStorage.getItem('Users');
   if(data!=null )
   {
     UserArray = JSON.parse(data);
   }
   return UserArray.find((p: { email: any; password: any; }) => p.email === user.email && p.password === user.password);
}

}
