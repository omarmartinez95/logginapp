import { Routes } from '@angular/router';

import{ LoginPageComponent } from './components/login-page/login-page.component';
import{ HomePageComponent } from './components/home-page/home-page.component';
import{ RegisterPageComponent } from './components/register-page/register-page.component';
import{ PrivadoPageComponent } from './components/privado-page/privado-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';


export const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'registrarse',component:RegisterPageComponent},
  {path:'privado',component:PrivadoPageComponent},
  {path:'**',component:NotFoundPageComponent}
];
