import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './pages/lista_completa/usuarios.component';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { UsuariosService } from './services/usuarios.service';
import { ReactiveFormsModule } from '@angular/forms';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [UsuariosComponent, CadastroComponent],
  imports: [
    CommonModule,
    TableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    UsuariosRoutingModule
  ],
  providers:[UsuariosService]
})
export class UsuariosModule { }
