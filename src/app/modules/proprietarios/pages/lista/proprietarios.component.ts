import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Proprietarios } from 'src/app/core/models/proprietarios';
import { Veiculos } from 'src/app/core/models/veiculos';
import { AccountService } from 'src/app/shared/utils/services/account.service';
import { Subject, observable, Observable } from 'rxjs';
import { ProprietarioService } from '../../services/proprietario.service';
import { tap, finalize, timeout, delay } from 'rxjs/operators';
import { Usuarios } from 'src/app/core/models/usuarios';
import { StorageService } from 'src/app/shared/utils/services/storage.service';

@Component({
  selector: 'app-proprietarios',
  templateUrl: './proprietarios.component.html',
  styleUrls: ['./proprietarios.component.css']
})
export class ProprietariosComponent implements OnInit {
  data: Observable<any>;
  columns: String[] = ['id', 'nome', 'email', 'nip', 'cnh', 'setor', 'posto', 'cartao']
  isLog: Subject<boolean>;
  proprietarios: Proprietarios[];
  private usuarios: Usuarios;

  constructor(
    private route: Router,
    private storage: StorageService,
    private proprietarioService: ProprietarioService
    ) { }

  ngOnInit(): void {
   this.isLog = this.proprietarioService.isTeste;
   this.data = this.getPermissions();
   
  }
  
  
  redirectUrl(event){
    this.route.navigate([`proprietarios/${event}`]);
    
  }

  private getPermissions(){
    this.usuarios = this.storage.getUser();
    switch(this.usuarios.permissao){
      case 'Supervisor':
        return this.proprietarioService.findAllActivated();
        break;
      case 'Administrador':
          return this.getAdmin();
       break;
      default:
        break;
    }
  }
  private getAdmin(): Observable<any> {
    let rota = this.route.url.split('/')[2];
    
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
