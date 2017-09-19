import { TestBed, inject } from '@angular/core/testing';

import { EnvironmentServiceService } from './environment-service.service';

describe('EnvironmentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnvironmentServiceService]
    });
  });

  it('should be created', inject([EnvironmentServiceService], (service: EnvironmentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
