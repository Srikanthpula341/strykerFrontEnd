import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highstock";

@Component({
  selector: 'app-usagetrendbar',
  templateUrl: './usagetrendbar.component.html',
  styleUrls: ['./usagetrendbar.component.scss']
})
export class UsagetrendbarComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
      scrollablePlotArea: {
        minWidth: 700,
        scrollPositionX: 1
      }
    },
    title: {
      text: "Usage Trend",
      align:"left"
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter:function(){
          return Highcharts.dateFormat('%d %b %Y', +this.value);
        }
      },
      tickInterval: 24*3600*1000
    },
    yAxis: {
      tickWidth: 1,
      title: {
        text: 'Usage in minutes'
      },
      lineWidth: 1,
      opposite:false
    },
  
    plotOptions: {
      // 
      series:{
        marker: {
          enabled: false
        },
        pointInterval: 3600000, // one hour
        pointStart: Date.UTC(2022, 1, 31)
      }
    },
    series: [{

      name: 'Hours',
      type:'column',
          data: [32,28,91,51,42,29,87,45,25,105,75,45,39,50,68,21,58,29,91,35,45,79,81,101,62,77,88,22,33,20,18],
          pointStart: Date.UTC(2020, 8, 1),
          pointInterval: 24 * 3600 * 1000 // one day
  
    }]

  
  
  };

  constructor() { }

  ngOnInit(): void {
  }

}
