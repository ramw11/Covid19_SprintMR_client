import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorBreathingRateComponent } from './monitor-breathing-rate.component';

describe('MonitorBreathingRateComponent', () => {
  let component: MonitorBreathingRateComponent;
  let fixture: ComponentFixture<MonitorBreathingRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorBreathingRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorBreathingRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
