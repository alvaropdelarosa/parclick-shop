import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { first, of } from 'rxjs';
import { createUserFixture } from '../models/fixture';
import { CreateUserDTO } from '../models';
import { CookieService } from 'ngx-cookie-service';

describe('UserService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: UserService;
  let cookieService: CookieService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    cookieService = TestBed.inject(CookieService);
    service = new UserService(httpClientSpy, cookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login', (done: DoneFn) => {
    const expected = {
      access_token: 'test',
      refresh_token: 'test'
    };

    httpClientSpy.post.and.returnValue(of(expected));

    service.login({
      email: 'test',
      password: 'test'
    }).subscribe({
      next: response => {
        expect(response)
          .withContext('expected response')
          .toEqual(expected);
        done();
      },
      error: done.fail
    });

    expect(httpClientSpy.post.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  it('should get user by token', (done: DoneFn) => {
    service.cookieService.set('access_token', 'test');

    const expected = createUserFixture();

    httpClientSpy.get.and.returnValue(of(expected));

    service.getUserByToken().subscribe({
      next: response => {
        expect(response)
          .withContext('expected response')
          .toEqual(expected);
        done();
      },
      error: done.fail
    });

    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  it('should set user', () => {
    const user = createUserFixture();

    service.setUser(user);

    expect(service.currentUser).toBeDefined();
    expect(service.currentUser?.id).toEqual(user.id);

    service.user.pipe(
      first()
    ).subscribe((value) => {
      expect(value).toBeDefined();
      expect(value?.id).toEqual(user.id);
    });
  });

  it('should register', (done: DoneFn) => {
    const expected = createUserFixture();
    const registerBody: CreateUserDTO = {
      name: 'test',
      email: 'test',
      password: 'test',
      avatar: 'test'
    };

    httpClientSpy.post.and.returnValue(of(expected));

    service.register(registerBody).subscribe({
      next: response => {
        expect(response)
          .withContext('expected response')
          .toEqual(expected);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.post.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  it('should be authenticated', () => {
    service.currentUser = createUserFixture();

    expect(service.isAuthenticated()).toBeTruthy();
  });

  it('should NOT be authenticated', () => {
    service.clear();

    expect(service.isAuthenticated()).toBeFalsy();
  });

  it('should not return token', (done: DoneFn) => {
    const expected = null;

    httpClientSpy.get.and.returnValue(of(expected));

    service.getUserByToken().subscribe({
      next: response => {
        expect(response).toBeNull();
        done();
      },
      error: done.fail
    });
  });
});

