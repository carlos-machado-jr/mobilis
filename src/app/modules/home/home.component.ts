import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from 'src/app/shared/utils/services/storage.service';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/shared/utils/services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  $account: Observable<any>;
  columns: String[];
 
  usuario: String = '';

  constructor(
    private storage: StorageService,
    private account: AccountService
    ) { 
      
     }

  ngOnInit() {
    let nome = this.storage.getLocalUser();
    this.usuario = nome.nome_usuario;
    this.columns = ['id', 'nome_usuario', 'email', 'nip_responsavel', 'permissao'];
    this.$account = this.account.findByAll();
    
    
    
      
    
  }

 

  

}
