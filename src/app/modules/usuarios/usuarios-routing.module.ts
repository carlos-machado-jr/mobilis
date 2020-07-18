import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosComponent } from './pages/lista_completa/usuarios.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { UsuariosGuard } from 'src/app/core/guards/usuarios.guard';

const routes: Routes = [
  { path: '', component: UsuariosComponent, resolve: {usuario: UsuariosGuard} },
  { path: 'adicionar', component: CadastroComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
