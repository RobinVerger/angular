import { TestBed, inject } from '@angular/core/testing';

import { ServiceListService } from './service-list.service';

describe('ServiceListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceListService]
    });
  });

  it('should be created', inject([ServiceListService], (service: ServiceListService) => {
    expect(service).toBeTruthy();
  }));
});
