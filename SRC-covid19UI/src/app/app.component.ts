import { SENSORS, 
         PATIENTS, 
         PATIENT_STATUS_LIST, 
         MEASURMENT_RESULTS } from './interfaces/PersonData';
import { Component, OnInit } from '@angular/core';
import { AppConfigService } from './services/app-config.service';

export var ELASTIC_HOST;
export var REDISFLAG;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'covid19UI';

  constructor(private config: AppConfigService){
    //console.log('--------------')
    //console.log(this.config)
    ELASTIC_HOST = this.config.getElastic();
    REDISFLAG = this.config.getRedisFlag();
  }
  
  ngOnInit() {
    $(document).ready(function() {
      // debugger;   
      // alert('we call alert from JQuery');
         
      var resp = [];
      var err = [];

      var auth = 'elastic:VfuNDVwQqcnJmdLVsNFNoZgI';
      var port = 9243;
      var protocol = 'https';
      var hostUrls = [
          '1ef7bcb100ab4a95b850383f561c435f.us-east-1.aws.found.io'
      ];

      var hosts = hostUrls.map(function (host) {
          return {
              protocol: protocol,
              host: host,
              port: port,
              auth: auth
          };
      });

      // debugger;

      var client = new $.es.Client({
       // hosts: hosts
       host: ELASTIC_HOST,
      });

      resp =  client.cluster.health({});
      // alert(resp);

      resp =  client.ping({
          requestTimeout: 30000
      });

      //debugger;

      var result = client.search({
        index: 'patients_v1',
        size: 1000,
        //match: {}
      
        },
         function(err, resp, status) {
           if (resp) {
             //debugger;
             var exportData = resp.hits.hits;
             //console.log(exportData);
             exportData.forEach(p => {
              //console.log('------')
              //console.log(sensor._source.unit_id)
              if(p._source.patient_Id !== undefined){
                PATIENTS.push(p._source);
              }
            });
           }
           else {
            
           }
       });

      //

      var result = client.search({
        index: 'sensors_v1',
        size: 1000,
        //match: {}
      
        },
         function(err, resp, status) {
           if (resp) {
             //debugger;
             var exportData = resp.hits.hits;
             //console.log(exportData);
             exportData.forEach(sensor => {
               //console.log('------')
               //console.log(sensor._source.unit_id)
               if(sensor._source.unit_id !== undefined){
                 SENSORS.push(sensor._source);
               }
             });
           }
           else {
            
           }
       });

    });
  }

}
