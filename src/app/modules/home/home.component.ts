import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from 'src/app/shared/utils/services/storage.service';
import { AccountService } from 'src/app/shared/utils/services/account.service';
import { Usuarios } from 'src/app/core/models/usuarios';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { LoginComponent } from '../login/pages/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends MatPaginatorIntl implements OnInit {
  displayedColumns: string[] = ['id', 'nome_usuario', 'email', 'nip_responsavel', 'permissao'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  usuario: String = '';

  constructor(
    private storage: StorageService,
    private account: AccountService
    ) { 
      super();
      
       // paginator tradução
    this.itemsPerPageLabel = 'Itens por pagina';
    this.getRangeLabel = function (page, pageSize, length) {
      if (length === 0 || pageSize === 0) {
        return '0 de ' + length;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
      return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
    };
      this.dataSource = new MatTableDataSource();
     }

  ngOnInit() {
    
    let nome = this.storage.getLocalUser();
    this.usuario = nome.nome_usuario;
    this.getUsers();
    
    
    
      
    
  }

  getUsers(){
    this.account.findByAll().subscribe((user: Usuarios[]) =>{
      this.dataSource.data = user
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
