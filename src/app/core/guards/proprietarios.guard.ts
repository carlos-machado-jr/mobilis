import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ProprietarioService } from 'src/app/modules/proprietarios/services/proprietario.service';
import { StorageService } from 'src/app/shared/utils/services/storage.service';
import { Usuarios } from '../models/usuarios';

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
      
      if(this.usuarios.permissao === "Supervisor"){

        return this.proprietarioService.findAllActivated();

      } else if  (this.usuarios.permissao === "Usuario"){

        
        
      } else {
        let url = state.url.split('/');
        if (url.length > 3){
          console.log('maior que 3');
          
        }
        return this.getAdmin(state);
      }
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
      case 'adicionar':
        return this.proprietarioService.findById("1"); 
        break;  
      default:
        return this.proprietarioService.findAll();
        
    }


  }
}
