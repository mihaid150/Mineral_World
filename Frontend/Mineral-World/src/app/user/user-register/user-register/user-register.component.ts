import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup | undefined;
  user: User | undefined;
  userSubmitted: boolean | undefined;
  constructor(private fb: FormBuilder, private userService: UserServiceService) { }

  ngOnInit() {
    this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registerationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null,[Validators.required, Validators.email]],
      password: [null,[Validators.required, Validators.minLength(4)]],
      confirmPassword: [null, [Validators.required]],
      mobile: [null,[Validators.required, Validators.maxLength(4)]]
    });
  }




onSubmit(){
  console.log(this.registerationForm!.value);
  this.userSubmitted = true;
  if(this.registerationForm!.valid){
     //this.user = Object.assign(this.user, this.registerationForm!.value);
     this.userService.addUser(this.userData());
     this.registerationForm!.reset()
     this.userSubmitted = false;
 }
}

userData(): User {
  return this.user = {
    userName: this.userName.value,
    email: this.email.value,
    password: this.password.value,
    mobile: this.mobile.value
  }
}

get userName(){
  return this.registerationForm!.get('userName') as FormControl;
}

get password(){
  return this.registerationForm!.get('password') as FormControl;
}

get confirmPassword(){
  return this.registerationForm!.get('confirmPassword') as FormControl;
}

get email(){
  return this.registerationForm!.get('email') as FormControl;
}

get mobile(){
  return this.registerationForm!.get('userName') as FormControl;
}




}
