import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
      return next.handle(request)
      
      .pipe(
        tap((response: HttpEvent<any>) => {
          if (response instanceof HttpResponse) {
            console.log("entrou");
            
            console.log(response.headers.get('Authorization'));
          }
        }),
        catchError(this.handleError)
        
        );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      
      console.error('Ocorreu um erro no servidor:', error.error.message);
    } else {
      let erro = JSON.parse(error.error);
      console.error(
        `Codigo de erro: ${error.status}, ` +
        `Mensagem: ${erro['message']}`);
    }
 
    return throwError(
      'Algo ruím aconteceu; por favor, tente novamente mais tarde.');
  };
}
export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};
