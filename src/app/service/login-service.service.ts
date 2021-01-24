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
  urlObtenerUsuarioId = '/api/usuarios/obtener/registro/';
  urlEditarUsuario = '/api/usuarios/actualizar/registro';
  
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

  obtenerUsuarioPorId(idUsuario): Observable<Usuario>{
    return this.http.get<Usuario>(this.urlGlobal+this.urlObtenerUsuarioId+idUsuario,this.httpOptions);
  }

  editarUsuario(usuario){
    return this.http.put(this.urlGlobal+this.urlEditarUsuario, usuario, this.httpOptions);
  }

  
}
