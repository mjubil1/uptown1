import { Component, ViewChild } from '@angular/core';
import { Platform, /*NavController*/ } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { PaginationPage } from '../pages/pagination/pagination';

@Component({
  templateUrl: 'app.html'
})          
export class MyApp {

  rootPage:any = PaginationPage;
  homePage = HomePage;
  loginPage = LoginPage;
  isAuthenticated = false;
  //@ViewChild('nav') nav: NavController;
   
  constructor(platform: Platform) 
  {

    /*firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.isAuthenticated = true;
        this.nav.setRoot(this.homePage);
      } else {
        this.isAuthenticated = false;
        this.nav.setRoot(this.loginPage);
      }
    });*/

    platform.ready().then(() => 
    {
      Splashscreen.hide();
    });
  }


}


