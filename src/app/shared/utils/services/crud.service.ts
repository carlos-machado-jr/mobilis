import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/app/core/config/api.config';


export class CrudService<T> {


  
  
  constructor(
    protected http: HttpClient, 
    protected url: string) { }



  public findAll(): Observable<T[]>{
      return this.http.get<T[]>(API_CONFIG.baseurl + this.url);
  }    
  public findAllActivated(): Observable<T[]>{
      return this.http.get<T[]>(API_CONFIG.baseurl + this.url + '/ativados')
  }
  public findAllDisabled(): Observable<T[]>{
    return this.http.get<T[]>(API_CONFIG.baseurl + this.url + '/desativados')
  }
  
  public findById(id): Observable<T>{
    return this.http.get<T>(API_CONFIG.baseurl + this.url + `/${id}`)
  }
  
  public save(item: T): Observable<T>{
    
    return this.http.post<T>(API_CONFIG.baseurl + this.url, item)
  }

  
}
