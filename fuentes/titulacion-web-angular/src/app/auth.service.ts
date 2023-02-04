import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  userId: any;
  constructor(private http: Http) { }

  login(usercreds: any){
    //var headers = new Headers();
    var headers = new HttpHeaders({ 'Content-Type' :'application/json'})
      var creds = 'name' + usercreds.username + '&password=' +usercreds.password;
      
      //headers.append('Content-Type', 'application/X-www-urlencoded');
      return new Promise((resolve) => {
      this.http.post('http://localhost:8080/authenticate', creds, {headers: headers}).subscribe((data) => {
        if(data.json().success) {
          //window.localStorage.setItem('auth_key', data.json().token);
          this.userId = data.json().userId;
          this.isAuthenticated = true;}
          resolve(this.isAuthenticated);
        }  
      )

      })
  }
}
