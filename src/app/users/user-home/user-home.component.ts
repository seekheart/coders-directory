import { Component, OnInit } from '@angular/core';
import { User } from '@coder/shared/models/user.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '@coder/core/user.service';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  users$: Observable<User[]>;
  userSelected = false;

  constructor(protected userService: UserService, protected router: Router) {
  }

  ngOnInit() {
    this.users$ = this.userService.findAll();
  }

  onViewProfile(id: number): void {
    this.userSelected = true;
    this.router.navigateByUrl(`/users/${id}`);
  }
}
