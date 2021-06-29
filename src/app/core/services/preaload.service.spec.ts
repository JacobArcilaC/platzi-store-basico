import { TestBed } from '@angular/core/testing';

import { PrealoadService } from './preaload.service';

describe('PrealoadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrealoadService = TestBed.get(PrealoadService);
    expect(service).toBeTruthy();
  });
});
