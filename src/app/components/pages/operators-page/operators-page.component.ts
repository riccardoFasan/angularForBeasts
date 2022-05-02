import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operators-page',
  templateUrl: './operators-page.component.html',
  styleUrls: ['./operators-page.component.css'],
})
export class OperatorsPageComponent implements OnInit {
  pages: { path: string; title: string }[] = [
    { path: 'combination', title: 'combineLatest, zip & forkJoin' },
    { path: 'mapping', title: 'higher order mapping' },
    { path: 'retry', title: 'retry & retryWhen' },
    { path: 'share', title: 'share & shareReplay' },
    { path: 'take', title: 'take, takeUntil, takeWhat?' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
