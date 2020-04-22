import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo_path = './../../../../assets/logo/medic.png';
  //logo_path = './../../../../assets/logo/covidlogo.png';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnClick(){
    this.router.navigate(['']);
  }

  newSensor(){
    this.router.navigate(['/new-sensor']);
  }

  setHospital(){
    this.router.navigate(['/set-default-hospital'])
  }

}
