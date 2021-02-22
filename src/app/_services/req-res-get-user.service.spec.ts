import { TestBed } from '@angular/core/testing';

import { ReqResGetUserService } from './req-res-get-user.service';

describe('ReqResGetUserService', () => {
  let service: ReqResGetUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqResGetUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
