import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mostrar-usuarios',
  templateUrl: './mostrar-usuarios.component.html',
  styleUrls: ['./mostrar-usuarios.component.scss']
})
export class MostrarUsuariosComponent implements OnInit {

  constructor(private loginService : LoginService, private router: Router){

  }
 
   columnas = ["Id Usuario","Nombre de usuario  "," Correo Electronico","Año de nacimiento", "Operaciones"];
   public usuarios = [];
   
 
   ngOnInit() {
     this.loginService.obtenerUsuarios().subscribe(
       resultado=>{
          this.usuarios=resultado;
       }, 
       error=>{
         console.log(error);
       }
     );
   }
   eliminarDatos(idUser: number){
     console.log('El id del Elemto es:  '+idUser)
     this.loginService.eliminarDatos(idUser).subscribe(
       exito=>{
           
           this.router.navigate(['/mostrar-usuarios']);
       }, 
       datos=>{
         console.log('Hubo un error')
       }
     );
   
   }
   
 
 }
 
