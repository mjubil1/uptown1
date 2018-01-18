import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController, LoadingController } from 'ionic-angular';

@Injectable()
export class AuthService {
  
  user = firebase.auth().currentUser;
  displayName: string;
  fname: string;
  ref = firebase.database().ref('user'); //references our User table database
  
  constructor(private afAuth: AngularFireAuth) 
  { 
    this.afAuth.authState.subscribe((user) => 
    { 
      if(user) {
        this.displayName = user.displayName;
        this.ref.once('value')
        .then(snapshot => {
          if(snapshot.child("fname").val() == null) {
            console.log("nothing there!")
          } 
          else {
            console.log("Something there");
          }
        });
      } 
      else {
        console.log('not logged in');
      }
    })
  }
  
  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }    

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return this.oAuthLogin(provider);
  }

  logout() {
    firebase.auth().signOut();
  }

  signIn(email:string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email,password)
    .catch(function(error) {
      //Handle errors
      if(error == 'auth/account-exists-with-different-credential') {
        const alert = this.alertCtrl.create({
          title: 'Signin failed!',
          message: 'Email already associated with another account.',
          buttons:['Ok']
        });
        alert.present();        
      }
      else if(error == 'auth/user-disabled') {
        const alert = this.alertCtrl.create({
          title: 'Signin failed!',
          message: 'User account is disabled.',
          buttons:['Ok']
        });
        alert.present();        
      }
      else if(error == 'auth/user-not-found') {
        const alert = this.alertCtrl.create({
          title: 'Signin failed!',
          message: 'User was not found.',
          buttons:['Ok']
        });
        alert.present();        
      }
      else if(error == 'auth/wrong-password') {
        const alert = this.alertCtrl.create({
          title: 'Signin failed!',
          message: 'Invalid password.',
          buttons:['Ok']
        });
        alert.present();        
      }
    })
  }
  signUp(fname: string, lname: string, email:string, password: string, gender: string) {
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
    }).catch(function(error) {
      //Handle errors
      if(error == 'auth/email-already-in-use') {
        const alert = this.alertCtrl.create({
          title: 'Signup failed!',
          message: 'Email already used',
          buttons:['Ok']
        });
        this.alert.present();
      }
      else if(error == 'auth/weak-password') {
        const alert = this.alertCtrl.create({
          title: 'Signup failed!',
          message: 'Use numbers, letters, and special characters!',
          buttons:['Ok']
        });
        this.alert.present();
      }
    });    
  }
  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
  }
}
