import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public email:string;
  public password:string;

  constructor(public authServices:AuthService, public router: Router ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authServices.logginUser(this.email,this.password)
      .then((response)=>{
        alert('Activo el boton login');
        this.router.navigate(['/privado']);
      }).catch((err)=>{
        console.log('Ocurrio un error', err);
        this.router.navigate(['/login']);
      })
    
  }

}
