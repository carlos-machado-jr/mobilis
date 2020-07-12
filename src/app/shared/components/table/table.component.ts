import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  extends MatPaginatorIntl implements OnInit {
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  // é necessário passar as colunas como parametro!
  @Input() displayedColumns: String[];
  // é necessário passar os dados como observable da requisição!
  @Input() $data: Observable<any>;

  dataSource: MatTableDataSource<any>;

  constructor() { 
      super();
      
      this.translatePaginator();
      this.dataSource = new MatTableDataSource();
     }

  ngOnInit() {
   if(this.$data != null){
       this.getDataSource();
       this.columnsIsNull();
   }
  
   
  }

  getDataSource(){
    this.$data.subscribe((data: any[]) =>{
      this.dataSource.data = data
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

  private columnsIsNull(){
    if(this.displayedColumns == null){
      console.error("É necessario passar as colunas como parametro!");
     }
  }
  private translatePaginator(){
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
  }


}
