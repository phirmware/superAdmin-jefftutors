import { TestBed } from '@angular/core/testing';

import { DetailsService } from './details.service';

describe('DetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailsService = TestBed.get(DetailsService);
    expect(service).toBeTruthy();
  });
});
