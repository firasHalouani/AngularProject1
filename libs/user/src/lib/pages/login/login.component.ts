import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { LocalstorageService } from 'libs/products/src/lib/services/localstorage.service';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AuthService } from '../../../../../products/src/lib/services/auth.service';

@Component({
  selector: 'firas-users-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup;
  isSubmitted = false;
  authError = false;
  authMessage = 'Email or Password are wrong';

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private localstorageService:LocalstorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._initLoginForm();
  }

  private _initLoginForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if(this.loginFormGroup.invalid) return;

    const loginData = {
      email : this.loginForm['email'].value,
      password : this.loginForm['password'].value,
    }
    this.auth.login(loginData.email,loginData.password).subscribe((user) =>{
      //console.log(user);
      this.authError = false; 
      this.localstorageService.setToken(user.token);
      this.router.navigate(['/']);
    },(error:HttpErrorResponse)=>{
      //console.log(error); pour le test
      this.authError=true;
      if(error.status!==400){
        this.authMessage = "error in the server"
      }
    })
    
  }

  get loginForm() {
    return this.loginFormGroup.controls;
  }
}
