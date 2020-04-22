import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientReleaseComponent } from './patient-release.component';

describe('PatientReleaseComponent', () => {
  let component: PatientReleaseComponent;
  let fixture: ComponentFixture<PatientReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
