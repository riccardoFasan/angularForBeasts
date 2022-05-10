import { Component, OnDestroy, OnInit } from '@angular/core';
import { RelatedItem } from '@app/models';
import { combineLatest, forkJoin, Observable, Subject, tap, zip } from 'rxjs';
import { SubSink } from 'subsink';
@Component({
  selector: 'app-combination-page',
  templateUrl: './combination-page.component.html',
  styleUrls: ['./combination-page.component.css'],
})
export class CombinationPageComponent implements OnInit, OnDestroy {
  title: string = 'Combination operators';
  text: string =
    'Combination operators allow you to merge streams like the Ghostbusters!';

  relatedItems: RelatedItem[] = [
    {
      name: 'withLatestFrom',
      url: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/withlatestfrom',
    },
    {
      name: 'pairwise',
      url: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/pairwise',
    },
    {
      name: 'race',
      url: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/race',
    },
    {
      name: 'combineAll',
      url: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/combineall',
    },
    {
      name: 'concat',
      url: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/concat',
    },
    {
      name: 'concatAll',
      url: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/concatall',
    },
  ];

  stream1$: Subject<number> = new Subject<number>();
  stream2$: Subject<number> = new Subject<number>();

  zipCounter: number = 0;
  combineLatestCounter: number = 0;
  forkJoinCounter: number = 0;

  private steams: Subject<number>[] = [this.stream1$, this.stream2$];

  private combineLastest$: Observable<number[]> = combineLatest(
    this.steams
  ).pipe(tap(() => this.combineLatestCounter++));

  private zip$: Observable<number[]> = zip(...this.steams).pipe(
    tap(() => this.zipCounter++)
  );

  private forkJoin$: Observable<number[]> = forkJoin(this.steams).pipe(
    tap(() => this.forkJoinCounter++)
  );

  private operators$: Observable<number[][]> = combineLatest([
    this.zip$,
    this.combineLastest$,
    this.forkJoin$,
  ]);

  private subsink: SubSink = new SubSink();

  ngOnInit(): void {
    this.subsink.sink = this.operators$.subscribe();
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }

  complete(): void {
    this.stream1$.complete();
    this.stream2$.complete();
  }
}
