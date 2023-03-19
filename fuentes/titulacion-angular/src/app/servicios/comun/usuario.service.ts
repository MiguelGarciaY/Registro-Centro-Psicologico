import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/modelos/usuario.model';

const token:any = localStorage.getItem('access_token');
const body:any = new HttpParams()
const headers:any = new HttpHeaders()    
  .set('Authorization', `Bearer ${token}`)

@Injectable({
  providedIn: 'root'
})



export class UsuarioService {
  private urlListarUsuarios = 'api/usuario/listar';


  
  header:any;
  constructor(private http: HttpClient) { 
    
  }

  listarUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlListarUsuarios, {headers});
  }
}
