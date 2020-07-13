import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from 'src/app/shared/utils/services/account.service';
import { AuthserviceService } from 'src/app/shared/utils/services/authservice.service';
import { Usuarios } from '../../models/usuarios';
import { STORAGE_KEYS } from '../../config/storage_keys.config';
import { StorageService } from 'src/app/shared/utils/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuario: any;

  constructor(
    private auth: AuthserviceService,
    private storage: StorageService,
    
    ){
    }
  ngOnInit() {
    
    this.usuario = this.storage.getUser();
    
    
  }

  

  logout(){
    this.auth.logout();

  }
}
