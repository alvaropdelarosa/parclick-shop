import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { CategoryService } from './services/category.service';
import { User } from './models/user.model';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tokenError = false;

  constructor(
    private readonly userService: UserService,
    private readonly categoryService: CategoryService,
    private metaTagService: Meta,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content: 'Parclick Shop, Angular, SSR',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Álvaro Peña' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2023-07-05', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
      { name: 'description', content: 'Tienda online Parclick Shop' },
      { name: 'fragment', content: '!' }
    ]);

    this.titleService.setTitle('Parclick Shop');

    this.userService.getUserByToken().subscribe({
      next: (value: User | null) => {
        if (value) {
          this.userService.setUser(value);
        }
      }
    });

    this.categoryService.getAllCategories()
      .subscribe((value) => {
        this.categoryService.setCategories(value)
      });
  }
}
