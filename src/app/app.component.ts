import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { PaginationPage } from '../pages/pagination/pagination';

@Component({
  templateUrl: 'app.html'
})          
export class MyApp {

  rootPage:any = PaginationPage;  

  constructor(platform: Platform) 
  {
    platform.ready().then(() => 
    {
      Splashscreen.hide();
    });
  }


}


