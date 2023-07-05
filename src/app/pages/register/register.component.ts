import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly titleService: Title,
    private metaTagService: Meta
  ) {
    this.titleService.setTitle('Parclick | Registro');
    this.metaTagService.updateTag({ name: 'description', content: 'Parclick Shop Registro' });
    this.form = new FormGroup({
      name: new FormControl<string | null>(
        null,
        [Validators.required]
      ),
      email: new FormControl<string | null>(
        null,
        {
          validators: [Validators.required, Validators.email],
          // asyncValidators: [this.userService.uniqueEmailValidator()]
        }
      ),
      password: new FormControl<string | null>(
        null,
        {
          validators: [Validators.required, Validators.minLength(6)],
          updateOn: 'change'
        },
      ),
      avatar: new FormControl<string | null>('api.lorem.space/image/face?w=150&h=150')
    });
  }

  register() {
    this.userService.register(this.form.value)
      .pipe(
        take(1)
      )
      .subscribe({
        next: (value: User) => {
          this.router.navigate(['login']);
        },
        error(err) {
        },
      });
  }
}
