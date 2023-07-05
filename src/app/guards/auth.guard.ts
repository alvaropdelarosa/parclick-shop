import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { createUserFixture } from '../models/fixture';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    public auth: UserService,
    public router: Router
  ) { }

  canActivate(): boolean {
    const logged = this.auth.isAuthenticated();

    if (!logged) {
      this.router.navigate(['login']);
      alert('Por favor, inice sesión');
      return false;
    }

    return true;
  }
}
