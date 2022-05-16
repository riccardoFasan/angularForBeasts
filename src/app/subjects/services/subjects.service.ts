import { Injectable } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  subject$: Observable<number> = new Subject<number>();
  behaviorSubject$: Observable<number> = new BehaviorSubject<number>(0);
  replaySubject$: Observable<number> = new ReplaySubject<number>();
  asyncSubject$: Observable<number> = new AsyncSubject<number>();
}
