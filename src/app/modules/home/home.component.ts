import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from 'src/app/shared/utils/services/storage.service';
import { Observable, Subject } from 'rxjs';
import { AccountService } from 'src/app/shared/utils/services/account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  usuario: String = '';
  public isLoading: Subject<Boolean>;

  constructor(
    private storage: StorageService,
    private account: AccountService
    ) { 
      
     }

  ngOnInit() {
    this.isLoading = this.account.isLoading;
    
    let nome = this.storage.getLocalUser();
    this.usuario = nome.nome_usuario; 
  }

 

  

}
