import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './pages/lista_completa/usuarios.component';
import { TableModule } from 'src/app/shared/components/table/table.module';



@NgModule({
  declarations: [UsuariosComponent],
  imports: [
    CommonModule,
    TableModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }