import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorInterceptorProvider } from './interceptors/error.interceptor'
import { HeadersInterceptorProvider } from './interceptors/headers.interceptor'




@NgModule({
  declarations: [],
  imports: [
    CommonModule 
  ],
  providers: [HeadersInterceptorProvider,ErrorInterceptorProvider]
})
export class CoreModule { }
