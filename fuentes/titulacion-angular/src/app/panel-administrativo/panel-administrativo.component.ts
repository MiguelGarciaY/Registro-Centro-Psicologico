import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-administrativo',
  templateUrl: './panel-administrativo.component.html',
  styleUrls: ['./panel-administrativo.component.scss']
})
export class PanelAdministrativoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'admin-panel-layout';
  sideBarOpen = true;  
  token = localStorage.getItem("access_token");

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
