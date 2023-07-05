import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { take, switchMap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  form: FormGroup;
  hasError = false;

  @Output() onError: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() success: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private readonly userService: UserService
  ) {
    this.form = new FormGroup({
      email: new FormControl<string | null>(null),
      password: new FormControl<string | null>(null)
    });
  }

  login() {
    this.userService.login(this.form.value)
      .pipe(
        take(1),
        switchMap((loginResponse, index) => this.userService.getUserByToken())
      )
      .subscribe({
        next: (value) => {
          this.hasError = false;
          this.success.emit();
        },
        error: (err) => {
          this.hasError = true;
        },
      });
  }
}
