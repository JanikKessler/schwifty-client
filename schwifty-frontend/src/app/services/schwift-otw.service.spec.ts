import {TestBed} from '@angular/core/testing';

import {SchwiftOtwService} from './schwift-otw.service';

describe('SchwiftOtwService', () => {
  let service: SchwiftOtwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchwiftOtwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
