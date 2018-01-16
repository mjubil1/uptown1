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
  @ViewChild('topMoveChart') topMoveChart: ElementRef;
  count = 100;
  max = 100;
  
  //Data for user's charts 
  data:number[] = [this.count, (this.max-this.count)];
  data3: number[] = [93,76,60,47,36];
  type:string = 'doughnut';
  type3:string = 'horizontalBar';







//*************************Original for pointchart color*************************************************** */
  colorsOverride: Array<Color> = [{
   
    backgroundColor: ["rgba(252,215,49, 0.82)", "transparent"],
    borderColor:["rgba(252,215,49, 0.82)", "transparent"],
  }];
  //************************************************************************* */
  //************************What I tried************************************************* */

/*
   canvas: any = document.getElementById('pointChart');
   ctx = this.canvas.getContext("2d");
    
  gradients: any = this.ctx.createLinearGradient(0, 0, 0, 400);
   gradients = this.gradients.addColorStop(0, 'rgba(151,187,205,0.7)');   
   gradients = this.gradients.addColorStop(1, 'rgba(151,187,205,0)');
  
   colorsOverride: Array<Color> = [{

    backgroundColor : this.gradients,
    borderColor : "rgba(151,187,205,1)",
    
  }];
  */

//*************************************** */










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
    responsize: true,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{ 
        barThickness: 20,
        display: true,
        ticks: {
          fontColor: 'yellow',
          fontFamily: 'HelveticaNeue-Medium',
          fontSize: '10',
          barPercentage: 0.8
        },
        gridLines: {
          display: false
        }
      }],
      xAxes: [{
        ticks: {
          max:100,
          min:0,
          stepSize: 20,
          fontColor: 'white',
          fontFamily: 'HelveticaNeue-Medium',
          fontSize: '10',
          minRotation: '20',
          barPercentage: 0.8
        },
        gridLines: {
          borderDash: [1,2],
          color: 'rgba(192,192,192,1)'
        }
      }]
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
  ionViewDidEnter() {
    this.favMoveChart = this.favMoveChart.nativeElement.getContext("2d");
  }
  
  topMoveDatasets: any[] = [
  {
    data: [23,21,43,76,43],
    label: "Women"
  },
  {
    data: [20,12,12,23,43],
    label: "Men"   
   }
  ]
}