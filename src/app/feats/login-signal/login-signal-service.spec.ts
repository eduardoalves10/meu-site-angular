import { TestBed } from '@angular/core/testing';

import { LoginSignalService } from './login-signal-service';

describe('LoginSignalService', () => {
  let service: LoginSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
