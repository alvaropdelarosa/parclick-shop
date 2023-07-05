import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-redirector',
  templateUrl: './error-redirector.component.html',
  styleUrls: ['./error-redirector.component.scss']
})
export class ErrorRedirectorComponent implements OnInit {
  @Input() visible!: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['']);
    }, 5000);
  }
}
