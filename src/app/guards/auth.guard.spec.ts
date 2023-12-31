import { TestBed, fakeAsync } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../services/user.service';
import { UserServiceMock } from '../services/user.service.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { EmptyComponent } from '../testing/empty/empty.component';
import { EmptyComponentModule } from '../testing/empty/empty.module';
import { first } from 'rxjs';

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

  it('should be logged', fakeAsync(() => {
    guard.autoLogin()
      .pipe(
        first()
      )
      .subscribe((value) => {
        expect(value).toBeTruthy()
      });
  }));
});
