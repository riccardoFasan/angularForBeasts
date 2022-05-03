import { Component, Input } from '@angular/core';
import { RelatedItem } from '@app/models';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css'],
})
export class PageContentComponent {
  @Input() title!: string;
  @Input() text!: string;
  @Input() relatedItems?: RelatedItem[];
}
