import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
 
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) ,
    canActivate:[AuthGuard] },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'proprietarios', 
      loadChildren: () => import('./modules/proprietarios/proprietarios.module').then(m => m.ProprietariosModule) ,
      canActivate:[AuthGuard]},
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
