import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login-service.service';
import { Usuario } from '../modelo/Usuario';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.component.html',
  styleUrls: ['./crear-registro.component.scss']
})
export class CrearRegistroComponent implements OnInit {
  errorMessage  = ''; 
  registroForm : FormGroup;
  usuario: Usuario;
  constructor(private afAuth: AngularFireAuth, private patterBuilder: FormBuilder, private router: Router,private loginService:LoginService) { 
    this.registroForm = this.patterBuilder.group({
      nombreUsuario: '',
      correoElectronico: '',
      annioNacimiento:'',
      password: '',
    })
  }
  ngOnInit(): void {

  }
  crearCuenta(){
    this.usuario = this.registroForm.value;
    this.afAuth.createUserWithEmailAndPassword(this.usuario.correoElectronico, this.usuario.password).then(() => {
      this.loginService.guardarUsuario(this.usuario).subscribe(response=>{
        this.router.navigate(['/login']);
      })
    }).catch(response => {this.errorMessage = response.message;});
    }
  }


