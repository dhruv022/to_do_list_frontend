import { TestBed } from '@angular/core/testing';

import { RestrictLoginGuard } from './restrict-login.guard';

describe('RestrictLoginGuard', () => {
  let guard: RestrictLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RestrictLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
