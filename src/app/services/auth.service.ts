import { Injectable } from '@angular/core';
// importar las dependencias de firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {map} from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  infoLogout;

  constructor(public afAuth: AngularFireAuth) { }

  /**
   * Se crea el metodo logout() propio de firebase
   */
  logout() {
    this.infoLogout = this.afAuth.auth.signOut();
  }

  // Creacion de usuario registeUser();
    registerUser(email: string, pass: string) {
      return new Promise((resolve, reject) => {
        this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
          .then(userData => resolve(userData),
            err => reject(err));
    });
  }

  // Metodo del loggin
  logginUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
  });
}

  // Metodo devuelve los datos del usuario logueado
  getAuth(){
    return this.afAuth.authState.pipe(map(data=>data))
  }

}
