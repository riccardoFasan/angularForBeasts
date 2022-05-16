import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventName } from '@app/shared/enums/event-name.enum';
import { Photo } from '@app/shared/models';
import { ApiService, EventBusService } from '@app/shared/services';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  private readonly defaultAlbum: number = 1;
  private album$: BehaviorSubject<number> = new BehaviorSubject<number>(
    this.defaultAlbum
  );

  photos$: Observable<Photo[]> = this.album$.pipe(
    switchMap((id: number) => this.api.getPhotosOfAlbum(id))
  );

  private subSink: SubSink = new SubSink();

  constructor(private api: ApiService, private bus: EventBusService) {}

  ngOnInit(): void {
    this.subSink.sink = this.bus.on(EventName.AlbumLoaded, (value: number) => {
      this.album$.next(value);
    });
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
