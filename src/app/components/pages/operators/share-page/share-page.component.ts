import { Component } from '@angular/core';
import { RelatedItem, ToDo } from '@app/models';
import { ApiService } from '@app/services';
import { map, Observable, share } from 'rxjs';

@Component({
  selector: 'app-share-page',
  templateUrl: './share-page.component.html',
  styleUrls: ['./share-page.component.css'],
})
export class SharePageComponent {
  title: string = 'Hot and cold observables';
  text: string =
    'Observables are "cold" by default, multicasting operators can make them "hot", allowing side-effects sharing among subscribers.';
  relatedItems: RelatedItem[] = [
    {
      name: 'shareReplay',
      url: 'https://www.learnrxjs.io/learn-rxjs/operators/multicasting/sharereplay',
    },
    {
      name: 'publishReplay',
      url: 'https://rxjs.dev/api/operators/publishReplay',
    },
    {
      name: 'publish',
      url: 'https://www.learnrxjs.io/learn-rxjs/operators/multicasting/publish',
    },
    {
      name: 'multicast',
      url: 'https://www.learnrxjs.io/learn-rxjs/operators/multicasting/multicast',
    },
  ];

  todos$: Observable<ToDo[]> = this.api.geTodosOfUser(1).pipe(share());
  completedCount$: Observable<number> = this.todos$.pipe(
    map((todos) => todos.filter((todo) => todo.completed).length)
  );
  inProgressCount$: Observable<number> = this.todos$.pipe(
    map((todos) => todos.filter((todo) => !todo.completed).length)
  );

  constructor(private api: ApiService) {}
}
