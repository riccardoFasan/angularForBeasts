import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, User, Comment } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }

  getPostsOfUser(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
  }

  getCommentsOfPost(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
  }
}
