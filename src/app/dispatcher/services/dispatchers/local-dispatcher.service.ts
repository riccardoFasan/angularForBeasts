import { Injectable } from '@angular/core';
import { Dispatcher } from '@app/shared/interfaces/dispatcher.interface';
import { Post, User } from '@app/shared/models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalDispatcherService implements Dispatcher {
  private readonly posts: Post[] = [];
  private readonly users: User[] = [];

  getUsers(): Observable<any> {
    return of(this.users);
  }

  getPosts(): Observable<any> {
    return of(this.posts);
  }
}
