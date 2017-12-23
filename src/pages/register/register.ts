import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from "../../core/auth.service";
//import { LoginPage } from '../login/login';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage implements OnInit {
   
  //Variables
  //fName: string;
  //lName: string;
  //email: string;
  //password: string;
  //conPass: string;
  //gender: string;

  user = {};

  constructor(private authService: AuthService,
              public navCtrl: NavController, 
              public navParams: NavParams) {}
  
  //ViewChild - To get access to a component and its methods, we can use @ViewChild decorator
  @ViewChild('fname') fname;
  @ViewChild('lname') lname;
  @ViewChild('myEmail') email;
  @ViewChild('pwd') password;
  @ViewChild('conpwd') conPass;
  @ViewChild('gender') gender;
  
  ngOnInit() {
  
  }
  
  onSubmit(form: NgForm) {
    
  }

  onSignup(form: NgForm) {
    this.authService.signUp(form.value.usrEmail,form.value.pwd)
    .then(
      data => console.log(data)
    )
    .catch(error => console.log(error));
  }
}

