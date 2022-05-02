import { Component, Input, OnInit } from '@angular/core';
import { RelatedItem } from '@app/models';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css'],
})
export class PageContentComponent implements OnInit {
  @Input() title!: string;
  @Input() text!: string;
  @Input() relatedItems: RelatedItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
