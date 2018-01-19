import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { Camera, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { PaginationPage } from '../pages/pagination/pagination';
import { RedeemPage } from '../pages/redeem/redeem';
import { SettingPage } from '../pages/setting/setting';
import { AuthService } from '../services/auth.service';
import { RegisterPage } from '../pages/register/register';


@Component({
  templateUrl: 'app.html',
})          

export class MyApp implements OnInit {

  rootPage:any = HomePage;  
  homePage = HomePage;
  redeemPage = RedeemPage;
  registerPage = RegisterPage;
  settingPage = SettingPage;

  @ViewChild('nav') nav: NavController;

  picdata: any;
  picurl:any;
  mypicref: any;

  constructor(platform: Platform, private menuCtrl: MenuController,
              private authService: AuthService) 
  {
    platform.ready().then(() => 
    {
      Splashscreen.hide();
    });

    this.mypicref = firebase.storage().ref('/');
  }

  ngOnInit() {

  }

  onLoad(page:any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout()
  {
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(LoginPage);
  }

  takePic() {
    console.log('button clicked!');

    Camera.getPicture({
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: Camera.EncodingType.PNG,
      saveToPhotoAlbum: true
    }).then(imagedata => {
      this.picdata = imagedata;
      this.upload()
    })
  }

  upload() {
    this.mypicref.child(this.uid()).child('pic.png')
    .putString(this.picdata, 'base64', {contentType: 'image/png'})
    .then(savepic => {
      this.picurl = savepic.downloadURL
    })
  }

  uid() { var d = new Date().getTime(); var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) { var r = (d + Math.random() * 16) % 16 | 0; d = Math.floor(d / 16); return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16); }); return uuid; }
}