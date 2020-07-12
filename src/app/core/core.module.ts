import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorInterceptorProvider } from './interceptors/error.interceptor'
import { HeadersInterceptorProvider } from './interceptors/headers.interceptor'
import { AuthGuard } from './guards/auth.guard'




@NgModule({
  declarations: [],
  imports: [
    CommonModule 
  ],
  providers: [HeadersInterceptorProvider,ErrorInterceptorProvider, AuthGuard]
})
export class CoreModule { }
