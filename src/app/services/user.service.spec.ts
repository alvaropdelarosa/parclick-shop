import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { createUserFixture } from '../models/fixture';
import { CreateUserDTO } from '../models';

describe('UserService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: UserService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new UserService(httpClientSpy);
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

  it('should NOT get user by token', () => {
    const expected = new Error('Test error');

    httpClientSpy.get.and.returnValue(of(expected));

    service.getUserByToken().subscribe({
      next: (value) => { },
      error: (err) => {
      }
    });
  });

  it('should be authenticated', () => {
    service.currentUser = createUserFixture();

    expect(service.isAuthenticated()).toBeTruthy();
  });

  it('should NOT be authenticated', () => {
    service.clear();

    expect(service.isAuthenticated()).toBeFalsy();
  });
});

