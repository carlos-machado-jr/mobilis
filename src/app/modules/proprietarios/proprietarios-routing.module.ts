import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProprietariosComponent } from './pages/lista/proprietarios.component';
import { ProprietariosGuard } from 'src/app/core/guards/proprietarios.guard';
import { ProprietariosFormComponent } from './pages/proprietarios-form/proprietarios-form.component';

const routes: Routes = [
  { path: 'ativados', component: ProprietariosComponent},
  { path: 'desativados', component: ProprietariosComponent },
  { path: 'adicionar', component: ProprietariosFormComponent},
  { path: ':id', component: ProprietariosFormComponent,resolve: {proprietarios: ProprietariosGuard}},


  
  { path: '', component: ProprietariosComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProprietariosRoutingModule { }
