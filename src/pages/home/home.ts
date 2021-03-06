import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage,NavParams, NavController } from 'ionic-angular';
import { Color } from 'ng2-charts';
import{ RedeemPage } from '../redeem/redeem';
import { Geolocation } from '@ionic-native/geolocation';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  @ViewChild('pointChart') pointChart: ElementRef;
  @ViewChild('favMoveChart') favMoveChart: ElementRef;
  @ViewChild('topMoveChart') topMoveChart: ElementRef;
  lat: any;
  long: any;
  count = 50;
  max = 100;
  
  //Data for user's charts 
  data:number[] = [this.count, (this.max-this.count)];
  data3: number[] = [93,76,60,47,36];
  type:string = 'doughnut';
  type3:string = 'horizontalBar';

  colorsOverride: Array<Color> = [{
   
    backgroundColor: ["rgba(252,215,49, 0.82)"],
    borderColor:["rgba(252,215,49, 0.82)", "transparent"],
  }];

  colorsOverride3: Array<Color> = [{
    backgroundColor: ["rgba(252,215,49, 0.82)", "rgba(252,215,49, 0.82)","rgba(252,215,49, 0.82)","rgba(252,215,49, 0.82)","rgba(252,215,49, 0.82)"],
  }];

  favMoveLabels = ['Rec Room','Green Turtle','CVP','B-Lounge','Torrent'];
  topMoveLabels = ['Rec Room','Green Turtle','CVP','B-Lounge','Torrent'];

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private geolocation: Geolocation,
              private authService: AuthService) {}
              
              ionViewDidEnter() {
                this.pointChart  = this.pointChart.nativeElement.getContext("2d");
                this.topMoveChart = this.topMoveChart.nativeElement.getContext("2d");
                this.favMoveChart = this.favMoveChart.nativeElement.getContext("2d");
              }
              
              ionViewDidLoad() {
                this.geolocation.getCurrentPosition().then( pos =>{
                this.lat = pos.coords.latitude;
                this.long = pos.coords.longitude;
              }).catch(err => console.log(err)); 
            }
            datasets: any[] = [{
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
          
          favMoveDatasets: any[] = [{
            data: this.data3  
          }]
          onLoad(somewhere){
            this.navCtrl.push(RedeemPage); 
          }
          topMoveChartOptions: any =  {
            responsize: true,
            legend: {
              display: true,
              fontColor: 'white',
              position: 'top',
              labels: {
                fontColor: 'white',
                fontFamily: "HelveticaNeue-Medium",
                boxWidth: 15
              }
            },
            scales: {
              yAxes: [{ 
                barThickness: 20,
                display: true,
                ticks: {
                  fontColor: 'yellow',
                  fontFamily: 'HelveticaNeue-Medium',
                  fontSize: '10'
                },
                gridLines: {
                  display: false
                }
              }],
              xAxes: [{
                ticks: {
                  display: false
                },
                gridLines: {
                  display: false
                }
              }]
            }
          }
          
          topMoveDatasets: any[] = [{
            data: [23,21,43,76,43],
            label: "Women"
          },
          {
            data: [20,12,12,23,43],
            label: "Men"   
          }]
        }