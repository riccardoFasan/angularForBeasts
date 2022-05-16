import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly mySuperSecret = 'n0=n3C4nUnd3rst4ndTh1sS3cr3t';

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const httpCall: HttpRequest<unknown> = request.clone({
      setHeaders: { Authorization: `Bearer ${this.mySuperSecret}` },
    });

    return next.handle(httpCall);
  }
}
