import { Component, OnInit } from '@angular/core';
import { LoginDataService } from '../login-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginDataService: LoginDataService) { }

  ngOnInit(): void {
  }

  validarUsuario(form:NgForm){
    const email = form.value.txtUsuario;
    const password = form.value.txtpassword;
    this.loginDataService.obtenerToken(email,password)
  }

  listar(){
    console.log("Listar")
    return this.loginDataService.listar();
    
  }

  borrarToken(){
    localStorage.removeItem('access_token');
  }
}
