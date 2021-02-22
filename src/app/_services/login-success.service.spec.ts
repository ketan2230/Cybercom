import { TestBed } from '@angular/core/testing';

import { LoginSuccessService } from './login-success.service';

describe('LoginSuccessService', () => {
  let service: LoginSuccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginSuccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
