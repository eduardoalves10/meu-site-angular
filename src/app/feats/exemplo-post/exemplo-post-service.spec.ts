import { TestBed } from '@angular/core/testing';

import { ExemploPostService } from './exemplo-post-service';

describe('ExemploPostService', () => {
  let service: ExemploPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExemploPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
