import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.component.html',
  styleUrls: ['./crear-registro.component.scss']
})
export class CrearRegistroComponent implements OnInit {

  registroForm : FormGroup;

  constructor(private patterBuilder: FormBuilder, private router: Router,private loginService:LoginService) { 
    this.registroForm = this.patterBuilder.group({
      nombreUsuario: '',
      correoElectronico: '',
      annioNacimiento:'',
      password: '',
    })
    
  }
  ngOnInit(): void {
  }
    guardarUsuario(usuario){
    this.loginService.guardarUsuario(usuario).subscribe(exito=>{
      this.router.navigateByUrl('/mostrar-usuarios')
    }
    ,
    error=>{
      alert('Error en el llenado')
    }
    
    )
    }
  }

  

