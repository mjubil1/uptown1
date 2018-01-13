import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated'
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  user = firebase.auth().currentUser;
  displayName: string;
  
  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase) 
  { 
    this.afAuth.authState.subscribe((user) => 
    {
      if(user) {
        console.log("User is signed as ", user);
        this.displayName = user.displayName;
      } else {
        console.log("User is not signed in");
        this.displayName = " ";
      }
    })
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

  logout() 
  {
    firebase.auth().signOut();
  }

  signIn(email:string, password: string) 
  {
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }

  signUp(fname: string, lname: string, email:string, password: string, gender: string) 
  {
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password)
    .then((authData) => {

      let user = firebase.auth().currentUser;
      let uid = user.uid;

      //Gets reference to Firebase's database and sets user data in database.
      let ref = firebase.database().ref('user').push();
      let usrData = firebase.database().ref().push().child('user').set({
        uid: uid,
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        gender: gender
      });

    }).then(function() {
      let user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: fname + " " +  lname,
        photoURL: ''
      })
    }).catch(function(error){

    });    
  }

  private oAuthLogin(provider) 
  {
    return this.afAuth.auth.signInWithPopup(provider)
  }
}


