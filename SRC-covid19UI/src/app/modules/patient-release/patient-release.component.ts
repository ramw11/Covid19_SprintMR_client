import { PatientsListService } from './../../services/patients-list.service';
import { Router } from '@angular/router';
import { CurrPersonService } from './../../services/curr-person.service';
import { PersonSettings, PersonHealthData, HEALTH_DATA } from '../../interfaces/PersonData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-release',
  templateUrl: './patient-release.component.html',
  styleUrls: ['./patient-release.component.scss']
})
export class PatientReleaseComponent implements OnInit {

  firstName: string;
  lastName: string;
  age: number;
  remarks: string;

  selectedPerson: PersonHealthData;
  
  constructor(private router:Router, 
              // private patientsListService: PatientsListService,
              private currPersonService: CurrPersonService) { 
    this.currPersonService.sharedMessage.
    subscribe(
      person => {
        this.firstName = person.personal.Name
        this.age = person.personal.Age;

        this.selectedPerson = person;
      })
  }

  ngOnInit() {
  }

  OnFinishClick(){
    if(confirm('Are you sure you want to discharge the selected patient?')){
      const index = HEALTH_DATA.indexOf(this.selectedPerson);
      if(index != -1)
        HEALTH_DATA.splice(index, 1);
      
      // this.patientsListService.removePatient(this.selectedPerson);
        
      alert('Patient dischareged!');
      this.router.navigate(['/']);
    }
    else{
      alert('Patient remained in list')
      this.router.navigate(['/']);
    }
  }

}
