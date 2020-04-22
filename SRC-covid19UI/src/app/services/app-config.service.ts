import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig;

  constructor(private http: HttpClient) {}

  loadAppConfig() {
    return this.http
      .get('./../../assets/config/app-cinfig.json')
      .toPromise()
      .then(data => {
        this.appConfig = data;
      });
  }

  getBaseUrl(): string {
    return this.appConfig.baseUrl;
  }

  getNewSensorUrl(): string {
    return this.appConfig.newSensorUrl;
  }

  getNewPatientUrl(): string {
    return this.appConfig.newPatientUrl;
  }

  getElastic(): string{
    return this.appConfig.elastic;
  }

  getRedisFlag(): string{
    return this.appConfig.redis_flag;
  }

}
