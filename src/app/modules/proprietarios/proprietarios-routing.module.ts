import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProprietariosComponent } from './pages/lista/proprietarios.component';
import { ProprietariosGuard } from 'src/app/core/guards/proprietarios.guard';
import { ProprietariosFormComponent } from './pages/proprietarios-form/proprietarios-form.component';

const routes: Routes = [
  { path: 'ativados', component: ProprietariosComponent, resolve: {proprietarios: ProprietariosGuard} },
  { path: 'desativados', component: ProprietariosComponent, resolve: {proprietarios: ProprietariosGuard} },
  { path: 'adicionar', component: ProprietariosFormComponent },


  
  { path: '', component: ProprietariosComponent, resolve: {proprietarios: ProprietariosGuard} }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProprietariosRoutingModule { }
