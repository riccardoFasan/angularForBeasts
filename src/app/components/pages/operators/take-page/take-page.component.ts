import { Component } from '@angular/core';
import { RelatedItem } from '@app/models';
import { interval, Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-page',
  templateUrl: './take-page.component.html',
  styleUrls: ['./take-page.component.css'],
})
export class TakePageComponent {
  title: string = 'take, takeUntil, takeWhat?';
  text: string = 'Unsubscribe your stream, whithout calling .usubscribe().';
  relatedItems: RelatedItem[] = [
    { url: 'https://rxjs.dev/api/operators/takeWhile', name: 'takeWhile' },
    {
      url: 'https://www.learnrxjs.io/learn-rxjs/operators/filtering/skip',
      name: 'skip',
    },
  ];

  private readonly interval: number = 1000;

  stopped$: Subject<boolean> = new Subject<boolean>();
  timer$: Observable<number> = interval(this.interval).pipe(
    takeUntil(this.stopped$)
  ); // * take vs takeUntil vs takeWhile

  stop(): void {
    this.stopped$.next(true);
  }
}
