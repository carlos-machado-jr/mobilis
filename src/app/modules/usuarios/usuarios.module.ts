import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './pages/lista_completa/usuarios.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { UsuariosService } from './services/usuarios.service';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsuariosGuard } from 'src/app/core/guards/usuarios.guard';




@NgModule({
  declarations: [UsuariosComponent, CadastroComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    TableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers:[UsuariosService, UsuariosGuard]
})
export class UsuariosModule { }
