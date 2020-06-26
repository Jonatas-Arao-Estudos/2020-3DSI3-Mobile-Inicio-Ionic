import { TestBed } from '@angular/core/testing';

import { PesoIdealService } from './peso-ideal.service';

describe('PesoIdealService', () => {
  let service: PesoIdealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesoIdealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
