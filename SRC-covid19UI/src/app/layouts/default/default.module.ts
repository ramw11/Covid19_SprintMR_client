import { SetDefaultHospitalComponent } from './../../modules/set-default-hospital/set-default-hospital.component';
import { NewSensorComponent } from './../../modules/new-sensor/new-sensor.component';
import { PatientReleaseComponent } from './../../modules/patient-release/patient-release.component';
import { PatientHistoryComponent } from './../../modules/patient-data/patient-history/patient-history.component';
import { PatientSettingsComponent } from './../../modules/patient-data/patient-settings/patient-settings.component';
import { MonitorBpComponent } from './../../modules/patient-data/patient-monitor/monitor-bp/monitor-bp.component';
import { MonitorBRGraphComponent } from './../../modules/patient-data/patient-monitor/monitor-br-graph/monitor-br-graph.component';
import { MonitorSpO2GraphComponent } from './../../modules/patient-data/patient-monitor/monitor-sp-o2-graph/monitor-sp-o2-graph.component';
import { MonitorECGComponent } from './../../modules/patient-data/patient-monitor/monitor-ecg/monitor-ecg.component';
import { MonitorBloodPressureComponent } from './../../modules/patient-data/patient-monitor/monitor-blood-pressure/monitor-blood-pressure.component';
import { MonitorHeartRateComponent } from './../../modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component';
import { MonitorSpo2Component } from './../../modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component';
import { MonitorBreathingRateComponent } from './../../modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component';
import { MonitorTemperatureComponent } from './../../modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component';
import { PatientMonitorComponent } from './../../modules/patient-data/patient-monitor/patient-monitor.component';
import { AuxilaryDataComponent } from './../../modules/patient-data/auxilary-data/auxilary-data.component';
import { PatientPersonalDataComponent } from './../../modules/patient-data/patient-personal-data/patient-personal-data.component';
import { PatientDataComponent } from './../../modules/patient-data/patient-data.component';
import { NewPatientComponent } from './../../modules/new-patient/new-patient.component';
import { RouterModule } from '@angular/router';
import { PatientsComponent } from './../../modules/patients/patients.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MatSidenavModule, 
         MatTableModule, 
         MatTabsModule, 
         MatIconModule, 
         MatInputModule, 
         MatSelectModule, 
         MatCheckboxModule, 
         MatCardModule, 
         MatRadioModule} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DefaultComponent,
    PatientsComponent,
    NewPatientComponent,
    PatientDataComponent,
    PatientPersonalDataComponent,
    PatientSettingsComponent,
    AuxilaryDataComponent,
    PatientMonitorComponent,
    MonitorBpComponent,
    MonitorSpO2GraphComponent,
    MonitorBRGraphComponent,
    MonitorECGComponent,
    MonitorBloodPressureComponent,
    MonitorHeartRateComponent,
    MonitorSpo2Component,
    MonitorBreathingRateComponent,
    MonitorTemperatureComponent,
    PatientHistoryComponent,
    PatientReleaseComponent,
    NewSensorComponent,
    SetDefaultHospitalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    ChartsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    HttpClientModule,
  ]
})
export class DefaultModule { }
