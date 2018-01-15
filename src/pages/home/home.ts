import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage,NavParams } from 'ionic-angular';
import { ChartsModule, Color } from 'ng2-charts';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('pointChart') pointChart: ElementRef;
  count = 50;
  max = 100;
  
  // Doughnut
  data:number[] = [this.count, (this.max-this.count)];
  type:string = 'doughnut';

  colorsOverride: Array<Color> = [{
    backgroundColor: ["rgba(252,215,49, 0.82)", "transparent"],
  }];

  constructor(public navParams: NavParams) {}

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

  ionViewDidEnter() {
    let ctx = this.pointChart.nativeElement.getContext("2d");
  } 
}