import { TestBed } from '@angular/core/testing';

import { IsAdminGuard } from './is-admin.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomHttpInterceptor } from '../interceptors/http.interceptor';
import { EmptyComponent } from '../testing/empty/empty.component';
import { EmptyComponentModule } from '../testing/empty/empty.module';
import { first } from 'rxjs';

describe('IsAdminGuard', () => {
  let guard: IsAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        EmptyComponentModule,
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: EmptyComponent
          }
        ])
      ],
      providers: [
        CustomHttpInterceptor,
      ]
    });
    guard = TestBed.inject(IsAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should activate', () => {

  });

  it('should not activate', () => {
    guard.auth.clear();
    guard.canActivate()
      .pipe(
        first()
      )
      .subscribe((value) => {
        expect(value).toBeFalsy();
      })
  });
});
