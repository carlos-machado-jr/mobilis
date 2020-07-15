import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoaderGuard } from './core/guards/loader.guard';


const routes: Routes = [
 
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) ,
      canActivate:[AuthGuard], resolve: {usuario: LoaderGuard} },
  { path: 'proprietarios', 
      loadChildren: () => import('./modules/proprietarios/proprietarios.module').then(m => m.ProprietariosModule) ,
      canActivate:[AuthGuard]},
  
  { path: 'usuarios', loadChildren: () => import('./modules/usuarios/usuarios.module').then(m => m.UsuariosModule)  ,
      canActivate:[AuthGuard]},
  
  { path: '', pathMatch: 'full', redirectTo: 'home'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
