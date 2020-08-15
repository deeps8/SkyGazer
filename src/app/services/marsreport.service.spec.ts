import { TestBed } from '@angular/core/testing';

import { MarsreportService } from './marsreport.service';

describe('MarsreportService', () => {
  let service: MarsreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarsreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
