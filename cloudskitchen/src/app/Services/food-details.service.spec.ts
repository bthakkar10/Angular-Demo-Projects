import { TestBed } from '@angular/core/testing';

import { FoodDetailsService } from './food-details.service';

describe('OrderDetailsService', () => {
  let service: FoodDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
