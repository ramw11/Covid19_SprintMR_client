import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorBpComponent } from './monitor-bp.component';

describe('MonitorBpComponent', () => {
  let component: MonitorBpComponent;
  let fixture: ComponentFixture<MonitorBpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorBpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorBpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
