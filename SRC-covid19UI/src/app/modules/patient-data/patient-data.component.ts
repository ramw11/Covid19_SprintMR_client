import { CurrPersonService } from './../../services/curr-person.service';
import { PersonSettings, PersonHealthData } from '../../interfaces/PersonData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.scss']
})
export class PatientDataComponent implements OnInit {

  // selectedPerson: PersonHealthData;
  name: string;
  
  constructor(private currPersonService: CurrPersonService) {
    this.currPersonService.sharedMessage.subscribe(person => this.name = person.personal.Name)
   }

  ngOnInit() {
  }

}
