import { Component, OnInit } from '@angular/core';
import { RelatedItem } from '@app/models';

@Component({
  selector: 'app-combination-page',
  templateUrl: './combination-page.component.html',
  styleUrls: ['./combination-page.component.css'],
})
export class CombinationPageComponent implements OnInit {
  title: string = 'Combination operators';
  text: string =
    'Combination operators allow your to merge streams like the Ghostbusters!';

  relatedOperators: RelatedItem[] = [
    {
      name: 'forkJoin',
      url: 'https://www.learnrxjs.io/learn-rxjs/operators/combination/forkjoin',
    },
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

  constructor() {}

  ngOnInit(): void {}
}
