import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(public userService: UserService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.userService.getAccessToken();

    if (!token) {
      return next.handle(request);
    }

    const req = request.clone({
      setHeaders: {
        authorization: `Bearer ${token}`
      }
    });

    return next.handle(req);
  }

}
