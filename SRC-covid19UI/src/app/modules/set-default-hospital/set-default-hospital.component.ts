import { DEFAULT_HOSPITAL } from './../../interfaces/PersonData';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-default-hospital',
  templateUrl: './set-default-hospital.component.html',
  styleUrls: ['./set-default-hospital.component.scss']
})
export class SetDefaultHospitalComponent implements OnInit {
  hospital;
  newHospital = '';
  hospitalsList = ['Asuta', 'Wolfson', ]

  constructor(private router: Router) { 
    this.hospital = DEFAULT_HOSPITAL;
  }

  ngOnInit() {
  }

  SetClick(){
    this.router.navigate(['/']);
  }

  AddHospital(){
    if(this.newHospital === ''){
      return;
    }
    this.hospitalsList.push(this.newHospital);
    this.newHospital = '';
  }

}
