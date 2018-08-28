import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@coder/shared/models/user.model';
import { Observable } from 'rxjs';
import { filter, flatMap } from 'rxjs/operators';

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

  findById(id: number): Observable<User> {
    return this.http.get<User[]>(this.dataUrl).pipe(
      flatMap(user => user),
      filter((user: User) => {
        return user.id === id;
      })
    );
  }
}
