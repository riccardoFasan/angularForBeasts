import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.css'],
})
export class CardWrapperComponent {
  @Input() title!: string;
}
