import { TestBed } from '@angular/core/testing';

import { EsxpService } from './esxp.service';

describe('EsxpService', () => {
  let service: EsxpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsxpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
