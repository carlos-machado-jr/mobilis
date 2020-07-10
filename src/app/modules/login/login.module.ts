import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// material design
import {MatFormFieldModule, MatInputModule } from '@angular/material';




@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent],
  imports: [
    // common
    
    CommonModule,
    // modules
    LoginRoutingModule,
    // angular forms
    ReactiveFormsModule,
    FormsModule,
    // material design
    MatFormFieldModule,
    MatInputModule, 

   
    
  ]
})
export class LoginModule { }
