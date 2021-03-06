import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  pages: { path: string; title: string }[] = [
    { path: 'home', title: 'Home' },
    { path: 'operators', title: 'RxJS operators' },
    { path: 'subjects', title: 'Subjects' },
  ];
}
