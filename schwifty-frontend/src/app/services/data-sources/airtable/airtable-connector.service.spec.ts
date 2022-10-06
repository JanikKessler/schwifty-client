import { TestBed } from '@angular/core/testing';

import { AirtableConnectorService } from './airtable-connector.service';

describe('AirtableConnectorService', () => {
  let service: AirtableConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirtableConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
