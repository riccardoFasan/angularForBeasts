import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EventName } from '@app/shared/enums/event-name.enum';
import { Album, User } from '@app/shared/models';
import { ApiService, EventBusService } from '@app/shared/services';
import { Observable, share, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-album-selector',
  templateUrl: './album-selector.component.html',
  styleUrls: ['./album-selector.component.css'],
})
export class AlbumSelectorComponent {
  @Input() users!: User[];

  userControl: FormControl = new FormControl(null, Validators.required);
  albumControl: FormControl = new FormControl(
    { value: null, disabled: true },
    Validators.required
  );

  albums$: Observable<Album[]> = this.userControl.valueChanges.pipe(
    switchMap((userId: number) =>
      this.api
        .getAlbumsOfUser(userId)
        .pipe(tap(() => this.albumControl.enable()))
    ),
    share()
  );

  constructor(private api: ApiService, private bus: EventBusService) {}

  loadAlbum(): void {
    this.bus.emit({
      name: EventName.AlbumLoaded,
      value: this.albumControl.value,
    });
  }
}
