import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponentComponent},
  {path:'login',component:LoginComponent},
  {path:'**', component:ErrorComponent}
 ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
