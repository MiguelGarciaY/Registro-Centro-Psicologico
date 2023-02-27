import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DataSharingService } from './servicios/sharing/data-sharing.service';
import { LoginDataService } from './servicios/login-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin-panel-layout';
  sideBarOpen = true;    
  
  isLogged? : boolean


  constructor(private loginDataService: LoginDataService) {
    loginDataService.isLoggedIn.subscribe((isLogged: boolean) => {
      this.isLogged = isLogged;
    });
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
