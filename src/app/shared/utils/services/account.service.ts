import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/app/core/config/api.config';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from './storage.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public jwt = new JwtHelperService();
  public isLoggedIn = new BehaviorSubject<boolean>(false);
  public isLoading = new BehaviorSubject<boolean>(false);
  public isTeste = new BehaviorSubject<boolean>(false);

  
  constructor(
    private http: HttpClient,
    private storage: StorageService
   
  ) { }
  

  

  public findByPerfil(user: String){
    return this.http.get(`${API_CONFIG.baseurl}/usuarios/perfil?value=${user}`);
  }



  public getUserLoggedIn(){
    const token = this.storage.getAuthorizationToken();
    if(token != null && !this.jwt.isTokenExpired(token)){
      return true
    }
    return false
  }

  public showLoading() {
    this.isLoading.next(true);
}
  public hideLoading() {
    this.isLoading.next(false);
  }
}
