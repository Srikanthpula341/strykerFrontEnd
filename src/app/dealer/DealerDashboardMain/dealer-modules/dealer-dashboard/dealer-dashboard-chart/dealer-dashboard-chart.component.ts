import { CdkPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import Highcharts from 'highcharts';



@Component({
  selector: 'app-dealer-dashboard-chart',
  templateUrl: './dealer-dashboard-chart.component.html',
  styleUrls: ['./dealer-dashboard-chart.component.scss']
})
export class DealerDashboardChartComponent implements OnInit {
  ChartColors= ['#5368F0', '#9D57D5', '#FEAB00', '#FF3131','#3ADF00','#086A87','##B40431','#F7FE2E']
 Data1=[
    {
      name:"Precision Falcon",
      value:50,
    },
    {
      name:"System 8 EZout",
      value:9,
    },
    {
      name:"System 8",
      value:16,
    },{
      name:"Aria Drill system",
      value:25,
    }
  ]
  Data=[50,9,16,25]
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      plotBackgroundColor: 'white',
      plotShadow: false,
    },

    lang: {
      downloadJPEG: "true"
    },
    exporting: {
      enabled: true,
      sourceHeight: 25
    },
    title: {
      text: '',
    },

    credits: {
      enabled: false
    },

    legend: {
      align: "left",
      enabled: false,
      useHTML: true,

    },
    colors: this.ChartColors,

    tooltip: {
      enabled: true
      // headerFormat: '<span style="font-weight: 00;font-size: 14px;">{point.key}</span><table>',
      // pointFormat: '<tr><td style="color:{series.color};padding:0 font-weight: 900;font: normal normal normal 12px/29px Poppins;">{series.name}: </td>' +
      //   '<td style="padding:0">{point.y:.1f}</td></tr>',
      // footerFormat: '</table>',
      // shared: true,
      // useHTML: true,

    },
    series: [
      {
        showInLegend: false,
        name: 'New',
       // data: [50, 15, 10, 25],
       data: this.Data,
        type: 'pie',
        // pointWidth: 13,
        //color: '#3C94FA'

      }
    ],
    plotOptions: {

      pie: {
        allowPointSelect: false,
        fillColor: 'red',
        allAreas: false,
        cursor: 'pointer',
        selected: false,
        center:[20,50],
        innerSize: 50,
        dataLabels: {
          enabled: false,
        },

      },
      series: {
        states: {
            hover: {
                enabled: true,
                shadow:false,
              opacity:1,
              halo:{
                opacity:0.1,
                size:1
              },
              animation:false,
            }
        },
        accessibility:{
          enabled:true,

        }
    }

    },

  };
  // required
  // chartCallback: Highcharts.ChartCallbackFunction = function (chart) { } // optional function, defaults to null
  // updateFlag: boolean = false; // optional boolean
  // oneToOneFlag: boolean = true; // optional boolean, defaults to false
  // runOutsideAngular: boolean = false; // optional boolean, defaults to fal

  constructor() { }

  ngOnInit(): void {
  }

count=0;
  getColorClass(j:number){
    // this.count++;
    // console.log(this.count)
    // console.log(this.ChartColors.at(j));
    let ans=this.ChartColors.at(j);
    return this.ChartColors.at(j);
  }
}
