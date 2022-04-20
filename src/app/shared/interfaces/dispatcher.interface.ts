import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, User } from '../models';

export interface Dispatcher {
  getUsers(): Observable<User[]>;
  getPosts(): Observable<Post[]>;
}

export const DISPATCHER: InjectionToken<Dispatcher> =
  new InjectionToken<Dispatcher>('DISPATCHER');
