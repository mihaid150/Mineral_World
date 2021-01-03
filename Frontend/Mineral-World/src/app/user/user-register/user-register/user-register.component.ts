import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import * as alertyfy from 'alertifyjs';
//import { AlertifyService } from 'src/app/services/alertify.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup | undefined;
  user: User | undefined;
  userSubmitted: boolean | undefined;
  constructor(private fb: FormBuilder, private userService: UserServiceService, ) { }

  ngOnInit() {
    this.createRegistrationForm();
  }

  hasError(str: String)
  {
    return false;
  }

  createRegistrationForm(){
    this.registerationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null,[Validators.required, Validators.email]],
      password: [null,[Validators.required, Validators.minLength(4)]],
      confirmPassword: [null, [Validators.required]],
      mobile: [null,[Validators.required, Validators.maxLength(4)]],
      country: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      street: [null, Validators.required],
      number: [null, Validators.required],
      postalCode: [null, Validators.required],
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
     alertyfy.success("Congrats, you are successfully registered!");
 }else {
  alertyfy.error("Kindly provide the required fields");
 }
}

userData(): User {
  return this.user = {
    userName: this.userName.value,
    email: this.email.value,
    password: this.password.value,
    mobile: this.mobile.value,
    country: this.country.value,
    state: this.state.value,
    city: this.city.value,
    street: this.street.value,
    number: this.number.value,
    postalCode: this.postalCode.value
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
  return this.registerationForm!.get('mobile') as FormControl;
}

get country(){
  return this.registerationForm!.get('country') as FormControl;
}

get state(){
  return this.registerationForm!.get('state') as FormControl;
}

get city(){
  return this.registerationForm!.get('city') as FormControl;
}

get street(){
  return this.registerationForm!.get('street') as FormControl;
}

get number(){
  return this.registerationForm!.get('number') as FormControl;
}

get postalCode(){
  return this.registerationForm!.get('postalCode') as FormControl;
}









}
