import {TestBed} from '@angular/core/testing';

import {ReleasesServiceService} from './releases-service.service';

describe('ReleasesServiceService', () => {
  let service: ReleasesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReleasesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
