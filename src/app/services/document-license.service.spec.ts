import { TestBed } from '@angular/core/testing';

import { DocumentLicenseService } from './document-license.service';

describe('DocumentLicenseService', () => {
  let service: DocumentLicenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentLicenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
