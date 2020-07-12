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
 
  usuario: String = '';

  constructor(
    private storage: StorageService,
    ) { 
      
     }

  ngOnInit() {
    let nome = this.storage.getLocalUser();
    this.usuario = nome.nome_usuario; 
  }

 

  

}
