import { PatientsService } from './../../services/patients.service';
import { PatientsListService } from './../../services/patients-list.service';
import { CurrPersonService } from './../../services/curr-person.service';
import { Router } from '@angular/router';
import { PersonHistory, 
         PersonSettings,
         PersonHealthData,
         DEFAULT_PERSON_SETTINGS,
         DEFAULT_PERSON_HISTORY,
         DEFAULT_HOSPITAL,
         HEALTH_DATA,
         SENSORS, 
         DBPatient} from './../../interfaces/PersonData';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';

const Months = [
  {num: 1, name:'January'},
  {num: 2, name:'February'},
  {num: 3, name:'March'},
  {num: 4, name:'April'},
  {num: 5, name:'May'},
  {num: 6, name:'June'},
  {num: 7, name:'July'},
  {num: 8, name:'August'},
  {num: 9, name:'September'},
  {num: 10, name:'October'},
  {num: 11, name:'November'},
  {num: 12, name:'December'}
]

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})

export class NewPatientComponent implements OnInit {
  @ViewChild('table',null) table: MatTable<any>;
  newId: number;

  firstName: string = '';
  last4Digit: string = '';
  day: number;
  month;
  year: number;
  inRisk: boolean = false;

  sensor = {unit_id: 'None', 
            name_tag:'None', 
            time_tag: "2020-04-13T09:10:19.698Z",
            sensor_name: '',
            vendor_name: 'EarlySense', 
            description: '',
            institute_name: '',
            department_name: '',
            currently_in_use: 'false'};

  displayedColumns: string[] = ['unit_id', 'name_tag', 'vendor_name', 'remove'];
  sensorsDataSource = [];

  daysLst;
  monthsLst;
  yearsLst;

  sensors = [];

  remarks: string = ''

  department: string;
  roomNumber: string;
  bedNumber: string;
  bedLocation: string;

  weight: number = 0;
  gender: string = '';

  minHR: number = DEFAULT_PERSON_SETTINGS.minHR;
  maxHR: number = DEFAULT_PERSON_SETTINGS.maxHR;

  minSpO2: number = DEFAULT_PERSON_SETTINGS.minSpO2;
  maxSpO2: number = DEFAULT_PERSON_SETTINGS.maxSpO2;

  minBR: number = DEFAULT_PERSON_SETTINGS.minBR;
  maxBR: number = DEFAULT_PERSON_SETTINGS.maxBR;

  constructor(private router:Router, 
              private currPersonService: CurrPersonService,
              private patientsService: PatientsService) { 
    this.currPersonService.sharedMessage.subscribe(person => {
      this.newId = person.patient_Id; 
      //console.log(this.newId)     
      this.daysLst = this.incRange(1,31);
      this.monthsLst = Months;
      this.yearsLst = this.decRange(1920, 2020);

      this.setSensors();

    })
    
  }

  ngOnInit() {
  }

  decRange(start, end) {
    return Array.from({length: (end - start + 1)}, (v, k) => (end - k));
  }

  incRange(start, end) {
    return Array.from({length: (end - start + 1)}, (v, k) => (start+k));
  }

  AddSensorToPatient() {
    if(this.sensor.unit_id === 'None'){
      return;
    }
    this.sensor.currently_in_use = 'true';

    const newPatientSensor = {
      unit_id: this.sensor.unit_id,
      name_tag: this.sensor.name_tag,
      time_tag: "2020-04-13T09:10:19.698Z",
      sensor_name: this.sensor.name_tag,
      vendor_name: this.sensor.vendor_name,
      description: this.sensor.description,
      institute_name: this.sensor.institute_name,
      department_name: this.sensor.department_name,
      currently_in_use: 'true'
    }
    this.sensorsDataSource.push(newPatientSensor);
    this.table.renderRows();
    // console.log(this.sensorsDataSource)
    this.sensor = {unit_id: 'None', 
                   name_tag:'None', 
                   time_tag: "2020-04-13T09:10:19.698Z", 
                   sensor_name: '',
                   vendor_name: 'EarlySense', 
                   description: '',
                   institute_name: '',
                   department_name: '',
                   currently_in_use: 'false'};
    this.setSensors();
  }

  removeSensorFromPatient(element){
    let i = this.sensorsDataSource.indexOf(element);
    this.sensorsDataSource[i].currently_in_use = 'false';
    this.sensorsDataSource.splice(i, 1);
    this.table.renderRows();
    this.setSensors();
  }

  setSensors(){
    this.sensors = [];
    SENSORS.forEach(s => {
      if(s.unit_id !== 'None' && this.checkIfSensorInList(s)){
          s.currently_in_use = 'true';
      }
      if(s.currently_in_use === 'false') {
        this.sensors.push(s);
      }
    });
  }

  checkIfSensorInList(currSensor){
    for(let i = 0; i < this.sensorsDataSource.length; i++){
      if(this.sensorsDataSource[i].unit_id === currSensor.unit_id){
        return true;
      }
    }
    return false;
  }

  verifyInput(){
    return (this.firstName === 'Write fisrt name here...' ||
     this.last4Digit === 'Write last 4 ID digits here...' ||
     this.gender === '' ||
     this.day === undefined || this.month === undefined ||
     this.year === undefined || this.department === undefined || this.roomNumber ===undefined ||
     this.bedNumber === undefined) ? false : true;
  }

  OnClick(){
    if(!this.verifyInput()){
      alert('Please check that all of the fields are set properly');
      return;
    }

    if(this.remarks === 'Write remarks here...'){
      this.remarks = '';
    }

    if(this.sensorsDataSource.length === 0) {
      alert('Please choose at least one sensor for the patient');
      return;
    }

    const newPersonSettings: PersonSettings = {
      minHR: this.minHR, 
      maxHR: this.maxHR,
      minBR: this.minBR, 
      maxBR: this.maxBR, 
      minSpO2: this.minSpO2, 
      maxSpO2: this.maxSpO2, 
      //sensors: this.sensorsDataSource
    };

    if(this.bedLocation === undefined){
      this.bedLocation = '';
    }

    const dateOfBirth = new Date(this.year, this.month.num, this.day)
    let timeDiff = Math.abs(Date.now() - dateOfBirth.getTime());
    const age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);

    if(!this.inRisk) {
      if(age >= 65){
        this.inRisk = true;
      }
    }

    const newPatient: PersonHealthData = {
      patient_Id:this.newId, 
      time_tag: '2020-04-13T19:30:08.514Z',
      first_name: this.firstName,
      last4Digit: this.last4Digit,
      institute_name: DEFAULT_HOSPITAL.name,
      department_name: this.department,
      room_identifier: this.roomNumber,
      bed_identifier: this.bedNumber,
      bed_location: this.bedLocation,
      date_of_birth: this.year + '-' + this.getNumStr(this.month.num) + '-' + this.getNumStr(this.day),
      weight: this.weight,
      gender: this.gender,
      personal: {Name: this.firstName, Age: age, Gender: 'male', HighRiskGroup: this.inRisk},
      hospitalization: null,
      measureResults:{
      heartRate: 68, 
      bloodPresure: '120/80', 
      spO2: 99,
      breathingRate:12, 
      extraO2: 'NO', 
      fever:37, 
      breathingInfo: '',},
      alerts: '',
      progress: '',
      score: 0,
      history: DEFAULT_PERSON_HISTORY ,
      settings: newPersonSettings,
      sensors_list: this.sensorsDataSource,
    }

    // this.patientListService.newPatient(newPatient);

    HEALTH_DATA.push(newPatient);

    alert('Patient added');

    this.currPersonService.nextMessage(newPatient);
    //this.router.navigate(['/patient-data']);

    let newPatientDB = this.getPatientToPost(newPatient);
    this.patientsService.addPatient(newPatientDB).subscribe(patient => {});
  }

  getPatientToPost(newPatient: PersonHealthData){
    let sensorsList = [];
    newPatient.sensors_list.forEach(s => {
      sensorsList.push({
        unit_Id: s.unit_id,
        sensor_name: s.sensor_name,
        vendor_name: s.vendor_name,
        description: s.description
      })
    });

    let newPatientDB: DBPatient = {
      patient_Id: newPatient.patient_Id,
      //patient_Id: 'a64ce230-73db-11ea-9ca9-e56bb32f5931',
      time_tag: newPatient.time_tag,
      first_name: newPatient.first_name,
      last4Digit: newPatient.last4Digit,
      institute_name: newPatient.institute_name,
      department_name: newPatient.department_name,
      room_identifier: newPatient.room_identifier,
      bed_identifier: newPatient.bed_identifier,
      bed_location: newPatient.bed_location,
      date_of_birth: newPatient.date_of_birth,
      risk_group: newPatient.personal.HighRiskGroup + '',
      weight: newPatient.weight + '',
      gender: newPatient.gender,
      normal_range_list: [],
      sensors_list: sensorsList
    }
    return newPatientDB;
  }

  getNumStr(num){
    if(num > 9)
      return num+'';
    return '0'+num;
  }
}
