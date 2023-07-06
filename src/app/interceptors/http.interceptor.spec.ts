import { TestBed, fakeAsync } from '@angular/core/testing';

import { CustomHttpInterceptor } from './http.interceptor';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from '../services/user.service';
import { UserServiceMock } from '../services/user.service.mock';
import { Observable } from 'rxjs';
import { HTTP_INTERCEPTORS, HttpRequest } from '@angular/common/http';

describe('HttpInterceptor', () => {
  let interceptor: CustomHttpInterceptor;
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      CustomHttpInterceptor,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: CustomHttpInterceptor
      },
      {
        provide: UserService,
        useClass: UserServiceMock
      }
    ]
  }));

  beforeEach(() => {
    interceptor = TestBed.inject(CustomHttpInterceptor);
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
