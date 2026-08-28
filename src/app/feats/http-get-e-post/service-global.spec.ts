import { TestBed } from '@angular/core/testing';

import { ServiceGlobal } from './service-global';

describe('ServiceGlobal', () => {
  let service: ServiceGlobal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGlobal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
