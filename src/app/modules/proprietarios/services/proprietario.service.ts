import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/utils/services/crud.service';
import { Proprietarios} from '../../../core/models/proprietarios';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { API_CONFIG } from 'src/app/core/config/api.config';

import { Setor} from '../../../core/models/setor';
import { Posto} from '../../../core/models/posto';


@Injectable({
  providedIn: 'root'
})
export class ProprietarioService extends CrudService<Proprietarios> {
  public isTeste = new BehaviorSubject<boolean>(false);

  constructor(
    protected http: HttpClient
  ){
    super(http, "/proprietarios");
  }

  public findAllSetor(): Observable<Setor[]>{
    return this.http.get<Setor[]>(`${API_CONFIG.baseurl}/setor`);
  }
  public findAllPosto(): Observable<Posto[]>{
    return this.http.get<Posto[]>(`${API_CONFIG.baseurl}/posto`);
  }
}
