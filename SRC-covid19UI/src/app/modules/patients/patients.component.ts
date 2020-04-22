import { ELASTIC_HOST, REDISFLAG } from './../../app.component';
import { LastKnownService } from './../../services/last-known.service';
import { DEFAULT_HOSPITAL,  
         PATIENT_STATUS_LIST, 
         MEASURMENT_RESULTS, 
         PersonHistory, 
         PersonSettings,
         PersonHealthData,
         DEFAULT_PERSON_SETTINGS,
         DEFAULT_PERSON_HISTORY,
         HEALTH_DATA,
         PATIENTS } from './../../interfaces/PersonData';
import { PatientsListService } from './../../services/patients-list.service';
import { CurrPersonService } from './../../services/curr-person.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { timer } from 'rxjs'
import { Router } from '@angular/router';
import { MatTable } from '@angular/material';

declare var $: any;
let TIMETAG = "2019-04-13T16:22:02.997";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  @ViewChild('table',null) table: MatTable<any>;

  // icons
  patient_icon = '../../../assets/icons/Patient.JPG';
  room_icon = '../../../assets/icons/Room.JPG';
  age_icon = '../../../assets/icons/age.JPG';
  hr_icon = '../../../assets/icons/HR.JPG'
  bp_icon = '../../../assets/icons/BP.jpg';
  spo2_icon = '../../../assets/icons/sat.jpg';
  br_icon = '../../../assets/icons/BR.JPG'
  fever_icon = '../../../assets/icons/Fever.JPG';
  alerts_icon = '../../../assets/icons/alert.JPG';
  progress_icon = '../../../assets/icons/status.JPG';
  removeUser_icon = '../../../assets/icons/remove-user.jpg';

  displayedColumns: string[] = ['patient_Id', 'room', 'age', 'heartRate', 'bloodPresure', 'spO2',
                                'breathingRate', 'extraO2', 'fever', 'breathingInfo', 'alerts',
                                'progress', 'score', 'data', 'release'];
  dataSource;
  // dataSource: PersonHealthData[];
  dsPatients = PATIENTS;

  mytimer: any;

  greenStatusPath = '../../../assets/colors/green.jpg';
  yellowStatusPath = '../../../assets/colors/yellow.jpg';
  orangeStatusPath = '../../../assets/colors/orange.jpg';
  redStatusPath = '../../../assets/colors/red.jpg';

  numOfCriticalPatients: number;
  numOfMajorPatients: number;
  numOfModeratePatients: number;
  numOfMinorPatients: number;

  // for redis
  lastKnownLst;
  lastUpdateLst;

  constructor(private router: Router, 
              private currPersonService: CurrPersonService,
              private lastKnownService: LastKnownService) {
                //console.log(PATIENTS);
                //console.log(SENSORS);
                //console.log(PATIENT_STATUS_LIST);
                //console.log(MEASURMENT_RESULTS);
                timer(1000).subscribe(() => { 
                  this.setUIPatients();
                  this.dataSource = HEALTH_DATA;
                  HEALTH_DATA.forEach(element => {
                    console.log(element.patient_Id)
                  });
                 })
              }

  ngOnInit() {
    this.mytimer = setInterval(() => {
      TIMETAG = this.getDateInElasticFormat();
      this.updateMeasureResults();
      this.calculatePatientsByScore();
      if(REDISFLAG){
        this.getLatestPatientInfo();
      }
      else {
        this.setPatientUIListMeasureResults();
      }
    }, 1000 * 0.5);
  }

  calculatePatientsByScore(){
    this.numOfCriticalPatients = 0;
    this.numOfMajorPatients = 0;
    this.numOfModeratePatients = 0;
    this.numOfMinorPatients = 0;
    HEALTH_DATA.forEach(patient => {
      if(patient.score < 2) {
        this.numOfMinorPatients++;
      }
      if(patient.score >= 2 &&  patient.score < 5) {
        this.numOfModeratePatients++;
      }
      if(patient.score >= 5 && patient.score < 7) {
        this.numOfMajorPatients++;
      }
      if(patient.score >= 7) {
        this.numOfCriticalPatients++;
      }
      
    });
  }

  // set Patients List
  // todo devide score and measure results

  setUIPatients(){
    //console.log('-----------------')
    //console.log(PATIENTS);
    //console.log('length: ' + PATIENTS.length);
    //console.log(PATIENTS[0]);

    if(HEALTH_DATA.length !== 0){
      return;
    }

    PATIENTS.forEach(patient => {
      let curr_age = this.getAge(patient.date_of_birth);
      let riskgroup = true;
      let p_sensorsList = this.getPatientSensors(patient);
      if(patient.risk_group === 'None'){
        riskgroup = false;
      }
      let patientUI = {
        patient_Id: patient.patient_Id, 
        time_tag: patient.time_tag,
        first_name: patient.first_name,
        last4Digit: patient.last4Digit,
        institute_name: patient.institute_name,
        department_name: patient.department_name,
        room_identifier: patient.room_identifier,
        bed_identifier: patient.bed_identifier,
        bed_location: patient.bed_location,
        date_of_birth: patient.date_of_birth,
        weight: patient.weight,
        gender: patient.gender,
        personal:{Name: patient.first_name, 
                  Age: curr_age, 
                  Gender: patient.gender, 
                  HighRiskGroup: riskgroup},
        hospitalization: null,
        measureResults:{
          heartRate: {val: '-', new: true}, 
          bloodPresure: {val: '-', new: true}, 
          spO2: {val: '-', new: true},
          breathingRate: {val: '-', new: true}, 
          extraO2: {val: '', new: true}, 
          fever: {val: '-', new: true}, 
          breathingInfo: {val: '-', new: true},
        },
        alerts: '', 
        progress: '', 
        score: 0, 
        history: 
        {alerts: 
          [/*{name:'no pulse', time: new Date()},
        {name:'no breath', time: new Date()}*/], 
           scoring: []} ,
        settings: DEFAULT_PERSON_SETTINGS,
        sensors_list: p_sensorsList
      }
      //console.log(patientUI);
      HEALTH_DATA.push(patientUI);
    });
  }

  getAge(elastic_b_day){
    if(elastic_b_day === undefined){
      return 0;
    }
    //2020-04-13
    let y = +elastic_b_day.substring(0,4);
    let m = +elastic_b_day.substring(5,7);
    let d = +elastic_b_day.substring(8,10);

    //console.log(y);
    //console.log(m);
    //console.log(d);
    const dateOfBirth = new Date(y, m, d);
    let timeDiff = Math.abs(Date.now() - dateOfBirth.getTime());
    const age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);

    return age;
  }

  getPatientSensors(patient){
    if(patient.sensors_list === undefined){
      return [];
    }
    let newList = [];
    patient.sensors_list.forEach(s => {
      newList.push({
        unit_id: s.unit_Id,
        name_tag: s.sensor_name,
        time_tag: "2020-04-13T09:10:19.698Z",
        sensor_name: s.sensor_name,
        vendor_name: s.vendor_name,
        description: s.description,
        institute_name: patient.institute_name,
        department_name: patient.department_name,
        currently_in_use: 'true'
      });
    });

    return newList;
  }

  // end of set Patients List

  setPatientUIListMeasureResults(){
    HEALTH_DATA.forEach(p_ui => {
      p_ui.measureResults = this.getPatientUIMeasureResults(p_ui);
      p_ui.score = this.getPatientScore(p_ui.patient_Id);
    });
  }

  getPatientUIMeasureResults(patient: PersonHealthData){ //todo - take care of time!!!
    let p_id = patient.patient_Id;
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
      heartRate: patient.measureResults.heartRate,
      bloodPresure: patient.measureResults.bloodPresure, 
      spO2: patient.measureResults.spO2,
      breathingRate: patient.measureResults.breathingRate, 
      extraO2: patient.measureResults.extraO2, 
      fever: patient.measureResults.fever, 
      breathingInfo: patient.measureResults.breathingInfo
    }

    for(let i=0; i < MEASURMENT_RESULTS.length; i++){ 
      if(isUpdated.heartRate && isUpdated.bloodPresure && isUpdated.spO2 && isUpdated.breathingRate
          && isUpdated.fever && isUpdated.breathingInfo){
        break;
      }

      //todo - change back to p_id instead of '800d4470-7d45-11ea-ac59-2fbe9b8b5360'!!!!!!!
      if(MEASURMENT_RESULTS[i].patientId === p_id){
        let curr_mr = MEASURMENT_RESULTS[i];
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
    }

    return return_Value;
  }

  getPatientScore(p_id){
    for(let i=0;i<PATIENT_STATUS_LIST.length;i++){ 
      //todo - change back to p_id instead of '15720b10-778c-11ea-99b7-1f57529dde94'!!!
      if(PATIENT_STATUS_LIST[i].PatientID === p_id){
        console.log(PATIENT_STATUS_LIST[i])
        return PATIENT_STATUS_LIST[i].Score.Total;
        //return Math.floor(Math.random()*9); //check if table is dynamic
      }
    }
    return '-';
  }

  updateMeasureResults(){
    var client = new $.es.Client({
      // hosts: hosts
      host: ELASTIC_HOST,
    });

    var result = client.search({
      index: 'measure_results_v5',
      size: 100,
      body: {
        sort: [{ "timeTag": { "order": "desc" } }],
        query: {
          // CAUTION: dear Natali, do not query 'gte' for too long ago, it might not be efficient,
          //          let's say that an hour is enough
          "range": { "timeTag": { "gte": TIMETAG, "lt": "now" } }
        },
      }
      //match: {}
      },
       function(err, resp, status) {
         if (resp) {
           //debugger;
           var exportData = resp.hits.hits;
           //console.log(exportData);
           if(!REDISFLAG){
             for(let i = 0; i < MEASURMENT_RESULTS.length; i++){
               MEASURMENT_RESULTS.pop();
              }
              
              exportData.forEach(result => {
                if(result._source.patientId !== undefined){
                  MEASURMENT_RESULTS.push(result._source);
                }
              });
            }
         }
         else {
          
         }
     });

     var result = client.search({
      index: 'patient_status',
      size: 1000,
      //match: {}
    
      },
       function(err, resp, status) {
         if (resp) {
           //debugger;
           var exportData = resp.hits.hits;
           for(let i = 0; i < PATIENT_STATUS_LIST.length; i++){
            PATIENT_STATUS_LIST.pop();
          }
           exportData.forEach(status => {
            //console.log('------')
            //console.log(sensor._source.unit_id)
            if(status._source.Id !== undefined){
              PATIENT_STATUS_LIST.push(status._source);
            }
          });
         }
         else {
          
         }
     });
  }

  getDateInElasticFormat(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hour = date.getHours() - 1;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let milliseconds = date.getMilliseconds();

    return year+'-' + this.getNumStr(month, 2) + '-' + this.getNumStr(day, 2)+'T' +
            this.getNumStr(hour, 2) + ':' + this.getNumStr(minutes,2) + ':' + this.getNumStr(seconds, 2) +
            '.' + this.getNumStr(milliseconds, 3);
  }

  getNumStr(num, len){
    if(len === 2){
      if(num > 9)
        return num+'';
      return '0'+num;
    }

    if(num < 9)
      return '00'+num;
    if(num < 100)
      return '0'+num;
    return num;
  }

  // Buttons

  sortByScore() {
    HEALTH_DATA.sort((p1, p2) => (p1.score < p2.score) ? 1 : -1);
    this.table.renderRows();
  }

  newSensor() {
    this.router.navigate(['/new-sensor']);
  }

  newPatient(){
    let newPerson = new PersonHealthData();
    newPerson.patient_Id = this.getNextID();
    this.currPersonService.nextMessage(newPerson);
    this.router.navigate(['/new-patient'])
  }

  getNextID(){
    let nextID = -1;
    HEALTH_DATA.forEach(element => {
      console.log(element.patient_Id);
      if(element.patient_Id >= nextID)
        nextID = element.patient_Id + 1;
      
    });
    // console.log(nextID);
    return nextID;
  }

  patientData(element){
    this.currPersonService.nextMessage(element);
    this.router.navigate(['/patient-data']);
  }

  releasePatient(element){
    this.currPersonService.nextMessage(element);
    this.router.navigate(['/release-document']);
  }

  //end of buttons

  getLastKnown(){
    this.lastKnownService.getLastKnown().subscribe(lists => {
        this.lastKnownLst = lists[0];
        this.lastUpdateLst = lists[1];

        //console.log(this.lastKnownLst)

        HEALTH_DATA.forEach(p_ui => { //todo !! change back to p id
          p_ui.measureResults = this.getPatientUIMeasureResultsFromRedis(p_ui.patient_Id);
          //p_ui.measureResults = this.getPatientUIMeasureResultsFromRedis('a64ce230-73db-11ea-9ca9-e56bb32f5931');
          p_ui.score = this.getPatientScore(p_ui.patient_Id);
        });
      });
  }

  getLatestPatientInfo(){
    this.getLastKnown();
  }

  getPatientUIMeasureResultsFromRedis(patientId){
    //console.log('In Function!!!!!!!!!!!!!!!!!!!!!!!!!!')
    //console.log(this.lastKnownLst)
    let PatientMeasureResults = {
      heartRate: {val: '-', new: true}, 
      bloodPresure: {val: '-', new: true}, 
      spO2: {val: '-', new: true},
      breathingRate: {val: '-', new: true}, 
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

}
