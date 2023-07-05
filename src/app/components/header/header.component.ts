import { Category } from 'src/app/models';
import { LoadingService } from './../../services/loading.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loading = false;
  dropdownVisible = false;
  sideNavVisible = false;
  categories!: Category[];
  user: User | null = null;

  constructor(
    private readonly loadingService: LoadingService,
    private readonly categoryService: CategoryService,
    private readonly userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadingService.loading.subscribe((value) => {
      if (value) {
        this.loading = true;
      } else {
        this.loading = false;
      }
    });
    this.categoryService.categories.subscribe((value) => {
      this.categories = value
    });
    this.userService.user.subscribe((value) => {
      if (value) {
        this.user = value;
      }
    });
  }

  userIsAdmin() {
    return this.user && this.user.role === 'admin';
  }

  onUserClick() {
    this.sideNavVisible = false;
    this.dropdownVisible = false;

    if (!this.user) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['user']);
    }
  }
}
