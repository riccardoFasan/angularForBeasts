import { Component, OnInit } from '@angular/core';
import { RelatedItem } from '@app/models';

@Component({
  selector: 'app-share-page',
  templateUrl: './share-page.component.html',
  styleUrls: ['./share-page.component.css'],
})
export class SharePageComponent implements OnInit {
  title: string = 'share & shareReplay';
  text: string =
    'Observables are "cold" by default, multicasting operators can make them "hot", allowing side-effects sharing among subscribers.';
  relatedItems: RelatedItem[] = [
    {
      name: 'publish',
      url: 'https://www.learnrxjs.io/learn-rxjs/operators/multicasting/publish',
    },
    {
      name: 'multicast',
      url: 'https://www.learnrxjs.io/learn-rxjs/operators/multicasting/multicast',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
