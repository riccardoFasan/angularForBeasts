import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dispatcher } from '@app/shared/interfaces/dispatcher.interface';
import { Post, User } from '@app/shared/models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderDispatcher implements Dispatcher {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((response: any) => this.mapUsers(response)));
  }

  getPosts(): Observable<Post[]> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((response: any) => this.mapPosts(response)));
  }

  private mapUsers(data: any): User[] {
    return data.map((user: any) => ({
      id: user.id,
      firstname: user.name.split(' ')[0],
      lastname: user.name.split(' ')[1],
      username: user.username,
      email: user.email,
      phone: user.phone,
      website: user.website,
      companyName: user.company.name,
    }));
  }

  private mapPosts(data: any): Post[] {
    return data.map((post: any) => ({
      userId: post.userId,
      id: post.id,
      title: post.title,
      text: post.body,
    }));
  }
}
