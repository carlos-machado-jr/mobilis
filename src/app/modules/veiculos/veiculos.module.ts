import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosComponent } from './pages/veiculos.component';
import { VeiculoService } from './services/veiculo.service';


@NgModule({
  declarations: [VeiculosComponent],
  imports: [
    CommonModule,
    VeiculosRoutingModule
  ],
  providers:[VeiculoService]
})
export class VeiculosModule { }
