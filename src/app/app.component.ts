import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { Post, User } from './shared/models';
import { SubSink } from 'subsink';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  users: User[] = [];
  posts: Post[] = [];

  private subscriptions: SubSink = new SubSink();

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    const requests: Observable<any>[] = [
      this.api.getUsers(),
      this.api.getPosts(),
    ];

    this.subscriptions.add(
      forkJoin(requests).subscribe(([users, posts]) => {
        this.users = users;
        this.posts = posts;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
