import { Component } from '@angular/core';
import { AuthserviceService } from './shared/utils/services/authservice.service';
import { AccountService } from './shared/utils/services/account.service';
import { StorageService } from './shared/utils/services/storage.service';
import { Usuarios } from './core/models/usuarios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mobilis';
  usuario: any;
  constructor(
    private auth: AuthserviceService,
    private storage: StorageService,
    private account: AccountService
    
    ){
    }
  ngOnInit() {
    
    
    
  }

  
}
