import { Injectable } from '@angular/core';
import { CrudService } from '../../../shared/utils/services/crud.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Veiculos } from '../../../core/models/veiculos'
import { Montadora } from '../../../core/models/montadora'
import { Cor } from '../../../core/models/cor'
import { API_CONFIG } from 'src/app/core/config/api.config';


@Injectable({
  providedIn: 'root'
})
export class VeiculoService extends CrudService<Veiculos>{

  constructor(
    protected http: HttpClient
  ){
    super(http, "/veiculos");
  }

  public findAllMontadora(): Observable<Montadora[]>{
    return this.http.get<Montadora[]>(`${API_CONFIG.baseurl}/montadora`);
  }
  public findAllCor(): Observable<Cor[]>{
    return this.http.get<Cor[]>(`${API_CONFIG.baseurl}/cor`);
  }
}
