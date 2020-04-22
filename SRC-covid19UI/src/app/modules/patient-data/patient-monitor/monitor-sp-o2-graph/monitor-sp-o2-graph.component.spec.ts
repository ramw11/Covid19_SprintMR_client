import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorSpO2GraphComponent } from './monitor-sp-o2-graph.component';

describe('MonitorSpO2GraphComponent', () => {
  let component: MonitorSpO2GraphComponent;
  let fixture: ComponentFixture<MonitorSpO2GraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorSpO2GraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorSpO2GraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
