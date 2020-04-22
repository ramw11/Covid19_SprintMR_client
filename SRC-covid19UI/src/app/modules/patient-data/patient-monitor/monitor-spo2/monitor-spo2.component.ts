import { CurrPersonService } from './../../../../services/curr-person.service';
import { Component, OnInit } from '@angular/core';
import { MONITOR_PATIENT } from './../patient-monitor.component';

//declare var $: any;
//export const spO2Val = {patientID:'', SpO2: ''}

@Component({
  selector: 'app-monitor-spo2',
  templateUrl: './monitor-spo2.component.html',
  styleUrls: ['./monitor-spo2.component.scss']
})
export class MonitorSpo2Component implements OnInit {

  timer: any;
  SpO2 = {spo2: '', new: true};
  //patientID;

  warning_icon = './../../../../../assets/icons/warning-icon-red.png';
  black_icon = './../../../../../assets/icons/black-icon.png'
  warning = '';

  constructor() { 
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      let temp = MONITOR_PATIENT.SpO2.val+'';
      this.SpO2.spo2 = temp.substring(0, Math.min(5, temp.length));
      this.SpO2.new = MONITOR_PATIENT.SpO2.new;
      if(this.SpO2.new){
        this.warning = this.black_icon;
      } else {
        this.warning = this.warning_icon;
      }
      //this.getPatientInfo()
    }, 1000 * 0.5);
    //this.getPatientInfo();
  }

  /*async getPatientInfo(){
    var client = new $.es.Client({
      // hosts: hosts
      host: 'https://search-covid19-es-xpwsq3s2uyodkz7tqizo5oxcty.eu-west-1.es.amazonaws.com/',
    });

    var result = client.search({
      index: 'measure_results_v4',
      size: 1000,
      /*body:{
        query:{
          match:{patientId: '88646e00-7d45-11ea-ac59-2fbe9b8b5360'}
        }
      }
    
      },
        function(err, resp, status) {
          if (resp) {
            var exportData = resp.hits.hits;
            console.log(exportData[0]._source.secondery_priority.saturation);
            spO2Val.SpO2 = exportData[0]._source.secondery_priority.saturation;
          }
          else {
          
          }
      });
  }*/

  randomSpO2(){
    this.SpO2.spo2 = (Math.floor(Math.random()*10) + 90)+'';
  }

}
