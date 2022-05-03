import { Attribute, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SubjectType } from '@app/enums';
import { SubjectsService } from '@app/services';
import { Observable, tap } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.css'],
})
export class SubjectCardComponent implements OnInit, OnDestroy {
  @Input() title!: string;
  @Input() type!: SubjectType;

  values: number[] = [];

  private subject$!: Observable<number>;
  private subSink: SubSink = new SubSink();

  constructor(private subjects: SubjectsService) {}

  ngOnInit(): void {
    this.subject$ = this.observable$.pipe(
      tap((v) => (this.values = [...this.values, v]))
    );
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  start(): void {
    this.subSink.sink = this.subject$.subscribe();
  }

  private get observable$(): Observable<number> {
    if (this.type === SubjectType.Subject) return this.subjects.subject$;

    if (this.type === SubjectType.BehaviorSubject)
      return this.subjects.behaviorSubject$;

    if (this.type === SubjectType.ReplaySubject)
      return this.subjects.replaySubject$;

    return this.subjects.asyncSubject$;
  }
}
