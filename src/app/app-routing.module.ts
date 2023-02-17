import { UsuariosComponent } from './sistema/usuarios/usuarios.component';
import { LoginComponent } from './sistema/login/login.component';
import { PecasComponent } from './sistema/pecas/pecas.component';
import { HomeComponent } from './site/home/home.component';
import { SistemaComponent } from './sistema/sistema.component';
import { SiteComponent } from './site/site.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { SiteRoutingModule } from './site/site-routing.module';
import { SistemaModule } from './sistema/sistema.module';
import { AuthGuard } from './auth.guard';
import { ClientesComponent } from './sistema/clientes/clientes.component';

const routes: Routes = [

  // { path: 'site', loadChildren: () => SiteModule },
  // { path: 'app', loadChildren: () => SistemaModule },
  // { path: '', redirectTo: '/site', pathMatch: 'full' },
  { path: '', component: SistemaComponent,
    children: [
      {path: '', component: PecasComponent},
      {path: 'cliente', component: ClientesComponent},
      {path: 'usuario', component: UsuariosComponent}
    ],
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
