import { AppRoutingModule } from './app-routing.module';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';

export const appRoutes: Routes = [
{path: '', component: LoginComponent},
{path: 'login', component: LoginComponent},
{path: 'dashboard', component: DashboardComponent},
]

export const AppRouter = RouterModule.forRoot(appRoutes);
