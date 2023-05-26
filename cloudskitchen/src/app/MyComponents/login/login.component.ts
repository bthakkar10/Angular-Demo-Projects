import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidators } from 'src/app/Shared/password-validators';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router){}
  submitted = false;


  LoginForm = new FormGroup({
    email: new FormControl(null, [PasswordValidators.patternValidator(new RegExp("^[a-z0-9._%-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), {emailPattern:true}) , Validators.required]),
    password: new FormControl(null, Validators.compose([
      Validators.required, 
       PasswordValidators.patternValidator(new RegExp("^.{8,20}$"), {length:true}),
      // PasswordValidators.patternValidator(new RegExp("^.{1,20}$"), {maxLengthValid:true}),
      PasswordValidators.patternValidator(new RegExp("(?=.*[0-9])"), { requiresDigit: true }),
      PasswordValidators.patternValidator(new RegExp("(?=.*[A-Z])"), { requiresUpperCase: true }),
      PasswordValidators.patternValidator(new RegExp("(?=.*[a-z])"), { requiresLowerCase: true }),
      PasswordValidators.patternValidator(new RegExp("(?=.*[!@#$%^&*])"), { requiresSpecialChars: true })
    ])),
    confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
  },
  {
    validators: PasswordValidators.MatchValidator
  }
  );

  get f(){
    return this.LoginForm.controls;
  }
  get emailValid(){
    return this.LoginForm.controls["email"].errors === null;
  }
  get emailPatternValid(){
    return !this.LoginForm.controls["email"].hasError("emailPattern");
  }
  get emailRequiredValid(){
    return !this.LoginForm.controls["email"].hasError("required");
  }
  get passwordValid(){
    return this.LoginForm.controls["password"].errors === null;
  }
  get requiredValid(){
    return !this.LoginForm.controls["password"].hasError("required");
  }
  get lengthValid(){
    return !this.LoginForm.controls["password"].hasError("length");
  }
  get requiresDigitValid() {
    return !this.LoginForm.controls["password"].hasError("requiresDigit");
  }

  get requiresUpperCaseValid() {
    return !this.LoginForm.controls["password"].hasError("requiresUpperCase");
  }

  get requiresLowerCaseValid() {
    return !this.LoginForm.controls["password"].hasError("requiresLowerCase");
  }

  get requiresSpecialCharsValid() {
    return !this.LoginForm.controls["password"].hasError("requiresSpecialChars");
  }

  onSubmit() {
    this.submitted = true;

    if (this.LoginForm.invalid) {
      return;
    }
    
    this.LoginForm.reset();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Login SuccessFull!!',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate([''])
  }
}
