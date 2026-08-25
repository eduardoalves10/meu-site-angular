import { TestBed } from '@angular/core/testing';

import { ExemploPutService } from './exemplo-put-service';

describe('ExemploPutService', () => {
  let service: ExemploPutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExemploPutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
