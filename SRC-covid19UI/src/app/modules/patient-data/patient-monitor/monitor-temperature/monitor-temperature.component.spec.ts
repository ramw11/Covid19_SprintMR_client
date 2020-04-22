import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorTemperatureComponent } from './monitor-temperature.component';

describe('MonitorTemperatureComponent', () => {
  let component: MonitorTemperatureComponent;
  let fixture: ComponentFixture<MonitorTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorTemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
