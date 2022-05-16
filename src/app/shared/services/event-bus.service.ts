import { Injectable } from '@angular/core';
import { filter, map, Subject, Subscription } from 'rxjs';
import { EventName } from '../enums/event-name.enum';
import { EmitEvent } from '../models';

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private subject$: Subject<EmitEvent> = new Subject<EmitEvent>();

  emit(event: EmitEvent) {
    this.subject$.next(event);
  }

  on(name: EventName, callback: any): Subscription {
    return this.subject$
      .pipe(
        filter((e: EmitEvent) => e.name === name),
        map((e: EmitEvent) => e.value)
      )
      .subscribe(callback);
  }
}
