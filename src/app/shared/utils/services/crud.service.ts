import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/app/core/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class CrudService<data> {

  
  
  constructor(private http: HttpClient) { }

  save(item: data): Observable<data>{
    
    return this.http.post<data>(`${API_CONFIG.baseurl}/usuarios`, item)
  }
}
