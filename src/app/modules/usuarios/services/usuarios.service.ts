import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/utils/services/crud.service';
import { Usuarios } from 'src/app/core/models/usuarios';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends CrudService<Usuarios>{

  constructor(
    protected http: HttpClient
  ){
    super(http, "/usuarios");
  }
}
