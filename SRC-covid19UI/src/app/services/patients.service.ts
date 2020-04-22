import { DBPatient } from './../interfaces/PersonData';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppConfigService } from './app-config.service';


@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  post_url;

  constructor(private http: HttpClient, private config: AppConfigService) {
    this.post_url = this.config.getNewPatientUrl();
   }

  addPatient(new_patient: DBPatient): Observable<DBPatient> {
    return this.http.post<DBPatient>(this.post_url, JSON.stringify(new_patient), this.httpOptions).pipe();
  }

}
