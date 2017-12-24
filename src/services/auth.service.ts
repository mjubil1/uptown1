import { Injectable, /*ViewChild*/ } from '@angular/core';
//import { Observable } from 'rxjs/Observable'; 
import { JwtHelperService } from '@auth0/angular-jwt';
import firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              public jwtHelper: JwtHelperService
              ) 
  {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    //Check whether the token is expired and return true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  signUp(fname: string, lname: string, email:string, password: string, gender: string) 
  {
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password)
    .then((authData) => {
      //Gets reference to Firebase's database and sets user data in database.
      let ref = firebase.database().ref('user').push();
      let uid = ref.key;
      let usrData = firebase.database().ref().push().child('user').set({
        uid: uid,
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        gender: gender
      });

    }).catch(function(error){

    });
    
  }

  signIn(email:string, password: string) 
  {
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }
  googleLogin() 
  {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }    

  facebookLogin() 
  {
    const provider = new firebase.auth.FacebookAuthProvider()
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) 
  {
    return this.afAuth.auth.signInWithPopup(provider)
  }

  logout() 
  {

  }

  /*getUserLoggedIn() 
  {
    return this.firebase.auth().currentUser;
  }*/
}


