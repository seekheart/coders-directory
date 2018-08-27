import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@coder/shared/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  protected dataUrl = 'assets/mock-data/coders.json';

  constructor(protected http: HttpClient) {
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.dataUrl);
  }
}
