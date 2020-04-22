import { MONITOR_PATIENT } from './../patient-monitor.component';
import { Component, OnInit } from '@angular/core';
import { CurrPersonService } from '../../../../services/curr-person.service';

//declare var $: any;
//export const BrVal = {patientID:'', br: ''}

@Component({
  selector: 'app-monitor-breathing-rate',
  templateUrl: './monitor-breathing-rate.component.html',
  styleUrls: ['./monitor-breathing-rate.component.scss']
})
export class MonitorBreathingRateComponent implements OnInit {

  timer: any;
  currBr = {br: '', new: true };

  warning_icon = './../../../../../assets/icons/warning-icon-red.png';
  black_icon = './../../../../../assets/icons/black-icon.png'
  warning = '';


  constructor() { }


  ngOnInit() {
    this.timer = setInterval(() => {
      let temp = MONITOR_PATIENT.BR.val+'';
      this.currBr.br = temp.substring(0, Math.min(4, temp.length));
      this.currBr.new = MONITOR_PATIENT.BR.new;
      if(this.currBr.new){
        this.warning = this.black_icon;
      } else {
        this.warning = this.warning_icon;
      }
      //this.getPatientInfo();
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
            //console.log(BrVal.patientID);
            console.log(exportData[0]._source.primery_priority.breath_rate); //todo fix to patient id
            BrVal.br = exportData[0]._source.primery_priority.breath_rate;
          }
          else {
          
          }
      });
  }
*/
  randomBr(){
    this.currBr.br = (Math.floor(Math.random()*10) + 10)+'';
  }

}
