import { TestBed } from '@angular/core/testing';

import { HttpAuthenticationService } from './http-authentication.service';

describe('HttpAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpAuthenticationService = TestBed.get(HttpAuthenticationService);
    expect(service).toBeTruthy();
  });
});
