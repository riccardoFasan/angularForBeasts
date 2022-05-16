import { Injectable } from '@angular/core';
import { User } from '@app/shared/models';
import { mergeMap, Observable, of, throwError } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class BrokenApiService {
  constructor(private api: ApiService) {}

  getUsers(): Observable<User[]> {
    return this.api.getUsers().pipe(
      mergeMap((users) => {
        const isWorking: boolean = Math.round(Math.random() * 10) % 2 === 0;
        if (isWorking) return of(users);
        console.error('This shitty API is not working!');
        return throwError(() => 'LOL');
      })
    );
  }
}
