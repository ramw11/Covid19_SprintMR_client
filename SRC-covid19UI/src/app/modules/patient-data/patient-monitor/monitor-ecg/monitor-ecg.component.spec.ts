import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorECGComponent } from './monitor-ecg.component';

describe('MonitorECGComponent', () => {
  let component: MonitorECGComponent;
  let fixture: ComponentFixture<MonitorECGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorECGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorECGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
