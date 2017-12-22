import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
//import { AngularFireAuth } from 'angularfire2/auth';
//import { LoginPage } from '../login/login';
//import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  onSubmit(form: any): void {
    console.log('DATA',form.value);
  }
}

