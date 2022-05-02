import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operators-page',
  templateUrl: './operators-page.component.html',
  styleUrls: ['./operators-page.component.css'],
})
export class OperatorsPageComponent implements OnInit {
  pages: { path: string; title: string }[] = [
    { path: 'combination', title: 'zip vs combineLatest' },
    { path: 'mapping', title: 'Higher order mapping' },
    { path: 'retry', title: 'retry & retryWhen' },
    { path: 'share', title: 'share & shareReplay' },
    { path: 'take', title: 'take, takeUntil, takeWhat?' },
  ];

  constructor() {}

  ngOnInit(): void {}
}