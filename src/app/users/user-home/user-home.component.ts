import { Component, OnInit } from '@angular/core';
import { User } from '@coder/shared/models/user';
import { Observable } from 'rxjs';
import { UserService } from '@coder/core/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(protected userService: UserService, protected router: Router) {
  }

  ngOnInit() {
    this.users$ = this.userService.findAll();
  }

  onViewProfile(id: number): void {
    this.router.navigateByUrl(`/users/${id}`);
  }
}
