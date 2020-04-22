import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorSpo2Component } from './monitor-spo2.component';

describe('MonitorSpo2Component', () => {
  let component: MonitorSpo2Component;
  let fixture: ComponentFixture<MonitorSpo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorSpo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorSpo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
