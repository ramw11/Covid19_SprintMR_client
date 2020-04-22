import { Sensor } from './../interfaces/SensorData';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppConfigService } from './app-config.service';


@Injectable({
  providedIn: 'root'
})
export class SensorsService {
 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  post_url;

  constructor(private http: HttpClient, private config: AppConfigService) { 
    this.post_url = this.config.getNewSensorUrl();
  }

  addSensor (new_sensor: Sensor): Observable<Sensor> {
    console.log(JSON.stringify(new_sensor));
    return this.http.post<Sensor>(this.post_url, JSON.stringify(new_sensor), this.httpOptions).pipe();
  }
}