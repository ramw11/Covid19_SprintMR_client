import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorHeartRateComponent } from './monitor-heart-rate.component';

describe('MonitorHeartRateComponent', () => {
  let component: MonitorHeartRateComponent;
  let fixture: ComponentFixture<MonitorHeartRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorHeartRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorHeartRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
