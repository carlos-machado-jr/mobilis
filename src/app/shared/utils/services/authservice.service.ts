import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JwtHelperService } from "@auth0/angular-jwt";

import { Usuarios } from 'src/app/core/models/usuarios';
import { API_CONFIG } from 'src/app/core/config/api.config';
import { LocalUser } from 'src/app/core/models/local_user';
import { StorageService } from './storage.service';



@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  jwt = new JwtHelperService();
  constructor(
    private http: HttpClient,
    private storage: StorageService
    ) { }

  authenticate(usuario: Usuarios){
    return this.http.post(`${API_CONFIG.baseurl}/login`, usuario, {
      observe: 'response',
      responseType: 'text'
    })
  }

  succesfulLogin(authorizationValue: String){
    let tok = authorizationValue.substring(7);
    let nome = JSON.stringify(this.jwt.decodeToken(tok));
    
    
    
    
    let user: LocalUser = {
      nome_usuario: JSON.parse(nome).sub,
      token: tok
    }
    this.storage.setLocalUser(user);
  }

  logout(){
    this.storage.setLocalUser(null);
  }
 
}
