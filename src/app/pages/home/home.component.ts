import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchValue!: string;

  constructor(private router: Router,
    private readonly titleService: Title,
    private metaTagService: Meta
  ) {
    this.titleService.setTitle('Parclick Shop');
    this.metaTagService.updateTag({ name: 'description', content: 'Tienda online Parclick Shop' });
  }

  search() {
    this.router.navigate(['/products'], {
      queryParams: {
        title: this.searchValue
      }
    })
  }
}
