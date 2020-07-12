import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProprietariosRoutingModule } from './proprietarios-routing.module';
import { ProprietariosService } from './../../shared/utils/services/proprietarios.service'
import { ProprietariosComponent } from './pages/lista/proprietarios.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'src/app/core/core.module';
import { TableModule } from 'src/app/shared/components/table/table.module';


@NgModule({
  declarations: [ProprietariosComponent],
  imports: [
    CommonModule,
    ProprietariosRoutingModule,
    HttpClientModule,
    CoreModule,
    TableModule
  ],
  providers:[ProprietariosService]
})
export class ProprietariosModule { }
