import { Component, OnInit } from '@angular/core';
import { RelatedItem } from '@app/models';

@Component({
  selector: 'app-take-page',
  templateUrl: './take-page.component.html',
  styleUrls: ['./take-page.component.css'],
})
export class TakePageComponent implements OnInit {
  title: string = 'take, takeUntil, takeWhat?';
  text: string = 'Unsubscribe your stream, whithout calling .usubscribe().';
  relatedItems: RelatedItem[] = [
    { url: 'https://rxjs.dev/api/operators/takeWhile', name: 'takeWhile' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
