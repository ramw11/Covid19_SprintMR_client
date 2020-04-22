import { PersonHealthData } from './../../../interfaces/PersonData';
import { ELASTIC_HOST, REDISFLAG } from './../../../app.component';
import { CurrPersonService } from './../../../services/curr-person.service';
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { LastKnownService } from '../../../services/last-known.service';

declare var $: any;
export const MONITOR_PATIENT = {patientID:'', 
                                HR: {val: '', new: true},
                                SpO2: {val: 0, new: true},
                                BR: {val: 0, new: true},
                                TMP: {val:'', new: true},
                                Bp_h: {val: 0,new: true},
                                Bp_l: {val: 0,new: true},
                                ECG: {val: {},new: true},
                              }
const P_MEASURE_RESULTS = [];

@Component({
  selector: 'app-patient-monitor',
  templateUrl: './patient-monitor.component.html',
  styleUrls: ['./patient-monitor.component.scss']
})

export class PatientMonitorComponent implements OnInit {

  timer: any;
  lastKnownLst;
  lastUpdateLst;

  selectedPerson;

  constructor(private currPersonService: CurrPersonService, private lastKnownService: LastKnownService) {
    this.currPersonService.sharedMessage.
    subscribe(
      person => {
        //MONITOR_PATIENT.patientID = person.patient_Id;
        // MONITOR_PATIENT.patientID = 'nbnbnbnb-778c-11ea-99b7-nbnbnbnbnbnb' //todo - change to patient id!!!
        MONITOR_PATIENT.patientID = person.patient_Id;
        this.selectedPerson = person;
      })
   }

  ngOnInit() {
    this.timer = setInterval(() => {
      if(REDISFLAG){
        this.getLatestPatientInfo();
        //this.getPatientInfo1()
      }
      else{
        this.getPatientInfo();
        this.getPatientUIMeasureResults();
      }
    }, 1000 * 0.5);
  }
  // not in use
  getPatientInfo1(){
    MONITOR_PATIENT.HR.val = (Math.floor(Math.random()*30) + 51) + '';
    MONITOR_PATIENT.SpO2.val = (Math.floor(Math.random()*10) + 90);
    MONITOR_PATIENT.BR.val = (Math.floor(Math.random()*10) + 10);
    MONITOR_PATIENT.TMP.val = (Math.floor(Math.random()*5) + 35)+'';
    MONITOR_PATIENT.Bp_h.val = 122;
    MONITOR_PATIENT.Bp_l.val = 68;

  }

  getLastKnown(){
    this.lastKnownService.getLastKnown().subscribe(lists => {
        this.lastKnownLst = lists[0];
        this.lastUpdateLst = lists[1];

        //let ret = this.getPatientUIMeasureResultsFromRedis('a64ce230-73db-11ea-9ca9-e56bb32f5931');
        let ret = this.getPatientUIMeasureResultsFromRedis(MONITOR_PATIENT.patientID);
        if(ret === undefined){
          return;
        }
        MONITOR_PATIENT.HR = ret.heartRate;
        MONITOR_PATIENT.SpO2.val = +ret.spO2.val;
        MONITOR_PATIENT.SpO2.new = ret.spO2.new;
        MONITOR_PATIENT.BR.val = +ret.breathingRate.val;
        MONITOR_PATIENT.BR.new = ret.breathingRate.new;
        MONITOR_PATIENT.TMP = ret.fever;

        let bp = ret.bloodPresure.val;

        MONITOR_PATIENT.Bp_h.val = +bp.substring(0, bp.indexOf('/'));
        MONITOR_PATIENT.Bp_l.val = +bp.substring(bp.indexOf('/')+1, bp.length);

        //MONITOR_PATIENT.ECG = patientMeasureRes.secondery_priority.ecg;
    });
  }

  getLatestPatientInfo(){
    this.getLastKnown();
  }

  getPatientUIMeasureResultsFromRedis(patientId){
    let PatientMeasureResults = {
      heartRate: {val: '-', new: true}, 
      bloodPresure: {val: '-', new: true}, 
      spO2: {val: '0', new: true},
      breathingRate: {val: '0', new: true}, 
      extraO2: {val: '', new: true}, 
      fever: {val: '-', new: true}, 
      breathingInfo: {val: '-', new: true},
    }

    if(this.lastKnownLst[patientId] === undefined){
      return PatientMeasureResults;
    }

    let p_lastKnown = JSON.parse(this.lastKnownLst[patientId]);
    let p_lastUpdate = JSON.parse(this.lastUpdateLst[patientId]);

    

    let hr = p_lastKnown.secondery_priority.bpm+'';
    if(hr === undefined){ hr = '-';}
    let bp_h = p_lastKnown.secondery_priority.blood_pressure_h+'';
    if(bp_h === undefined){ bp_h = '-';}
    let bp_l = p_lastKnown.secondery_priority.blood_pressure_l+'';
    if(bp_l === undefined) {bp_l = '-';}
    let p_bp = bp_h.substring(0, Math.min(bp_h.length, 5)) +
            '/' + 
            bp_l.substring(0, Math.min(bp_l.length, 5));
    let spO2 = p_lastKnown.secondery_priority.saturation+'';
    if(spO2 === undefined) {spO2 = '0';}
    let br = p_lastKnown.primery_priority.breath_rate;
    if(br === undefined) {br = '0';}
    let fever = p_lastKnown.secondery_priority.fever+'';
    if(fever === undefined) {fever = '-'};
    let p_breathing_info = 'cough %: ' + p_lastKnown.primery_priority.cough_presence_rate;
    if(p_lastKnown.primery_priority.wheezing){
      p_breathing_info = 'Wheezing, ' + p_breathing_info;
    }

    PatientMeasureResults.heartRate.val = hr.substring(0, Math.min(5, hr.length));
    PatientMeasureResults.bloodPresure.val = p_bp;
    PatientMeasureResults.spO2.val = spO2.substring(0, Math.min(spO2.length, 5));
    PatientMeasureResults.breathingRate.val = br;
    PatientMeasureResults.fever.val = fever.substring(0, Math.min(fever.length, 4));
    PatientMeasureResults.breathingInfo.val = p_breathing_info;

    PatientMeasureResults.heartRate.new = this.isNewInformation(p_lastUpdate.updates.bmp, 10);
    PatientMeasureResults.bloodPresure.new = 
        this.isNewInformation(p_lastUpdate.updates.blood_pressure_h, 10) &&
        this.isNewInformation(p_lastUpdate.updates.blood_pressure_l, 10);
    PatientMeasureResults.spO2.new = this.isNewInformation(p_lastUpdate.updates.saturation, 10);
    PatientMeasureResults.breathingRate.new = this.isNewInformation(p_lastUpdate.updates.breath_rate, 10);
    PatientMeasureResults.fever.new = this.isNewInformation(p_lastUpdate.updates.fever, 10);
    PatientMeasureResults.breathingInfo.new = 
        this.isNewInformation(p_lastUpdate.updates.cough_presence_rate, 10) &&
        this.isNewInformation(p_lastUpdate.updates.wheezing, 10);

    return PatientMeasureResults;
  }

  isNewInformation(originalTime, maxDelay){
    let now = new Date((new Date()).toUTCString());
    let time = new Date((new Date(originalTime)).toUTCString());

    let diffMs = Math.abs(now.getTime() - time.getTime());
    let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
    
    return diffMins < maxDelay ? true : false;
  }


  getPatientUIMeasureResults(){ //todo - take care of time!!!
    let p_id = this.selectedPerson.patient_Id;
    let isUpdated = {
      heartRate: false, 
      bloodPresure: false, 
      spO2: false,
      breathingRate: false, 
      extraO2: false, 
      fever: false, 
      breathingInfo: false,
    }
    let return_Value ={
      heartRate: {val: '-', new: true}, 
      bloodPresure: {val: '-', new: true}, 
      spO2: {val: '0', new: true},
      breathingRate: {val: '0', new: true}, 
      extraO2: {val: '', new: true}, 
      fever: {val: '-', new: true}, 
      breathingInfo: {val: '-', new: true},
    }

    for(let i=0; i < P_MEASURE_RESULTS.length; i++){ 
      if(isUpdated.heartRate && isUpdated.bloodPresure && isUpdated.spO2 && isUpdated.breathingRate
          && isUpdated.fever && isUpdated.breathingInfo){
        break;
      }

      let curr_mr = P_MEASURE_RESULTS[i];
      if(!isUpdated.heartRate && curr_mr.secondery_priority.bpm !== undefined 
                    && curr_mr.secondery_priority.bpm !== 0){
        let hr = curr_mr.secondery_priority.bpm+'';
        return_Value.heartRate.val = hr.substring(0, Math.min(5, hr.length));
        isUpdated.heartRate = true;
      }

      if(!isUpdated.bloodPresure && curr_mr.secondery_priority.blood_pressure_h !== undefined 
                    && curr_mr.secondery_priority.blood_pressure_h !== 0){
        let bp_h = curr_mr.secondery_priority.blood_pressure_h+'';
        let bp_l = curr_mr.secondery_priority.blood_pressure_l+'';
        let p_bp = bp_h.substring(0, Math.min(bp_h.length, 5)) +
              '/' + 
              bp_l.substring(0, Math.min(bp_l.length, 5));
        return_Value.bloodPresure.val = p_bp;
        isUpdated.bloodPresure = true;
      }

      if(!isUpdated.spO2 && curr_mr.secondery_priority.saturation !== undefined 
                    && curr_mr.secondery_priority.saturation !== 0){
        let spO2 = curr_mr.secondery_priority.saturation+'';
        return_Value.spO2.val = spO2.substring(0, Math.min(spO2.length, 5));
        isUpdated.spO2 = true;
      }

      if(!isUpdated.breathingRate && curr_mr.primery_priority.breath_rate !== undefined 
                    && curr_mr.primery_priority.breath_rate !== 0){
        return_Value.breathingRate.val = curr_mr.primery_priority.breath_rate;
        isUpdated.breathingRate = true;
      }

      if(!isUpdated.fever && curr_mr.secondery_priority.fever !== undefined 
                    && curr_mr.secondery_priority.fever !== 0){
        return_Value.fever.val = curr_mr.secondery_priority.fever;
        isUpdated.fever = true;
      }

      if(!isUpdated.breathingInfo && curr_mr.primery_priority.cough_presence_rate !== undefined 
                    && curr_mr.primery_priority.cough_presence_rate !== 0){
        let p_breathing_info = 'cough %: ' + curr_mr.primery_priority.cough_presence_rate;
        if(curr_mr.primery_priority.wheezing){
          p_breathing_info = 'Wheezing, ' + p_breathing_info;
        }
        return_Value.breathingInfo.val = p_breathing_info;
      }
    }
    
    MONITOR_PATIENT.HR = return_Value.heartRate;
    MONITOR_PATIENT.SpO2.val = +return_Value.spO2.val;
    MONITOR_PATIENT.SpO2.new = return_Value.spO2.new;
    MONITOR_PATIENT.BR.val = +return_Value.breathingRate.val;
    MONITOR_PATIENT.BR.new = return_Value.breathingRate.new;
    MONITOR_PATIENT.TMP = return_Value.fever;

    let bp = return_Value.bloodPresure.val;

    MONITOR_PATIENT.Bp_h.val = +bp.substring(0, bp.indexOf('/'));
    MONITOR_PATIENT.Bp_l.val = +bp.substring(bp.indexOf('/')+1, bp.length);

  }

  async getPatientInfo(){
    var client = new $.es.Client({
      // hosts: hosts
      host: ELASTIC_HOST,
    });

    var result = client.search({
      index: 'measure_results_v5',
      size: 1000,
      body:{
        query:{
          match:{patientId: MONITOR_PATIENT.patientID}
        }
      }
    
      },
        function(err, resp, status) {
          if (resp) {
            var exportData = resp.hits.hits;
            for(let i = 0; i < P_MEASURE_RESULTS.length; i++){
              P_MEASURE_RESULTS.pop();
             }
             
             exportData.forEach(result => {
               if(result._source.patientId !== undefined){
                P_MEASURE_RESULTS.push(result._source);
               }
             });
          }
          else {
          
          }
      });
  }

}
