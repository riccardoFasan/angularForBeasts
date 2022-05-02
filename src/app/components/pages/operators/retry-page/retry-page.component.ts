import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retry-page',
  templateUrl: './retry-page.component.html',
  styleUrls: ['./retry-page.component.css'],
})
export class RetryPageComponent implements OnInit {
  title: string = 'retry & retryWhen';
  text: string = 'As you can think: a fanciful retry logic!';
  constructor() {}

  ngOnInit(): void {}
}
