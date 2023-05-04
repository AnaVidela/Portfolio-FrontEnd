import { TestBed } from '@angular/core/testing';

import { ProyService } from './proy.service';

describe('ProyService', () => {
  let service: ProyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
