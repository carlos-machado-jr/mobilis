import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './pages/lista_completa/usuarios.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { UsuariosService } from './services/usuarios.service';
import { FormModule } from './../../shared/components/form/form.module'
import { TableModule } from 'src/app/shared/components/table/table.module';




@NgModule({
  declarations: [UsuariosComponent, CadastroComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    TableModule,
    FormModule
  ],
  providers:[UsuariosService]
})
export class UsuariosModule { }
