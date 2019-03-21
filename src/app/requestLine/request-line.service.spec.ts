import { TestBed } from '@angular/core/testing';

import { RequestLineService } from './request-line.service';

describe('RequestLineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestLineService = TestBed.get(RequestLineService);
    expect(service).toBeTruthy();
  });
});
