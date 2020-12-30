import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  registerationForm: FormGroup | undefined;
  constructor() { }

  ngOnInit() {
    this.registerationForm = new FormGroup({
     userName: new FormControl(null, Validators.required),
     email: new FormControl(null, [Validators.required, Validators.email]),
     password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
     confirmPassword: new FormControl(null, [Validators.required]),
     mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    });
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

 onSubmit(){
   console.log(this.registerationForm);
 }
}
