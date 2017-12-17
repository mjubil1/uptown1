import { Component, /*ViewChild*/ } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { LoginPage } from '../login/login';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


  //Variables
  fName = " ";
  lName = " ";
  email = " ";
  password = " ";
  gender = " ";
  
  constructor(private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) 
  {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  //ViewChild - To get access to a component and its methods, we can use @ViewChild decorator.
  //@ViewChild('email') email;
  //@ViewChild('password') password;
  
  registerUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.email, this.password)
    .catch(function(error) {      
      //Handles Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if(errorCode == 'auth/email-already-in-use') {
        alert('The email is already in use. ');
      } else {
        alert(errorMessage);
      }

      if(errorCode == 'auth/invalid-email') {
        alert('The email is not valid. ');
      } else {
        alert(errorMessage);
      }

      if(errorCode == 'auth/weak-password') {
        alert('The password is not strong enough. ');
      } else {
        alert(errorMessage);
      }
      console.log(error);

      this.navCtrl.push(LoginPage);        
     
    });
    }
}

