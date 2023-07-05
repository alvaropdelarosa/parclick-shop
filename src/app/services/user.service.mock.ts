import { Observable, ReplaySubject, of } from "rxjs";
import { createTokenFixture, createUserFixture } from "../models/fixture";
import { User } from "../models/user.model";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { loginDTO } from "../models";

export class UserServiceMock {
  private baseUrl!: string;
  currentUser: User | null = null;
  user: ReplaySubject<User | null> = new ReplaySubject<User | null>();

  constructor() {
    this.baseUrl = "https://api.escuelajs.co/api/v1/";
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  login() {
    return of(createTokenFixture());
  }

  getUserByToken(): Observable<User | null> {

    return of(createUserFixture());
  }

  setUser(user: User) {
    this.currentUser = user;
    this.user.next(user);
  }

  register(): Observable<User> {
    return of(createUserFixture());
  }

  clear(): void {
    this.user.next(null);
    this.currentUser = null;
  }
}
