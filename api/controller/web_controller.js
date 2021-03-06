'use strict';
//const uuidv1 = require('uuid/v1');
const fs = require('fs');
const AWS = require('aws-sdk');
const cfgFile = require("../../config/config.json");
//const logger = cfgFile.logPath;
const aeclient = require('aws-elasticsearch-client');
const options_PRD = {
    host: cfgFile.es.endpoint,
    region: cfgFile.es.region,
    //credentials: awscredentials
};

const client_prd = aeclient(options_PRD);

let redis = require('redis'),
    clientRedis = redis.createClient({
        port: cfgFile.redis.port,               // replace with your port
        host: cfgFile.redis.endpoint
    });

//isESClientAlive(clientRedis);

exports.getLastKnown = function (req, res) {
    console.log('/getLastKnown');
    clientRedis.hgetall("LastKnown", function (err, obj) {
        if (err) {
            console.log(err);
        } else {
            //res.send(obj[Object.keys(obj)[0]]);
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send(obj)
            res.end();
        }
    });
}

exports.getLastUpdate = function (req, res) {
    console.log('/getLastUpdate');
    clientRedis.hgetall("last_update", function (err, obj) {
        if (err) {
            console.log(err);
        } else {
            // res.send(obj[Object.keys(obj)[0]]);
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send(obj)
            res.end();
        }
    });
}

exports.esTimeQuery = function (req, res) {
    console.log('/esTimeQuery');
    let from = req.query.from;
    let to = req.query.to;
    console.log(`from=${from}   to=${to}`);
    if (from != undefined && to != undefined) {
        client_prd.search({
            index: cfgFile.es.indexes.mr, // to config
            size: 100,
            body: {
                sort: [{ "timeTag": { "order": "desc" } }],
                query: {
                    "range": { "timeTag": { "gte": from, "lt": to } }
                },
            } //  TIMETAG = now - 1 hour
        },
            function (err, resp, status) {
                if (resp) {
                    // do something
                    console.log(resp.hits.hits);
                    res.send(resp.hits.hits);
                    res.end();
                }
                else {
                    console.log(err);
                    res.send('ERROR: ' + err);
                    res.end();
                }
            });
    }
}

// access with 'http://{url}/esGetPatient?id={id}'
exports.esGetPatientMR = function (req, res) {
    console.log('/getPatient');
    let patientId = req.query.id;
    console.log(`patient id=${patientId}`);
    if (patientId != undefined) {
        client_prd.search({
            index: cfgFile.es.indexes.mr, //config
            size: 1000,
            body: {
                sort: [{ "timeTag": { "order": "desc" } }],
                query: {
                    match: { patientId: patientId }
                }
            }
        },
            function (err, resp, status) {
                if (resp) {
                    // do something
                    //console.log(resp.hits.hits);
                    res.send(resp.hits.hits);
                    res.end();
                }
                else {
                    console.log(err);
                    res.send('ERROR: ' + err);
                    res.end();
                }
            });
    }
}

exports.esGetAllSensors = function (req, res) {
    console.log('/getAllSensors');
    esQuery(cfgFile.es.indexes.sensors, 'sensor', (hits) => {
        res.send(hits);
        res.end();
    }, (err) => {
        res.send('ERROR: ' + err);
        res.end();
    });
}
exports.esGetAllPatients = (req, res)=> {
    esQuery(cfgFile.es.indexes.patients, 'patient', (hits) => {
        res.send(hits);
        res.end();
    }, (err) => {
        res.send('ERROR: ' + err);
        res.end();
    });
}

exports.esGetAllPatientsStatus= (req,res)=>{
    esQuery(cfgFile.es.indexes.patients_status, 'patient', (hits) => {
        res.send(hits);
        res.end();
    }, (err) => {
        res.send('ERROR: ' + err);
        res.end();
    });
}

async function esQuery(idx, req_type, onSuccess, onErr) {
    console.log('/getAllPatients');
    client_prd.search({
        index: idx,
        type: req_type,
        size: 1000,
        body: {
            query: {
                "match_all": {}
            }
        }
    },
        function (err, resp, status) {
            if (resp) {
                // do something
                //console.log(resp.hits.hits);
                onSuccess(resp.hits.hits);
            }
            else {
                console.log(err);
                onErr(err);
            }
        }
    );
}

async function isESClientAlive(client) {
    let isAlive = await client.ping({
        requestTimeout: 30000,
    }, function (error) {
        if (error) {
            console.error('elasticsearch cluster is down!');
            //log('elasticsearch cluster is down!');
            return false;
        } else {
            console.log('Everything is ok');
            //log('Everything is ok');
            return true;
        }
    });
}
