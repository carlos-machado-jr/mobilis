import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component'
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // material design
    MatFormFieldModule,
    MatInputModule, 
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
  providers:[ { provide: MatPaginatorIntl, useClass: TableComponent}]
})
export class TableModule { }
