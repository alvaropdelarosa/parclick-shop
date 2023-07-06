import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard {

  constructor(
    public auth: UserService,
    public router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return new Observable<boolean>(obs => {
      this.auth.user
        .subscribe({
          next: (value) => {
            if (!value) {
              return obs.next(false);
            }

            if (value.role !== 'admin') {
              this.router.navigate(['']);
              return obs.next(false);
            }
            obs.next(true);
          },
          error: (err) => {
            this.router.navigate(['']);
            obs.next(false);
          }
        });
    });
  }

}
