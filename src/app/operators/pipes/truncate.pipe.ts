import { Pipe, PipeTransform } from '@angular/core';
import { UtilsService } from '@app/shared/services/utils.service';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  constructor(private utils: UtilsService) {}

  transform(text: string, length: number = 25): string {
    return this.utils.truncate(text, length);
  }
}
