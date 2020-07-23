import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// material design
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatSuffix } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthserviceService } from 'src/app/shared/utils/services/authservice.service';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';
import { SkeletonModule } from 'src/app/shared/components/skeleton/skeleton.module';
import { HideIfLoaderDirective } from 'src/app/shared/utils/directives/hide-if-loader.directive';




@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, HideIfLoaderDirective],
  imports: [
    // common
    
    CommonModule,
    // modules
    LoginRoutingModule,
    // angular forms
    ReactiveFormsModule,
    FormsModule,
    SpinnerModule,
    // material design
    MatFormFieldModule,
    MatInputModule, 
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    SkeletonModule
   
    
  ],
  providers: [AuthserviceService]
})
export class LoginModule { }
