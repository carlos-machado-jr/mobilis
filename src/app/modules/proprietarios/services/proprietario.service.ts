import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/utils/services/crud.service';
import { Proprietarios} from '../../../core/models/proprietarios'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProprietarioService extends CrudService<Proprietarios> {

  constructor(
    protected http: HttpClient
  ){
    super(http, "/proprietarios");
  }
}
