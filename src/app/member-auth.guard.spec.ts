import { TestBed } from '@angular/core/testing';

import { MemberAuthGuard } from './member-auth.guard';

describe('MemberAuthGuard', () => {
  let guard: MemberAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MemberAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
