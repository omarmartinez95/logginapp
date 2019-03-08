import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLoggin:boolean;
  public nombreUsuario:string;
  public email:string;
  public infoUsuario:any;
  

  constructor(public authServices:AuthService, public router:Router) { }

  ngOnInit() {
    this.authServices.getAuth().subscribe(auth =>{
      if(auth){
        this.isLoggin = true;
      }else{
        this.isLoggin = false;
      }
    })
  }

  onClickLogout(){
    this.authServices.logout();
  }

  

  
}
