import { Component, DoCheck } from '@angular/core';
import { AuthserviceService } from 'src/app/shared/utils/services/authservice.service';
import { Usuarios } from '../../models/usuarios';
import { StorageService } from 'src/app/shared/utils/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements  DoCheck {
  usuario: Usuarios;

  constructor(
    private auth: AuthserviceService,
    private storage: StorageService
    ){}
   

  ngDoCheck(){
    this.usuario = this.storage.getUser();
    
  }

  logout(){
    this.auth.logout();

  }
}
