import { TestBed, inject } from '@angular/core/testing';

import { LunchApiService } from './lunch-api.service';

describe('LunchApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LunchApiService]
    });
  });

  it('should be created', inject([LunchApiService], (service: LunchApiService) => {
    expect(service).toBeTruthy();
  }));
});
