import { Component } from '@angular/core';
import { User } from '@app/models';
import { ApiService } from '@app/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  users$: Observable<User[]> = this.api.getUsers();

  constructor(private api: ApiService) {}
}
