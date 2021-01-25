import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth,  private router: Router) { }

  ngOnInit(): void {
     
  }

 
  deleteSession(){
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    }).catch();
  }
}
