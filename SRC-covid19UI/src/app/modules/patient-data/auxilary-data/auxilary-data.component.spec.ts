import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxilaryDataComponent } from './auxilary-data.component';

describe('AuxilaryDataComponent', () => {
  let component: AuxilaryDataComponent;
  let fixture: ComponentFixture<AuxilaryDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxilaryDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxilaryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
