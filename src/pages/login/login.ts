import { Component } from '@angular/core';
import { AlertController,NavController, NavParams, LoadingController } from 'ionic-angular';
import firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from "../../services/auth.service";
//import { Facebook } from '@ionic-native/facebook';
import 'rxjs/add/operator/switchMap';
import { HomePage } from '../home/home';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(private loadingCtrl: LoadingController,
              private afAuth: AngularFireAuth,
              private alertCtrl: AlertController,
              private authService: AuthService,
              private navParams: NavParams,
              private navCtrl: NavController,
              /*private fb: Facebook*/) {}
              
              onSignIn(form: NgForm) {
                const loading = this.loadingCtrl.create({
                  content:'Signing you in...'
                });
                loading.present();
                this.authService.signIn(form.value.email,form.value.pwd)
                .then(data => {
                  loading.dismiss();
                  this.navCtrl.push(HomePage).catch(err => {
                    let alert = this.alertCtrl.create ({
                      title: 'No Entry!',
                      message: 'You should not pass',
                      buttons: ['Ok']
                    })
                  })
                })
                .catch(error => {
                  loading.dismiss(); 
                  
              });
            }
            /*Login for facebook authentication */
            /*facebookLogin() {
              this.fb.login(['email']).then((loginResponse) => {
                let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
                firebase.auth().signInWithCredential(credential).then((info) => {
                  alert(JSON.stringify(info));
                })
              })
            }*/
              
            /*Login for google authentication*/ 
            googleLogin() {
              const provider = new firebase.auth.GoogleAuthProvider()
              this.navCtrl.push(HomePage);
              return this.oAuthLogin(provider);
            }
                            
            private oAuthLogin(provider) {
              return this.afAuth.auth.signInWithPopup(provider);
            }
          }            


