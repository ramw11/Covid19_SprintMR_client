import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDefaultHospitalComponent } from './set-default-hospital.component';

describe('SetDefaultHospitalComponent', () => {
  let component: SetDefaultHospitalComponent;
  let fixture: ComponentFixture<SetDefaultHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDefaultHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDefaultHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
