import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private readonly router: Router,
    private readonly titleService: Title,
    private metaTagService: Meta
  ) {
    this.titleService.setTitle('Parclick | Login');
    this.metaTagService.updateTag({ name: 'description', content: 'Parclick Shop Login' });
  }

  onLoginSuccess() {
    this.router.navigate(['']);
  }
}
