import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user!: User;

  constructor(
    private readonly userService: UserService,
    private readonly titleService: Title,
    private metaTagService: Meta
  ) {
    this.titleService.setTitle('Parclick | Perfil');
  }

  ngOnInit(): void {
    this.userService.user.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
  }
}
