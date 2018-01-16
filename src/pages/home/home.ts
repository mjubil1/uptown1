import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage,NavParams } from 'ionic-angular';
import { ChartsModule, Color } from 'ng2-charts';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('pointChart') pointChart: ElementRef;
  @ViewChild('favMoveChart') favMoveChart: ElementRef;
  count = 50;
  max = 100;
  
  //Data for user's charts 
  data:number[] = [this.count, (this.max-this.count)];
  data3: number[] = [11,23,32,43,9];
  type:string = 'doughnut';
  type3:string = 'horizontalBar';

  colorsOverride: Array<Color> = [{
    backgroundColor: ["rgba(252,215,49, 0.82)", "transparent"],
  }];

  favMoveLabels = ['Rec Room','Green Turtle','CVP','B-Lounge','Torrent'];

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

  favMoveDatasets: any[] = [
  {
    data: this.data3 
  }
  ]

}