import { SensorsService } from './../../services/sensors.service';
import { SENSORS, DEFAULT_HOSPITAL } from './../../interfaces/PersonData';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-sensor',
  templateUrl: './new-sensor.component.html',
  styleUrls: ['./new-sensor.component.scss']
})
export class NewSensorComponent implements OnInit {

  sensorID;
  sensorName: string = '';
  sensorVendor: string = '';
  description: string = '';

  department: string;
  institute: string;


  constructor(private router: Router, private sensorsService: SensorsService) { }

  ngOnInit() {
  }

  OnClick(){
    if(!this.validate()){
      alert('Please check that all of the fields are set properly');
      return;
    }
    const new_sensor = {
      unit_id: this.getNextID(), 
      name_tag: this.sensorName,
      time_tag: '2020-04-13T09:47:09.981Z',
      sensor_name: '',
      vendor_name: this.sensorVendor, 
      description: this.description,
      institute_name: this.institute,
      department_name: this.department,
      currently_in_use: 'false'
    }

    SENSORS.push(new_sensor);
    alert('Sensor added to list');
    //this.router.navigate(['/']);

    this.sensorsService.addSensor(new_sensor).
    subscribe(sensor =>{})
  }

  validate(){
    if(this.sensorID === '' || this.sensorVendor === ''){
      return false;
    }
    return true;
  }

  getNextID(){
    return SENSORS.length + '';
  }

}
