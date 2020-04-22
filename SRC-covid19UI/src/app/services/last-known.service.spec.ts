import { TestBed } from '@angular/core/testing';

import { LastKnownService } from './last-known.service';

describe('LastKnownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LastKnownService = TestBed.get(LastKnownService);
    expect(service).toBeTruthy();
  });
});
