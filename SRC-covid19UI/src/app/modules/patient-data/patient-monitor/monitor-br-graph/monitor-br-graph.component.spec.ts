import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorBRGraphComponent } from './monitor-br-graph.component';

describe('MonitorBRGraphComponent', () => {
  let component: MonitorBRGraphComponent;
  let fixture: ComponentFixture<MonitorBRGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorBRGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorBRGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
