import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorBloodPressureComponent } from './monitor-blood-pressure.component';

describe('MonitorBloodPressureComponent', () => {
  let component: MonitorBloodPressureComponent;
  let fixture: ComponentFixture<MonitorBloodPressureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorBloodPressureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorBloodPressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
