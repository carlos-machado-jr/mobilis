import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProprietariosRoutingModule } from './proprietarios-routing.module';
import { ProprietarioService } from './services/proprietario.service'
import { ProprietariosComponent } from './pages/lista/proprietarios.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'src/app/core/core.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { ProprietariosGuard } from '../../core/guards/proprietarios.guard'


@NgModule({
  declarations: [ProprietariosComponent],
  imports: [
    CommonModule,
    ProprietariosRoutingModule,
    HttpClientModule,
    CoreModule,
    TableModule
  ],
  providers:[ProprietarioService, ProprietariosGuard]
})
export class ProprietariosModule { }
