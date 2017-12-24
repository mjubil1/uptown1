import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthService } from '../services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';
import { FormsModule } from '@angular/forms';
import * as firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { MyApp } from './app.component';
import { RegisterPage } from '../pages/register/register';
import { PaginationPage } from '../pages/pagination/pagination';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

  // Initialize Firebase
  const fb = {
    apiKey: "AIzaSyCpxfsS8L98D6MgQ74kQZlBP6tCICIO18o",
    authDomain: "uptown-9ed55.firebaseapp.com",
    databaseURL: "https://uptown-9ed55.firebaseio.com",
    projectId: "uptown-9ed55",
    storageBucket: "uptown-9ed55.appspot.com",
    messagingSenderId: "1033320275639"
  };

  firebase.initializeApp(fb);
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    PaginationPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fb),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    PaginationPage
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    AngularFirestoreModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook  
  ]
})
export class AppModule {
  
}
