import { TestBed } from '@angular/core/testing';

import { StrapiConnectorService } from './strapi-connector.service';

describe('AirtableConnectorService', () => {
  let service: StrapiConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrapiConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
