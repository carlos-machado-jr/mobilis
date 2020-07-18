import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProprietariosComponent } from './pages/lista/proprietarios.component';
import { ProprietariosGuard } from 'src/app/core/guards/proprietarios.guard';

const routes: Routes = [{ path: '', component: ProprietariosComponent, resolve: {proprietarios: ProprietariosGuard} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProprietariosRoutingModule { }
