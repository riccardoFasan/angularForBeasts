import { Component, OnInit } from '@angular/core';
import { RelatedItem } from '@app/models';

@Component({
  selector: 'app-mapping-page',
  templateUrl: './mapping-page.component.html',
  styleUrls: ['./mapping-page.component.css'],
})
export class MappingPageComponent implements OnInit {
  title: string = 'Higher order mapping';
  text: string = 'Transform your streams into other streams.';
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
  constructor() {}

  ngOnInit(): void {}
}
