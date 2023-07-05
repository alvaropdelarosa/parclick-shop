import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../services/user.service';
import { UserServiceMock } from '../services/user.service.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { EmptyComponent } from '../testing/empty/empty.component';
import { EmptyComponentModule } from '../testing/empty/empty.module';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        EmptyComponentModule,
        RouterTestingModule.withRoutes([
          {
            path: 'login',
            component: EmptyComponent
          }
        ])
      ],
      providers: [
        {
          provide: UserService,
          useClass: UserServiceMock
        },
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should not be logged', () => {
    guard.auth.clear();
    expect(guard.canActivate()).toBeFalsy();
  });

  it('should be logged', () => {
    guard.auth.getUserByToken();

    expect(guard.canActivate()).toBeTruthy();
  });
});
