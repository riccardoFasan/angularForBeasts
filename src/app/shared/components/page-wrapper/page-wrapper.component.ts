import { Component, Input } from '@angular/core';
import { RelatedItem } from '@app/shared/models';

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.css'],
})
export class PageWrapperComponent {
  @Input() relatedItems?: RelatedItem[];
}
