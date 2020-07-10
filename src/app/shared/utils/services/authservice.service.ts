import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from 'src/app/core/models/usuarios';
import { API_CONFIG } from 'src/app/core/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }

  authenticate(usuario: Usuarios){
    return this.http.post(`${API_CONFIG.baseurl}/login`, usuario, {
      observe: 'response',
      responseType: 'text'
    })
  }
}
