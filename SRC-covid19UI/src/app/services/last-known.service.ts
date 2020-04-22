import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AppConfigService } from './app-config.service';


@Injectable({
  providedIn: 'root'
})
export class LastKnownService {

  url;

  constructor(private http: HttpClient, private config: AppConfigService) {
    this.url = this.config.getBaseUrl();
   }

  public getLastKnown(){
    const lastKnownVal = this.http.get(this.url + 'getLastKnown');
    const latUpdate = this.http.get(this.url + 'getLastUpdate');
    return forkJoin([lastKnownVal, latUpdate]);
  }
}
