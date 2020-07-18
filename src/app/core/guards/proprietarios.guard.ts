import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ProprietarioService } from 'src/app/modules/proprietarios/services/proprietario.service';

@Injectable({
  providedIn: 'root'
})
export class ProprietariosGuard implements Resolve<any> {
  
  constructor(
    private proprietarioService: ProprietarioService
  ){}
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<any> {
    
      return this.proprietarioService.findAll();
  }
  
}
