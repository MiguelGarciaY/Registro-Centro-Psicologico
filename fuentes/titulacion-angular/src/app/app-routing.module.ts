import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PanelAdministrativoComponent } from './panel-administrativo/panel-administrativo.component';
import { UsuarioComponent } from './panel-administrativo/usuario/usuario.component';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  //{ path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { 
    path: 'prueba', component: PruebaComponent, 
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent }
    ], canActivate: [AuthGuard] 
  },
  { 
    path: 'principal', component: PanelAdministrativoComponent, 
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user', component: UsuarioComponent }
    ], canActivate: [AuthGuard] 
  },
  { path: 'user', component: UsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
