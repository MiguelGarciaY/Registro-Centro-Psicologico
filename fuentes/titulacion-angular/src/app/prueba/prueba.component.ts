import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

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
