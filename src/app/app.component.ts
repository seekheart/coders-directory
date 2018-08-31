import { Component } from '@angular/core';
import { NavItem } from '@coder/shared/models/nav-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: NavItem[] = [
    {name: 'users', link: '/users'},
    {name: 'languages', link: '/languages'},
  ];
}
