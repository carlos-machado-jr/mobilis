import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProprietariosComponent } from './pages/lista/proprietarios.component';

const routes: Routes = [{ path: '', component: ProprietariosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProprietariosRoutingModule { }
