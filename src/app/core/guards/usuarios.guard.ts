import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../../modules/usuarios/services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosGuard implements Resolve<any> {
 
  constructor(
    private usuarioService: UsuariosService
  ){}
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<any> {
    
      return this.usuarioService.findAll();
  }
  
}
