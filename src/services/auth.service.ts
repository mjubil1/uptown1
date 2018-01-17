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
  fname: string;
  ref = firebase.database().ref('user');

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase) 
  { 
    this.afAuth.authState.subscribe((user) => 
    { 
      if(user) {
        this.displayName = user.displayName;
         this.ref.once('value')
            .then(snapshot => {
              this.fname = snapshot.child("user/fname").val();
              console.log("Hello",this.fname); 
            });
      } else {
        console.log('not logged in');
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

      let uid = this.user.uid;

      let usrData = firebase.database().ref().push().child('user').set({
        uid: uid,
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        gender: gender
      });
    }).then(function() {

        this.user.updateProfile({
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
