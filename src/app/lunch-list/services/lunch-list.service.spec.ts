import { TestBed, inject } from '@angular/core/testing';

import { LunchListService } from './lunch-list.service';

describe('LunchListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LunchListService]
    });
  });

  it('should be created', inject([LunchListService], (service: LunchListService) => {
    expect(service).toBeTruthy();
  }));
});
