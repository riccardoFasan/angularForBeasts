import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CanAccessService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class CanActivateGuard implements CanActivate {
  constructor(private canAcess: CanAccessService) {}

  canActivate(): Observable<boolean> {
    return this.canAcess.canAccess();
  }
}
