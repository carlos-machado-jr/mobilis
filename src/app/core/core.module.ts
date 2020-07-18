import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorInterceptorProvider } from './interceptors/error.interceptor'
import { HeadersInterceptorProvider } from './interceptors/headers.interceptor'
import { AuthGuard } from './guards/auth.guard'
import { LoaderGuard } from './guards/loader.guard'
import { UsuariosGuard } from './guards/usuarios.guard'




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [HeadersInterceptorProvider,ErrorInterceptorProvider, AuthGuard, LoaderGuard]
})
export class CoreModule { }
