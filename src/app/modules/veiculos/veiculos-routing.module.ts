import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeiculosComponent } from './pages/veiculos.component';

const routes: Routes = [{ path: '', component: VeiculosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
