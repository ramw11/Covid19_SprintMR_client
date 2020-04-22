import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class LastUpdateService {

  url;

  constructor(private http: HttpClient, private config: AppConfigService) { 
    this.url = this.config.getBaseUrl() + 'getLastUpdate';
  }

  public getLastUpdate(){
    return this.http.get(this.url);
  }
}
