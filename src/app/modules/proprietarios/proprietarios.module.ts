import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProprietariosRoutingModule } from './proprietarios-routing.module';
import { ProprietarioService } from './services/proprietario.service'
import { ProprietariosComponent } from './pages/lista/proprietarios.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'src/app/core/core.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { ProprietariosGuard } from '../../core/guards/proprietarios.guard';
import { ProprietariosFormComponent } from './pages/proprietarios-form/proprietarios-form.component'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ProprietariosComponent, ProprietariosFormComponent],
  imports: [
    CommonModule,
    ProprietariosRoutingModule,
    HttpClientModule,
    CoreModule,
    TableModule,

    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule

  ],
  providers:[ProprietarioService, ProprietariosGuard]
})
export class ProprietariosModule { }
