import { TestBed, inject } from '@angular/core/testing';

import { MenuRestaurantService } from './menu-restaurant.service';

describe('MenuRestaurantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuRestaurantService]
    });
  });

  it('should ...', inject([MenuRestaurantService], (service: MenuRestaurantService) => {
    expect(service).toBeTruthy();
  }));
});
