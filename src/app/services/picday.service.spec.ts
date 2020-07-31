import { TestBed } from '@angular/core/testing';

import { PicdayService } from './picday.service';

describe('PicdayService', () => {
  let service: PicdayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicdayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
