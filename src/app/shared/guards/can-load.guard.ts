import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { CanAccessService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class CanLoadGuard implements CanLoad {
  constructor(private canAcess: CanAccessService) {}

  canLoad(): Observable<boolean> {
    return this.canAcess.canAccess();
  }
}
