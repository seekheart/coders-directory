import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@coder/shared/models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, flatMap, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  protected dataUrl = 'assets/mock-data/coders.json';
  private data$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users$: Observable<User[]>;

  constructor(protected http: HttpClient) {
    this.findAll().subscribe(users => this.data$.next(users));
    this.users$ = this.data$.asObservable();
  }

  private findAll(): Observable<User[]> {
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

  addNewUser(user: User): void {
    this.findAll().pipe(
      map((users: User[]) => [...users, user]),
      map((users: User[]) => Array.from(new Set(users))),
      tap(users => this.data$.next(users))
    ).subscribe();
  }
}
