import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ticketstatscard',
  templateUrl: './ticketstatscard.component.html',
  styleUrls: ['./ticketstatscard.component.scss']
})
export class TicketstatscardComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'columnn',
      marginLeft: 38,
      marginBottom: 60,
      scrollablePlotArea: {
        minHeight: 700,
        minWidth: 600,
        scrollPositionX: 0,
      
      },
    
    },
    title: {
      text: 'Ticket Status',
      align: 'left',
    
      style: {
        color: '#0D142A',
        fontFamily: 'Poppins',
        fontWeight: '500', opacity: 0.9,
        margin: '10px !important',
      }
    },

    credits: {
      enabled: false
    },

    scrollbar: {
      enabled: true,
    
    },
    rangeSelector: {
      selected: 0.5,
    },
    legend: {
      align: "left",
      enabled: true,
      //layout: "horizeontal",
      // maxHeight: 00,
      //  margin: 10,
      useHTML: true,
      // verticalAlign:'top',
      // x: 1,
      // y: 1,
      // padding: 0,
      // itemMarginTop: 0,
      // itemMarginBottom: 0,
      itemStyle: {
        fontSize: '11px',
        fontWeight: '500',
        Color: '#0D142A',
        id: '#spandata',
        margin: 5,
        fontFamily: 'Poppins',

      }
    },

    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
     // crosshair: false,
      min: 0,
      allowDecimals: false,
      // gridLineColor: '#EFF2F5',
       gridLineWidth: 1,
       lineWidth:0,
      gridLineInterpolation: 'circle',
      labels: {
        style: {
          color: '#0D142A',
          fontSize: '12px',
          // fontWeight: '100',
          fontFamily: 'Poppins',
          fill: 'rgb(5, 2, 2)'
        }
      },
     
    },

    yAxis: {
      gridLineWidth: 0,
      labels: {
        style: {
          color: '#0D142A',
          fontSize: '12px',
          fontFamily: 'Poppins',
          fill: 'none'
        }
      },
    },


    tooltip: {
      headerFormat: '<span style="font-weight: 500;font-size: 14px;">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0 font-weight: 300;font: normal normal normal 12px/29px Poppins;">{series.name}: </td>' +
        '<td style="padding:0">{point.y:.1f}</td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,

    },
    series: [
      {
        name: 'New',
        data: [13.93, 13.63, 13.73, 13.67, 14.37, 14.89, 14.56, 14.32, 14.13, 13.93, 13.21, 12.16,],
        type: 'column',
        pointWidth: 13,
        color: '#3C94FA'

      }, {
        name: 'Solved',

        data: [10.24, 12.24, 11.95, 12.02, 11.65, 11.96, 11.59, 11.94, 11.96, 11.59, 11.42, 11.76],
        // data: [12.24, 12.24, 11.95, 12.02, 11.65, 11.96, 11.59, 11.94, 11.96, 11.59, 11.42, 11.76, 13.93, 13.63, 13.73, 13.67, 14.37, 14.89, 14.56, 14.32, 14.13, 13.93, 13.21, 12.16,],
        type: 'column',
        pointPlacement: -0.00,
        pointWidth: 13,
        color: '#28D59D'

      }
    ],
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,

      },

    },

  }; // required
  // chartCallback: Highcharts.ChartCallbackFunction = function (chart) { } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to fal

  constructor() { }

  ngOnInit(): void {
  }

}

