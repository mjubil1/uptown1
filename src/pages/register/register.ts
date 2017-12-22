import { Component, /*ViewChild*/ } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AngularFireAuth } from 'angularfire2/auth';

//import { LoginPage } from '../login/login';


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
  fName: string;
  lName: string;
  email: string;
  password: string;

  data = {};
  genders = ['Male', 'Female'];

  constructor(/*private fire: AngularFireAuth,*/
              public navCtrl: NavController, 
              public navParams: NavParams,
              ) 
  {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  //ViewChild - To get access to a component and its methods, we can use @ViewChild decorator.
  //@ViewChild('email') email;
  //@ViewChild('password') password;
  

  registerUser() {
    this.fName;
    this.lName;
    this.email;
    this.password;

    console.log(this.data);
    //this.fire.auth.createUserWithEmailAndPassword();

    }
}

