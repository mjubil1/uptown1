import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from "../../services/auth.service";
import { LoginPage } from '../login/login';
import { LoadingController, AlertController } from "ionic-angular";
import { AbstractControl, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

function passwordConfirmation(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const pwd = c.parent.get('password');
  const cpwd= c.parent.get('confirmPassword')

  if(!pwd || !cpwd) return ;
  if (pwd.value !== cpwd.value) {
      return { invalid: true };

  }
}

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',    
}) 

export class RegisterPage implements OnInit {
  
  form: FormGroup;

  get cpwd() {
    return this.form.get('confirmPassword');
  }

  constructor(private alertCtrl: AlertController,
              private authService: AuthService,
              private fb: FormBuilder,
              private loadingCtrl: LoadingController,
              public navCtrl: NavController, 
              public navParams: NavParams) {}

  ngOnInit() {
    this.form = this.fb.group({
      firstname: ["", Validators.required], 
      lastname: ["", Validators.required], 
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]], 
      confirmPassword: ["", [Validators.required, Validators.minLength(6), passwordConfirmation]],
      gender:[""]
    });
  } 
  
  onSignUp(form) {
    const loading = this.loadingCtrl.create({
      content:'Signing you up...'
    });
    loading.present();
    this.authService.signUp(this.form.get('firstname').value,this.form.get('lastname').value,this.form.get('email').value,this.form.get('password').value,this.form.get('gender').value)
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