import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/app/core/config/api.config';


export class CrudService<T> {


  
  
  constructor(
    protected http: HttpClient, 
    protected url: string) { }

  save(item: T): Observable<T>{
    
    return this.http.post<T>(API_CONFIG.baseurl + this.url, item)
  }
}
