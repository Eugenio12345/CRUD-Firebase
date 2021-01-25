import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { MostrarUsuariosComponent } from './components/mostrar-usuarios/mostrar-usuarios.component';
import { CrearRegistroComponent } from './components/crear-registro/crear-registro.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { HeaderLoginComponent } from './components/header-login/header-login.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBiqcR5Qlxm18dyv0IYI2yCronLCIGXLsw",
  authDomain: "usuario-crud.firebaseapp.com",
  databaseURL: "https://usuario-crud-default-rtdb.firebaseio.com",
  projectId: "usuario-crud",
  storageBucket: "usuario-crud.appspot.com",
  messagingSenderId: "913143366553",
  appId: "1:913143366553:web:4d1896d81f7c34354a8908"
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    MostrarUsuariosComponent,
    CrearRegistroComponent,
    HeaderTopComponent,
    HeaderLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
