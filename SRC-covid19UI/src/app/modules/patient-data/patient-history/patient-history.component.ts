import { PersonHistory, 
         PersonSettings,
         PersonHealthData,
         AlertData } from './../../../interfaces/PersonData';
import { CurrPersonService } from './../../../services/curr-person.service';
import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.scss']
})
export class PatientHistoryComponent implements OnInit {
  alerts: AlertData[];
  scoring: number[];

  // graph
  lineChartData: ChartDataSets[];

  lineChartLabels: Label[];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  //
  
  constructor(private currPersonService: CurrPersonService) {
    this.currPersonService.sharedMessage.
    subscribe(
      person => {
        this.alerts = person.history.alerts;
        this.scoring = person.history.scoring;

        this.lineChartData = [
          { data: this.scoring, label: 'Patient Scoring' },
        ];

        this.lineChartLabels = [];
        for(let i=0 ; i<this.scoring.length ; i++){
          this.lineChartLabels.push('day ' + (i+1));
        }
      })
   }

  ngOnInit() {}

}
