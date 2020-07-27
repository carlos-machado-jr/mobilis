import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public splashLoading = new BehaviorSubject<boolean>(false);
  constructor() { }
  
  public showSplash(){
    this.splashLoading.next(true);
  }
 
  public closeSplash(){
    this.splashLoading.next(false);
  }
}
