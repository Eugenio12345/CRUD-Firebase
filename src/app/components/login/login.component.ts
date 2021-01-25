import { Component, OnInit,NgZone } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage = '';

  loginForm : FormGroup;

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private fb: FormBuilder,
    private ngZone: NgZone) {
    this.loginForm = this.fb.group({
        email: '',
        password: ''
      })
   }

   ngOnInit() {
   this.afAuth.user.subscribe(user => {
    if (user) {
      this.ngZone.run(()=>{
        this.router.navigate(['/mostrar-usuarios']);
        })
      }
    });
  }

  crearCuenta() {
    this.router.navigate(['/crear-registro']);
    
  }
 
  ingresar() { 
    this.afAuth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).then(() => {
      this.router.navigate(['/mostrar-usuarios']);
    }).catch(response => {
      this.errorMessage = 'Error de autenticacion';
    });
  }
}
