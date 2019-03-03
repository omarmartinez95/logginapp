import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

import { Router } from '@angular/router'


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  public email:string;
  public password:string;

  constructor(public authServices:AuthService, public router:Router ) { }

  ngOnInit() {
  }

  onSubmitAddUser() {
    this.authServices.registerUser(this.email,this.password).then((response)=>{
      console.log('El ussuario creado es:', response)
      this.router.navigate(['/privado']);
    }).catch((err)=>{
      console.error(err);
    });
  }

}
