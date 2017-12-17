import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { Splashscreen } from 'ionic-native';
//import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
//import { RegisterPage } from '../pages/register/register';

@Component({
  templateUrl: 'app.html'
})   
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform) 
  {
    platform.ready().then(() => 
    {
      Splashscreen.hide();
    });
  }
}


