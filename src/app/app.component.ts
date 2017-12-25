import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})          
export class MyApp {

  rootPage:string = "pagination";
   
  constructor(platform: Platform) 
  {

    platform.ready().then(() => 
    {
      Splashscreen.hide();
    });
  }


}


