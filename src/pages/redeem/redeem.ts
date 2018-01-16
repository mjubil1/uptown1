import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ HomePage } from '../home/home';
/**
 * Generated class for the RedeemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-redeem',
  templateUrl: 'redeem.html',
})
export class RedeemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedeemPage');
  }
  onLoad(somewhere){
    this.navCtrl.push(HomePage); 
  }
  

}
