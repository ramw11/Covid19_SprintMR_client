import { MONITOR_PATIENT } from './../patient-monitor.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor-bp',
  templateUrl: './monitor-bp.component.html',
  styleUrls: ['./monitor-bp.component.scss']
})
export class MonitorBpComponent implements OnInit {

  bp_h;
  bp_l;
  timer: any;

  constructor() { }

  ngOnInit() {
    this.timer = setInterval(() => {
      let bp_h_tmp = MONITOR_PATIENT.Bp_h.val+'';
      let bp_l_tmp = MONITOR_PATIENT.Bp_l.val+'';
      this.bp_h = bp_h_tmp.substring(0, Math.min(5, bp_h_tmp.length));
      this.bp_l = bp_l_tmp.substring(0, Math.min(5, bp_l_tmp.length));
    }, 1000 * 0.5)
  }

}
