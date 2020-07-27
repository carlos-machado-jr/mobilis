import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot,  Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/shared/utils/services/account.service';
import { finalize, tap, delay } from 'rxjs/operators';
import { StorageService } from 'src/app/shared/utils/services/storage.service';
import { Usuarios } from '../models/usuarios';
import { LoginService } from 'src/app/modules/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderGuard implements Resolve<any> {
  public user: any
  constructor(
    private account: AccountService,
    private storage: StorageService,
    private loginService: LoginService
    ){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
    this.user = this.storage.getLocalUser();
    console.log("loader");
    
    
     

    return this.account.findByPerfil(this.user.nome_usuario)
    .pipe( 
      tap( (usuarios: Usuarios) => {
        this.storage.setUser(usuarios);
        
      }),
      finalize(()=>this.loginService.closeSplash())
      
      );
  }
  
}
