import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from 'src/app/shared/utils/services/account.service';
import { AuthserviceService } from 'src/app/shared/utils/services/authservice.service';
import { Usuarios } from '../../models/usuarios';
import { STORAGE_KEYS } from '../../config/storage_keys.config';
import { StorageService } from 'src/app/shared/utils/services/storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  permissao: String;
  usuario: Usuarios;

  constructor(
    private auth: AuthserviceService,
    private storage: StorageService,
    private route: ActivatedRoute
    
    ){
    }
  ngOnInit() {
    this.usuario = this.route.snapshot.data['usuario']
    this.permissao = this.usuario.permissao
    console.log(this.permissao);
    
    // this.route.data.subscribe( usuario => {
      
    //   this.permissao = usuario.permissao;
    // })

    
    
  }

  

  logout(){
    this.auth.logout();

  }
}
