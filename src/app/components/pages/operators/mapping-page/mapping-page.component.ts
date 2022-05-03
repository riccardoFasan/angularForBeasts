import { Component } from '@angular/core';
import { Post, RelatedItem, User } from '@app/models';
import { ApiService } from '@app/services';
import {
  concatMap,
  exhaustMap,
  mergeMap,
  forkJoin,
  map,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-mapping-page',
  templateUrl: './mapping-page.component.html',
  styleUrls: ['./mapping-page.component.css'],
})
export class MappingPageComponent {
  title: string = 'Higher order mapping';
  text: string =
    'Higher order mapping operators transform each emitted value to an observable. These operators are a solution to avoid nested subscriptions.';
  relatedItems: RelatedItem[] = [
    {
      url: 'https://www.learnrxjs.io/learn-rxjs/operators/transformation/exhaustmap',
      name: 'exhaustMap',
    },
    {
      url: 'https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmapto',
      name: 'switchMapTo',
    },
    {
      url: 'https://www.learnrxjs.io/learn-rxjs/operators/transformation/concatmapto',
      name: 'concatMapTo',
    },
    {
      url: 'https://www.learnrxjs.io/learn-rxjs/operators/transformation/scan',
      name: 'scan',
    },
    {
      url: 'https://www.learnrxjs.io/learn-rxjs/operators/transformation/buffertime',
      name: 'bufferTime',
    },
    {
      url: 'https://www.learnrxjs.io/learn-rxjs/operators/transformation/reduce',
      name: 'reduce',
    },
  ];

  users$: Observable<User[]> = this.api.getUsers();

  userId$: Subject<number> = new Subject<number>();

  selected$: Observable<any> = this.userId$.pipe(
    switchMap(
      (
        userId // * switchMap vs mergeMap vs concatMap vs exhaustMap
      ) =>
        this.api
          .getUser(userId)
          .pipe(switchMap((user) => this.mapUserWithPosts(user)))
    )
  );

  constructor(private api: ApiService) {}

  selectUser(query: string): void {
    if (!isNaN(parseInt(query))) {
      this.userId$.next(parseInt(query));
    }
  }

  private mapUserWithPosts(user: User): Observable<any> {
    return this.api.getPostsOfUser(user.id).pipe(
      switchMap((posts) => this.mapPostsWithComments(posts)),
      map((posts) => ({ ...user, posts: posts }))
    );
  }

  private mapPostsWithComments(posts: Post[]): Observable<any> {
    return forkJoin(
      posts.map((post) =>
        this.api
          .getCommentsOfPost(post.id)
          .pipe(map((comments) => ({ ...post, comments })))
      )
    );
  }
}
