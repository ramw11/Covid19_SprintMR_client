import { TestBed } from '@angular/core/testing';

import { CurrPersonService } from './curr-person.service';

describe('CurrPersonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrPersonService = TestBed.get(CurrPersonService);
    expect(service).toBeTruthy();
  });
});
