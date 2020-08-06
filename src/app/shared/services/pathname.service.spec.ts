import { TestBed } from '@angular/core/testing';

import { PathnameService } from './pathname.service';

describe('PathnameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PathnameService = TestBed.get(PathnameService);
    expect(service).toBeTruthy();
  });
});
