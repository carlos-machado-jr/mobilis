import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/utils/services/account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  $account: Observable<any>;
  columns: String[];
 
  usuario: String = '';

  constructor(
    private account: AccountService
    ) { 
      
     }

  ngOnInit() {
    this.columns = ['id', 'nome_usuario', 'email', 'nip_responsavel', 'permissao'];
    this.$account = this.account.findByAll();
  }
}
