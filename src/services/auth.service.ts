import { Injectable, /*ViewChild*/ } from '@angular/core';
//import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'; 
import firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/switchMap';
//import { /*NavController,*/ AlertController } from 'ionic-angular';
//import { HomePage } from '../pages/home/home';
//import { LoginPage } from '../pages/login/login';
//import { RegisterPage } from '../pages/register/register';

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
    
  constructor(private afAuth: AngularFireAuth,
              /*private alertCtrl: AlertController,*/
              /*public navCtrl: NavController,*/  
              /*private router: Router*/) 
  {
  
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

  getActiveUser() 
  {
    return firebase.auth().currentUser;
  }
}


