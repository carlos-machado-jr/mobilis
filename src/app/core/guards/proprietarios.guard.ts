import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ProprietarioService } from 'src/app/modules/proprietarios/services/proprietario.service';
import { StorageService } from 'src/app/shared/utils/services/storage.service';
import { Usuarios } from '../models/usuarios';
import { finalize, delay, tap } from 'rxjs/operators';
import { AccountService } from 'src/app/shared/utils/services/account.service';

@Injectable({
  providedIn: 'root'
})
export class ProprietariosGuard implements Resolve<any> {
  private usuarios: Usuarios;
  constructor(
    private proprietarioService: ProprietarioService,
    private storage: StorageService
  ){}
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<any> {
      this.usuarios = this.storage.getUser();

      switch(this.usuarios.permissao){
          case 'Supervisor':
            if(next.params['id']){
              
              return this.findById(next.params['id']);
            } else{
            return this.proprietarioService.findAllActivated();
            }
            break;
          case 'Administrador':
            if(next.params['id']){
              
              return this.findById(next.params['id']);
            } else{
              return this.getAdmin(state);
            }
            
            
            break;
          default:
            break;
      }
      
      
  }
  

  private findById(id: String): Observable<any>{
    
    return this.proprietarioService.findById(id);
  }
  private getAdmin(state: RouterStateSnapshot): Observable<any> {
    let rota = state.url.split('/')[2];
    
    switch (rota) {
      case 'ativados':
        return this.proprietarioService.findAllActivated();
        break;
      case 'desativados':
        return this.proprietarioService.findAllDisabled();
        break; 
      default:
        return this.proprietarioService.findAll()
         
        
    }


  }
}
