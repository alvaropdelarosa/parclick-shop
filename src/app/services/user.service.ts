import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Observable, ReplaySubject, catchError, map, of, take } from 'rxjs';
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { CreateUserDTO, loginDTO } from '../models';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl!: string;
  currentUser: User | null = null;
  user: ReplaySubject<User | null> = new ReplaySubject<User | null>();

  constructor(
    private http: HttpClient,
    public cookieService: CookieService
  ) {
    this.baseUrl = environment.baseUrl;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  login(loginDto: loginDTO) {
    return this.http.post(`${this.baseUrl}auth/login`, loginDto)
      .pipe(
        take(1),
        map((value: any) => {
          this.cookieService.set('access_token', value.access_token);
          this.cookieService.set('refresh_token', value.refresh_token);

          return value;
        }),
        catchError((err: any) => {
          this.clear();
          return of();
        })
      );
  }

  getUserByToken(): Observable<User | null> {
    const token = this.cookieService.get('access_token');

    if (!token) {
      return of(null);
    }

    const headers: HttpHeaders = new HttpHeaders({
      "Authorization": `Bearer ${token}`
    });

    return this.http.get<User>(`${this.baseUrl}auth/profile`, {
      headers
    });
  }

  getAccessToken(): string {
    return this.cookieService.get('access_token');
  }

  getRefreshToken(): string {
    return this.cookieService.get('refresh_token');
  }

  setUser(user: User) {
    this.currentUser = user;
    this.user.next(user);
  }

  register(userDto: CreateUserDTO): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}users`, userDto);
  }

  clear(): void {
    this.user.next(null);
    this.cookieService.deleteAll();
    this.currentUser = null;
  }

  // uniqueEmailValidator(): AsyncValidatorFn {
  //   return (control: AbstractControl): Observable<ValidationErrors | null> => {


  //     return this.checkEmail(control.value)
  //       .pipe(
  //         map((check) => {
  //           return (check?.isAvailable)
  //             ? null
  //             : { emailExists: true };
  //         })
  //       );
  //   };
  // }

  // private checkEmail(email: string): Observable<{ isAvailable: boolean } | null> {
  //   return this.http.post<{ isAvailable: boolean }>(`${this.baseUrl}users/is-available`, { email });
  // }
}
