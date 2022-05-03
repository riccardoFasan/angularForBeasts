import { Component } from '@angular/core';
import { SubjectType } from '@app/enums';
import { SubjectsService } from '@app/services';
import {
  AsyncSubject,
  BehaviorSubject,
  interval,
  Observable,
  ReplaySubject,
  Subject,
  take,
  takeUntil,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-subjects-page',
  templateUrl: './subjects-page.component.html',
  styleUrls: ['./subjects-page.component.css'],
})
export class SubjectsPageComponent {
  subjects: { title: string; type: SubjectType }[] = [
    { title: 'Subject', type: SubjectType.Subject },
    { title: 'BehaviorSubject', type: SubjectType.BehaviorSubject },
    { title: 'ReplaySubject', type: SubjectType.ReplaySubject },
    { title: 'AsyncSubject', type: SubjectType.AsyncSubject },
  ];

  private isCompleted$: Subject<boolean> = new Subject<boolean>();

  stream$: Observable<number> = interval(2500).pipe(
    take(16),
    takeUntil(this.isCompleted$),
    tap((value) => {
      (this.subjets.subject$ as Subject<number>).next(value);
      (this.subjets.behaviorSubject$ as BehaviorSubject<number>).next(value);
      (this.subjets.replaySubject$ as ReplaySubject<number>).next(value);
      (this.subjets.asyncSubject$ as AsyncSubject<number>).next(value);
    })
  );

  constructor(private subjets: SubjectsService) {}

  complete(): void {
    this.isCompleted$.next(true);
    (this.subjets.subject$ as Subject<number>).complete();
    (this.subjets.behaviorSubject$ as BehaviorSubject<number>).complete();
    (this.subjets.replaySubject$ as ReplaySubject<number>).complete();
    (this.subjets.asyncSubject$ as AsyncSubject<number>).complete();
  }
}
