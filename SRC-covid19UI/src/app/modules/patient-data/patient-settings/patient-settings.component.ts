import { PatientsListService } from './../../../services/patients-list.service';
import { Router } from '@angular/router';
import { CurrPersonService } from './../../../services/curr-person.service';
import { PersonHistory, 
         PersonSettings,
         PersonHealthData,
         DEFAULT_HOSPITAL,
         DEFAULT_PERSON_SETTINGS,
         DEFAULT_PERSON_HISTORY,
         HEALTH_DATA,
         SENSORS } from './../../../interfaces/PersonData';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-patient-settings',
  templateUrl: './patient-settings.component.html',
  styleUrls: ['./patient-settings.component.scss']
})
export class PatientSettingsComponent implements OnInit {
  @ViewChild('table',null) table: MatTable<any>;
  
  sensor1 = {unit_id: 'None', 
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

  sensors = [];

  //hospital = DEFAULT_HOSPITAL;
  department: string;
  roomNumber: string;
  bedNumber: string;
  bedLocation: string;

  minHR: number = DEFAULT_PERSON_SETTINGS.minHR;
  maxHR: number = DEFAULT_PERSON_SETTINGS.maxHR;

  minSpO2: number = DEFAULT_PERSON_SETTINGS.minSpO2;
  maxSpO2: number = DEFAULT_PERSON_SETTINGS.maxSpO2;

  minBR: number = DEFAULT_PERSON_SETTINGS.minBR;
  maxBR: number = DEFAULT_PERSON_SETTINGS.maxBR;

  selectedPerson: PersonHealthData;

  citical_color = 'red';

  constructor(private router: Router,
              // private patientsListService: PatientsListService,
              private currPersonService: CurrPersonService) {
    this.currPersonService.sharedMessage.
    subscribe(
      person => {
        //console.log(SENSORS);
        //console.log(person.id);
        //console.log(person.settings.sensors)
        this.selectedPerson = person;
        this.department = person.department_name;
        this.roomNumber = person.room_identifier;
        this.bedNumber = person.bed_identifier;
        this.bedLocation = person.bed_location;

        this.sensorsDataSource = person.sensors_list;

        this.setSensors();
      })
   }

  ngOnInit() {
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

  AddSensorToPatient(){
    if(this.sensor1.unit_id === 'None'){
      return;
    }
    this.sensor1.currently_in_use = 'true';

    const newPatientSensor = {
      unit_id: this.sensor1.unit_id,
      name_tag: this.sensor1.name_tag,
      time_tag: "2020-04-13T09:10:19.698Z",
      sensor_name: this.sensor1.name_tag,
      vendor_name: this.sensor1.vendor_name,
      description: this.sensor1.description,
      institute_name: this.sensor1.institute_name,
      department_name: this.sensor1.department_name,
      currently_in_use: 'true'
    }
    

    this.sensorsDataSource.push(newPatientSensor);
    this.table.renderRows();
    this.sensor1 = {unit_id: 'None', 
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

  OnSave() {
    if(this.sensorsDataSource.length === 0) {
      alert('Please choose at least one sensor for the patient');
      return;
    }

    const newSettings: PersonSettings = {
      minHR: this.minHR,
      maxHR: this.maxHR,
      minBR: this.minBR,
      maxBR: this.maxBR,
      minSpO2: this.minSpO2,
      maxSpO2: this.maxSpO2,
      //sensors: this.sensorsDataSource
    }

    this.selectedPerson.sensors_list = this.sensorsDataSource;

    this.selectedPerson.settings = newSettings;
    this.selectedPerson.department_name = this.department;
    this.selectedPerson.room_identifier = this.roomNumber;
    this.selectedPerson.bed_identifier = this.bedNumber;
    this.selectedPerson.bed_location = this.bedLocation;

    // this.patientsListService.editPatient(this.selectedPerson);

    alert('Patient info updated');
    this.router.navigate(['/'])
  }

}
