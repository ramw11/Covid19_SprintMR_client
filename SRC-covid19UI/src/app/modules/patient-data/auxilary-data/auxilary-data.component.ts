import { ELASTIC_HOST } from './../../../app.component';
import { CurrPersonService } from './../../../services/curr-person.service';
import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

declare var $: any;
const PATIENT_AUXILARY_DATA = {patient_id: '', auxilary_data: undefined}

@Component({
  selector: 'app-auxilary-data',
  templateUrl: './auxilary-data.component.html',
  styleUrls: ['./auxilary-data.component.scss']
})
export class AuxilaryDataComponent implements OnInit {

  //Spirometer
  //Stethoscope
  timer: any;
  type = '';
  iframe_src: SafeResourceUrl  = this.s.bypassSecurityTrustResourceUrl('');;
  iframe_is_set = false;
  visibility = 1;

  //the study can be a spirometer, a stethoscope or an ECG study.
  constructor(private currPersonService: CurrPersonService, private s: DomSanitizer) {
    this.currPersonService.sharedMessage.subscribe(patient => {
      PATIENT_AUXILARY_DATA.patient_id = patient.patient_Id;
    }); 
  }

  ngOnInit() {
    //console.log('--------------------')
    this.timer = setInterval(()=>{
      this.getAuxilaryData();
      if(PATIENT_AUXILARY_DATA.auxilary_data !== undefined && !this.iframe_is_set){
        this.visibility = -1;
        //console.log(PATIENT_AUXILARY_DATA.auxilary_data)
        PATIENT_AUXILARY_DATA.auxilary_data.study.data.forEach(t => {
          this.type = this.type + t.type + '|';
        });
        this.type = this.type.substring(0, this.type.length - 1);

        this.type = PATIENT_AUXILARY_DATA.auxilary_data.study.data[0].type;
        //console.log(this.type)
        this.iframe_src = this.s.bypassSecurityTrustResourceUrl(PATIENT_AUXILARY_DATA.auxilary_data.study.link);
        this.iframe_is_set = true;
        //console.log(PATIENT_AUXILARY_DATA.auxilary_data.study.link)
      }
    }, 1000*1);
    
  }

  async getAuxilaryData(){
    var client = new $.es.Client({
      // hosts: hosts
      host: ELASTIC_HOST,
    });

    var result = client.search({
      index: 'measure_results_v5',
      size: 1000,
      body:{
        sort: [{ "timeTag": { "order": "desc" } }],
        query:{
          match:{patientId: PATIENT_AUXILARY_DATA.patient_id}
        }
      }
    
      },
        function(err, resp, status) {
          if (resp) {
            var exportData = resp.hits.hits;
            //console.log('-------------')
            //console.log(exportData);
            var patientMeasureRes = undefined;
            for(let i=0; i<exportData.length;i++){
              if(exportData[i]._source.auxilary_data != undefined){
                patientMeasureRes = exportData[i]._source;
                break;
              }
            }
            var aux_data = patientMeasureRes.auxilary_data;
            //console.log(patientMeasureRes);
            PATIENT_AUXILARY_DATA.auxilary_data = aux_data;
            //console.log(PATIENT_AUXILARY_DATA);
          }
          else {
          
          }
      });
  }
}
