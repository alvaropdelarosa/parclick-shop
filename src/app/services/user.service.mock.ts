import { Observable, ReplaySubject, of } from "rxjs";
import { createTokenFixture, createUserFixture } from "../models/fixture";
import { User } from "../models/user.model";

export class UserServiceMock {
  private baseUrl!: string;
  private currentUser: User | null = null;
  access_token: string | null = null;
  refresh_token: string | null = null;
  user: ReplaySubject<User | null> = new ReplaySubject<User | null>();

  constructor() {
    this.baseUrl = "https://api.escuelajs.co/api/v1/";
    this.user.next(createUserFixture());
    this.currentUser = createUserFixture();
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  login() {
    return of(createTokenFixture());
  }

  getUserByToken(): Observable<User> {
    return of(createUserFixture());
  }

  register(): Observable<User> {
    return of(createUserFixture());
  }

  clear(): void {
    this.user.next(null);
    this.access_token = null;
    this.refresh_token = null;
    this.currentUser = null;
  }
}
