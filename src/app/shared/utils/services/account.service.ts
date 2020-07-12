import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/app/core/config/api.config';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from './storage.service';
import { BehaviorSubject } from 'rxjs';
import { Usuarios } from 'src/app/core/models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  jwt = new JwtHelperService();
  isLoggedIn = new BehaviorSubject<boolean>(false);
  
  constructor(
    private http: HttpClient,
    private storage: StorageService
   
  ) { }
  

  findByAll(){
    return this.http.get(`${API_CONFIG.baseurl}/usuarios`);
  }

  findByPerfil(user: String){
    return this.http.get(`${API_CONFIG.baseurl}/usuarios/perfil?value=${user}`);
  }



  getUserLoggedIn(){
    const token = this.storage.getAuthorizationToken();
    if(token != null && !this.jwt.isTokenExpired(token)){
      return true
    }
    return false
  }
}
