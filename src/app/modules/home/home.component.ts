import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/utils/services/storage.service';
import { AccountService } from 'src/app/shared/utils/services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario: String = '';
  constructor(
    private storage: StorageService,
    private account: AccountService
    ) { }

  ngOnInit() {
    let nome = this.storage.getLocalUser();
    this.usuario = nome.nome_usuario;
    
    this.account.findByAll().subscribe(x => console.log(x));
    
    
  }

}
