import { MONITOR_PATIENT } from './../patient-monitor.component';
import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
} from 'ng-apexcharts';

import { ChartOptions } from './../../../../interfaces/ChartsTypes';

@Component({
  selector: 'app-monitor-sp-o2-graph',
  templateUrl: './monitor-sp-o2-graph.component.html',
  styleUrls: ['./monitor-sp-o2-graph.component.scss']
})
export class MonitorSpO2GraphComponent implements OnInit {

  @ViewChild("chart", null) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  mydata = [0, 0, 0, 0, 0, 0, 0];
  timer: any;

  constructor() { 
    this.chartOptions = {
      series: [
        {
          //name: "series1",
          data: this.mydata
        },
      ],
      chart: {
        id: 'realtime',
        height: 85,
        background: '#000',
        type: 'line',
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 1000
          }
        },
        toolbar:{
          show:false
        }
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        colors: ['#6495ED']
      },
      xaxis: {
        labels:{
          show: false
        }
      },
      yaxis:{ 
        max: 100,
        show: false,
        showAlways: false,
        showForNullSeries: false,
        labels:{
          show: false
        },
        axisBorder:{
          show: false
        },
        axisTicks:{
          show: false
        },
        crosshairs:{
          show: false
        }
        
      },
      tooltip: { }
    };
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      let fe = this.mydata.shift();
      this.mydata.push(Math.floor(MONITOR_PATIENT.SpO2.val));
      //console.log(this.mydata);
      //this.chart.render();
      //this.chartOptions.series[0].data = this.mydata;
      //console.log(this.chart);
      //this.chart.updateOptions()
      //this.chart.updateSeries
      //this.chart.responsive.shift();
      this.chart.updateSeries([{data: this.mydata}]);

    }, 1000)
    // this.chart.updateSeries()
  }

}
