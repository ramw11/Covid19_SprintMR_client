'use strict';

module.exports = function(app) {
  var requests = require('../controller/web_controller');

  app.route('/getLastKnown').get(requests.getLastKnown);
  app.route('/getLastUpdate').get(requests.getLastUpdate);
  app.route('/esTimeQuery').get(requests.esTimeQuery);

  // access with 'http://{url}/esGetPatient?id={id}'
  app.route('/getPatient').get(requests.esGetPatientMR); 

  app.route('/getAllSensors').get(requests.esGetAllSensors);
  app.route('/getAllPatients').get(requests.esGetAllPatients);
}