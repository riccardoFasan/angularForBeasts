import { Component } from '@angular/core';

@Component({
  selector: 'app-operators-page',
  templateUrl: './operators-page.component.html',
  styleUrls: ['./operators-page.component.css'],
})
export class OperatorsPageComponent {
  pages: { path: string; title: string }[] = [
    { path: 'combination', title: 'combineLatest, zip & forkJoin' },
    { path: 'mapping', title: 'xxxMap' },
    { path: 'retry', title: "ther's no try, ther's retry" },
    { path: 'share', title: 'sharing is caring' },
    { path: 'take', title: 'take, takeUntil, takeWhat?' },
  ];
}
