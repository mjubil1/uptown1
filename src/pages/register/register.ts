import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from "../../services/auth.service";
import { LoginPage } from '../login/login';
import { LoadingController, AlertController } from "ionic-angular";
import { NgForm } from '@angular/forms';


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
  
  ngOnInit() {
  
  }
  
  onSignUp(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content:'Signing you up...'
    });
    loading.present();
    this.authService.signUp(form.value.fName,form.value.lName,form.value.usrEmail,form.value.pwd,form.value.gender)
      .then(
        data => {
          loading.dismiss();
          this.navCtrl.push(LoginPage);  
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
        });
    }
}

