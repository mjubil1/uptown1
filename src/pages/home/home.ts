import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage,NavParams, NavController } from 'ionic-angular';
import { ChartsModule, Color } from 'ng2-charts';
import{ RedeemPage } from '../redeem/redeem';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('pointChart') pointChart: ElementRef;
  @ViewChild('favMoveChart') favMoveChart: ElementRef;
  count = 100;
  max = 100;
  
  //Data for user's charts 
  data:number[] = [this.count, (this.max-this.count)];
  data3: number[] = [93,76,60,47,36];
  type:string = 'doughnut';
  type3:string = 'horizontalBar';

  colorsOverride: Array<Color> = [{
    backgroundColor: ["rgba(252,215,49, 0.82)", "transparent"],
  }];
  /*colorsOverride: Array<Color> = [{
    backgroundColor: ["radial-gradient(50% 100%, #FFFD87 23%, #FFFEBB 45%, #FFFE61 3%, #FFFE00 86%)", "transparent"],
  }];*/
  colorsOverride3: Array<Color> = [{
    backgroundColor: ["rgba(252,215,49, 0.82)", "rgba(252,215,49, 0.82)","rgba(252,215,49, 0.82)","rgba(252,215,49, 0.82)","rgba(252,215,49, 0.82)"],
  }];

  favMoveLabels = ['Rec Room','Green Turtle','CVP','B-Lounge','Torrent'];
//
  constructor(public navCtrl: NavController,public navParams: NavParams) {}
//
  datasets: any[] = [
  {
    data: this.data,
    backgroundColor: [
            
    ]
    
  }];

  doughnutChartOptions: any = {
    cutoutPercentage: 80,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 10,
        bottom: 0
      }
    }
  }

  favMoveChartOptions: any = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{ barThickness: 33 }]
    }
  }

  favMoveDatasets: any[] = [
  {
    data: this.data3
  }
  ]


  //
  onLoad(somewhere){
    this.navCtrl.push(RedeemPage); 
  }
  //
}