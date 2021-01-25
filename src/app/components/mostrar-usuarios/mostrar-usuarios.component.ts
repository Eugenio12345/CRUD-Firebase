import { Component, OnInit, NgZone } from '@angular/core';
import {LoginService} from '../../service/login-service.service';
import {Router} from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../modelo/Usuario';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-mostrar-usuarios',
  templateUrl: './mostrar-usuarios.component.html',
  styleUrls: ['./mostrar-usuarios.component.scss']
})
export class MostrarUsuariosComponent implements OnInit {
  
  formCustomerUpdate : FormGroup;

  usuarioEditar: Usuario;
  nombreUsuario: String;
  correoElectronico: String;
  annioNacimiento: String;
  password: String;
  idUsuario: number;

  closeResult = '';
  columnas = ["Id Usuario","Nombre de usuario  "," Correo Electronico","Año de nacimiento", "Operaciones"];
   public usuarios = [];
   
  constructor(private loginService : LoginService, 
              private router: Router, 
              private modalService: NgbModal, 
              private patterBuilder: FormBuilder,
              private afAuth: AngularFireAuth,
              private ngZone: NgZone
              ){
    this.formCustomerUpdate = this.patterBuilder.group({
      nombreUsuario: '',
      correoElectronico: '',
      annioNacimiento:'',
      password: '',
      idUsuario: ''
    })
  }
 

   ngOnInit() {
    this.afAuth.user.subscribe(user => {
      if (!user) {
          this.ngZone.run(()=>{
          this.router.navigate(['/login']);
          })
        }else{
          this.mostrarUsuarios();
        }
      });
   }

   mostrarUsuarios(){
    this.loginService.obtenerUsuarios().subscribe(
      resultado=>{
         this.usuarios=resultado;
      }, 
      error=>{
        console.log(error);
      }
    );
   }

   actualizarUsuario(usuario){
     usuario.idUsuario = this.idUsuario;
     usuario.nombreUsuario = usuario.nombreUsuario == '' ? this.nombreUsuario : usuario.nombreUsuario;
     usuario.correoElectronico = usuario.correoElectronico == ''? this.correoElectronico: usuario.correoElectronico;
     usuario.annioNacimiento = usuario.annioNacimiento == ''? this.annioNacimiento : usuario.annioNacimiento;
     usuario.password = usuario.password == ''? this.password : usuario.password;
     this.loginService.editarUsuario(usuario).subscribe(response=>{
       this.ngOnInit();
     });
   }

   eliminarDatos(idUser: number){
     console.log('El id del Elemto es:  '+idUser)
     this.loginService.eliminarDatos(idUser).subscribe(
       exito=>{
           this.router.navigate(['/mostrar-usuarios']);
       }, 
       error=>{
         console.log('Hubo un error')
       }
     );
   
   }
   
    
  openWindowCustomClass(content, id) {
    this.mostrarPorId(id);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  mostrarPorId(id){
    this.loginService.obtenerUsuarioPorId(id).subscribe(result=> 
      {
        this.usuarioEditar = result;
        this.idUsuario = this.usuarioEditar.idUsuario;
        this.nombreUsuario = this.usuarioEditar.nombreUsuario;
        this.correoElectronico =  this.usuarioEditar.correoElectronico;
        this.password = this.usuarioEditar.password;
        this.annioNacimiento = this.usuarioEditar.annioNacimiento;
      }, error=>{
         console.log('error inesperado ');  
      })
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  
 }
 
