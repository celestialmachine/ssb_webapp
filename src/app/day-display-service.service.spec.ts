import { TestBed } from '@angular/core/testing';

import { DayDisplayServiceService } from './day-display-service.service';

describe('DayDisplayServiceService', () => {
  let service: DayDisplayServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayDisplayServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
