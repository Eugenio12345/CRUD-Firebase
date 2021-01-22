import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import {Usuario} from '../components/modelo/Usuario';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  urlGlobal = 'http://192.168.0.104:8091';
  urlGuardarUsuario = '/api/usuarios/crear/registro';
  urlConsultarUsuario = '/api/usuarios/obtener/registros';
  urlEliminar = '/api/usuarios/eliminar/registro/';
  urlValidarUsuario = '/api/usuarios/valida/existencia';
  
  
  constructor(protected http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': 'application/json'
    })
  }
  

 guardarUsuario(usuario){
  return this.http.post(this.urlGlobal+this.urlGuardarUsuario,usuario,this.httpOptions);
 }

 obtenerUsuarios(): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.urlGlobal+this.urlConsultarUsuario);
}

  eliminarDatos(idUser: number){
  return this.http.delete(this.urlGlobal+this.urlEliminar+idUser, this.httpOptions);
}

}
