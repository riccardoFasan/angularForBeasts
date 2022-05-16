import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OperatorsGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> {
    const canActivate: boolean = confirm(
      'Do you want to see the operators page?'
    );
    if (!canActivate) {
      this.router.navigate(['/home']);
    }
    return of(canActivate);
  }
}
