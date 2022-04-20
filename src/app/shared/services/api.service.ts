import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dispatcher, DISPATCHER } from '../interfaces/dispatcher.interface';
import { Post, User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(@Inject(DISPATCHER) private dispatcher: Dispatcher) {}

  getUsers(): Observable<User[]> {
    return this.dispatcher.getUsers();
  }

  getPosts(): Observable<Post[]> {
    return this.dispatcher.getPosts();
  }
}
