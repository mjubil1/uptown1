import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from "../../core/auth.service";
//import { LoginPage } from '../login/login';
import { LoadingController, AlertController } from "ionic-angular";
import { NgForm } from '@angular/forms';
//import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage implements OnInit {

  constructor(private alertCtrl: AlertController,
              private authService: AuthService,
              private loadingCtrl: LoadingController,
              public navCtrl: NavController, 
              public navParams: NavParams) {}
  
  //ViewChild - To get access to a component and its methods, we can use @ViewChild decorator
  @ViewChild('fname') fname;
  @ViewChild('lname') lname;
  @ViewChild('conpwd') conPass;
  @ViewChild('gender') gender;
  
  ngOnInit() {
  
  }
  
  onSignup(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content:'Signing you up...'
    });
    loading.present();
    this.authService.signUp(form.value.usrEmail,form.value.pwd)
      .then(
        data => {
          loading.dismiss();
        })
      .catch(
        error => {
          loading.dismiss();
          const alert = this.alertCtrl.create({
            title:'Singup failed',
            message: error.message,
            buttons:['Ok']
          })
          alert.present();
        }) ;
    }
}

