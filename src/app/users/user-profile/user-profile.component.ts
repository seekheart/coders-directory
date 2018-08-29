import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { UserService } from '@coder/core/user.service';
import { User } from '@coder/shared/models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User;

  constructor(protected userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.pipe(
      map(p => +p['id']),
      mergeMap(id => {
        return this.userService.findById(id);
      })
    ).subscribe(result => this.user = result);
  }

}
