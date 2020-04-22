import { MONITOR_PATIENT } from './../patient-monitor.component';
import { Component, OnInit } from '@angular/core';
import { CurrPersonService } from '../../../../services/curr-person.service';

//declare var $: any;
//export const hrVal = {patientID:'', hr: ''}

@Component({
  selector: 'app-monitor-heart-rate',
  templateUrl: './monitor-heart-rate.component.html',
  styleUrls: ['./monitor-heart-rate.component.scss']
})
export class MonitorHeartRateComponent implements OnInit {

  timer: any;
  timer2: any;
  currPic = '../../../../../assets/monitor_pics/heart.jpg';
  heartPicPath = '../../../../../assets/monitor_pics/heart.jpg';
  blackPicPath = '../../../../../assets/monitor_pics/black.jpg';
  hearts = [this.heartPicPath, this.blackPicPath];
  currPicIdx=0;
  heartRate = {hr:'' , new: true};

  warning_icon = './../../../../../assets/icons/warning-icon-red.png';
  black_icon = './../../../../../assets/icons/black-icon.png'
  warning = '';

  constructor() { }

  ngOnInit() {
    this.timer = setInterval(() => {
      let temp = MONITOR_PATIENT.HR.val+'';
      this.heartRate.hr = temp.substring(0, Math.min(5, temp.length));
      this.heartRate.new = MONITOR_PATIENT.HR.new;
      if(this.heartRate.new){
        this.warning = this.black_icon;
      } else {
        this.warning = this.warning_icon;
      }
    }, 1000 * 0.5);

    this.timer2 = setInterval(() => {
      this.heartPic();
    }, 1000 * 1);

  }

  /*async getPatientInfo(){
    var client = new $.es.Client({
      // hosts: hosts
      host: 'https://search-covid19-es-xpwsq3s2uyodkz7tqizo5oxcty.eu-west-1.es.amazonaws.com/',
    });

    var result = client.search({
      index: 'measure_results_v4',
      size: 1000,
      body:{
        query:{
          match:{patientId: '88646e00-7d45-11ea-ac59-2fbe9b8b5360'}
        }
      }
    
      },
        function(err, resp, status) {
          if (resp) {
            var exportData = resp.hits.hits;
            //console.log('--------------------------------------')
            //console.log(hrVal.patientID);
            console.log(exportData[0]._source.secondery_priority.bpm); //todo fix to patient id
            hrVal.hr = exportData[0]._source.secondery_priority.bpm;
          }
          else {
          
          }
      });
  }*/

  randomHr(){
    this.heartRate.hr = (Math.floor(Math.random()*30) + 51) + '';
  }

  heartPic(){
    this.currPic = this.hearts[this.currPicIdx]
    this.currPicIdx = 1 - this.currPicIdx;
  }

}
