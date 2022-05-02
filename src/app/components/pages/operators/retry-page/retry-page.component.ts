import { Component, OnInit } from '@angular/core';
import { RelatedItem, User } from '@app/models';
import { BrokenApiService } from '@app/services';
import { delayWhen, Observable, retry, retryWhen, timer } from 'rxjs';

@Component({
  selector: 'app-retry-page',
  templateUrl: './retry-page.component.html',
  styleUrls: ['./retry-page.component.css'],
})
export class RetryPageComponent implements OnInit {
  title: string = 'retry & retryWhen';
  text: string = 'As you can think: a fanciful retry logic!';
  relatedItems: RelatedItem[] = [
    {
      url: 'https://rxjs.dev/api/operators/repeat',
      name: 'repeat',
    },
    {
      url: 'https://rxjs.dev/api/operators/repeatWhen',
      name: 'repeatWhen',
    },
    {
      url: 'https://rxjs.dev/api/operators/delayWhen',
      name: 'delayWhen',
    },
    {
      url: 'https://rxjs.dev/api/operators/delay',
      name: 'delay',
    },
    {
      url: 'https://rxjs.dev/api/index/function/timer',
      name: 'timer',
    },
  ];

  private readonly timeout: number = 1000;

  users$: Observable<User[]> = this.api
    .getUsers()
    .pipe(
      retryWhen((errors) => errors.pipe(delayWhen(() => timer(this.timeout))))
    ); // * retry vs retryWhen

  constructor(private api: BrokenApiService) {}

  ngOnInit(): void {}
}
