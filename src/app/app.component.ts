import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { PaginationPage } from '../pages/pagination/pagination';
import { RedeemPage } from '../pages/redeem/redeem';
import { SettingPage } from '../pages/setting/setting';

@Component({
  templateUrl: 'app.html'
})          
export class MyApp {

  rootPage:any = HomePage;  
  homePage = HomePage;
  redeemPage = RedeemPage;
  settingPage = SettingPage;

  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, private menuCtrl: MenuController) 
  {
    platform.ready().then(() => 
    {
      Splashscreen.hide();
    });
  }

  onLoad(page:any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }


}


