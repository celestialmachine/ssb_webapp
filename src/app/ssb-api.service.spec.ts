import { TestBed } from '@angular/core/testing';

import { SsbApiService } from './ssb-api.service';

describe('SsbApiService', () => {
  let service: SsbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
