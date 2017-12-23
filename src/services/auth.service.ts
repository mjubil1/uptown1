import { Injectable } from '@angular/core';
//import { Router } from '@angular/router';

import firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

interface User {
  uid: string;
  fname: string;
  lname: string;
  password: string;
  gender: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}

@Injectable()
export class AuthService {
  
  user: Observable<User>;

  //Variables
  private data: any;
  public fireAuth: any;
  public userProfile: any;

  constructor(private afAuth: AngularFireAuth,
              /*private router: Router*/) 
  {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database
  }


  signUp(email:string, password: string) 
  {
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password);

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
}
