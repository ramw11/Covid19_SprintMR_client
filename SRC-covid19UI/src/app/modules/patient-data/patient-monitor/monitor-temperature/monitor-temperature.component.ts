import { Component, OnInit } from '@angular/core';
import { CurrPersonService } from '../../../../services/curr-person.service';
import { MONITOR_PATIENT } from './../patient-monitor.component';

//declare var $: any;
//export const feverVal = {patientID:'', temp: ''}

@Component({
  selector: 'app-monitor-temperature',
  templateUrl: './monitor-temperature.component.html',
  styleUrls: ['./monitor-temperature.component.scss']
})
export class MonitorTemperatureComponent implements OnInit {

  timer: any;
  currTmp = {tmp:'', new: true};
  warning_icon = './../../../../../assets/icons/warning-icon-red.png';
  black_icon = './../../../../../assets/icons/black-icon.png'
  warning = '';

  constructor() { }

  ngOnInit() {
    this.timer = setInterval(() => {
      let temp = MONITOR_PATIENT.TMP.val+'';
      this.currTmp.tmp = temp.substring(0, Math.min(4, temp.length));
      this.currTmp.new = MONITOR_PATIENT.TMP.new;
      if(this.currTmp.new){
        this.warning = this.black_icon;
      } else {
        this.warning = this.warning_icon;
      }
    }, 1000 * 0.5);
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
            //console.log('--------------------------------------')
            //console.log(feverVal.patientID);
            console.log(exportData[0]._source.secondery_priority.fever); //todo fix to patient id
            feverVal.temp = exportData[0]._source.secondery_priority.fever;
          }
          else {
          
          }
      });
  }*/

  randomTmp(){
    this.currTmp.tmp = (Math.floor(Math.random()*8) + 35) + '';
  }
}
