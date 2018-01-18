import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

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
              } else {
                  console.log("Something there"); 
              }
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
