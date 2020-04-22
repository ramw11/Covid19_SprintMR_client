export class PersonalData {
  Name: string;
  Age: number;
  Gender: string;
  HighRiskGroup: boolean;
}

export class HospitalizationInfo {
  ReceptionTime;
  ReleaseTime;
  HospitalizationStatus;
  Comments;
}

export class PersonSettings {
  // settings info
  minHR: number;
  maxHR: number;
  minBR: number;
  maxBR: number;
  minSpO2: number;
  maxSpO2: number;
  //sensors;
}

export class AlertData {
  name: string;
  time: Date;
}

export class PersonHistory {
  alerts: AlertData[];
  scoring: number[];
}

export class DBPatient{
  patient_Id: string;
  time_tag: string;
  first_name: string;
  last4Digit: string;
  institute_name: string;
  department_name: string;
  room_identifier: string;
  bed_identifier: string;
  bed_location: string;
  date_of_birth: string;
  risk_group: string;
  weight: string;
  gender: string;
  normal_range_list;
  sensors_list;
}

export class MeasureResultsUI{
  heartRate;
  bloodPresure;
  spO2;
  breathingRate;
  extraO2;
  fever;
  breathingInfo;
}

export class PersonHealthData {
  patient_Id;
  time_tag;
  first_name: string;
  last4Digit: string;
  institute_name: string;
  department_name: string;
  room_identifier: string;
  bed_identifier: string;
  bed_location: string;
  date_of_birth: string;
  // risk_group: string;
  weight: number;
  gender: string;
  personal: PersonalData;

  hospitalization: HospitalizationInfo;

  measureResults: MeasureResultsUI;

  alerts;
  progress;

  score;
  history: PersonHistory;
  settings: PersonSettings;
  sensors_list;
}

export const DEFAULT_HOSPITAL = {name: 'Asuta'}

export const DEFAULT_PERSON_SETTINGS: PersonSettings = {
  minHR: 51, 
  maxHR: 90,
  minBR: 12, 
  maxBR: 20, 
  minSpO2: 96, 
  maxSpO2: 100, 
  //sensors:[]
}

export const DEFAULT_PERSON_HISTORY = {
  alerts: [],
  scoring: []
}

export const HEALTH_DATA: PersonHealthData[] = [];

export const SENSORS = [];

export const PATIENTS = [];

export const PATIENT_STATUS_LIST = [];

export const MEASURMENT_RESULTS = [];

/*
async function esTimeQuery() {
  var result = await client_prd.search({
    index: 'measure_results_v5',
    size: 100,
    body: {
      sort: [{ "timeTag": { "order": "desc" } }],
      query: {
        // CAUTION: dear Natali, do not query 'gte' for too long ago, it might not be efficient,
        //          let's say that an hour is enough
        "range": { "timeTag": { "gte": "2020-04-13T16:22:02.997", "lt": "now" } }
      },
    }
  },
    function (err, resp, status) {
      if (resp) {
        // do something
        console.log(resp.hits.hits);
      }
      else {
        console.log(err);
      }
    });
}
*/

