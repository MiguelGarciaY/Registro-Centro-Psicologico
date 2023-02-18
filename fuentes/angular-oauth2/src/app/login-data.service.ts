import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { TokenInterface } from './models/token';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor(private router: Router ,private httpClient: HttpClient) { }
  
  obtenerToken(user:any, password:any){       
    const clientIdAndSecret = btoa('clienteId:clienteContrasenia');
    let usuario = user
    let contraseña = password
    /*const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${clientIdAndSecret}`
    });*/
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8')
    .set('Authorization', `Basic ${clientIdAndSecret}`)

    const body = new HttpParams()
    .set('grant_type', 'password')
    .set('username', usuario)
    .set('password', contraseña);

    return this.httpClient.post<TokenInterface>('/api/token',body,{headers}).subscribe
    (
      (responses) => {
        const token = responses['access_token'];
        console.log("Se han guardado los registros :");
        localStorage.setItem('access_token', token);
        this.router.navigate(['/'])
      } ,
      error=>console.log("Error :"+ error)     
    );
  }

  listar(){
    const token = localStorage.getItem('access_token');
    const body = new HttpParams()
    const headers = new HttpHeaders()    
    .set('Authorization', `Bearer ${token}`)
    //.set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8')

    return this.httpClient.get('api/usuario/listar',{headers}).subscribe(

    );
  }
}
