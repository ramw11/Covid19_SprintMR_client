// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://52.16.82.127:3000/',
  newSensorUrl: 'http://52.16.82.127:4000/new_sensor',
  newPatientUrl: 'http://52.16.82.127:4000/new_patient',
  elastic: 'https://search-covid198-es-2-x6zr2th7oiq7sjzp653cs3k3xm.eu-west-1.es.amazonaws.com/',
  //'https://search-covid19-es-xpwsq3s2uyodkz7tqizo5oxcty.eu-west-1.es.amazonaws.com/',
  redis_flag: true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
