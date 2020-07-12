import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';
import { TableComponent } from '../../shared/components/table/table.component'

@NgModule({
  declarations: [HomeComponent, TableComponent],
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
  providers: [
    {provide: 
      MAT_LABEL_GLOBAL_OPTIONS, 
      useValue: {float: 'auto'}
      
    },
    { provide: MatPaginatorIntl, useClass: TableComponent}]
})
export class HomeModule { }
