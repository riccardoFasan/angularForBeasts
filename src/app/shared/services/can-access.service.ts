import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanAccessService {
  constructor(private router: Router) {}

  canAccess(): Observable<boolean> {
    const canActivate: boolean = confirm(
      'Do you want to see the operators page?'
    );
    if (!canActivate) {
      this.router.navigate(['/home']);
    }
    return of(canActivate);
  }
}
