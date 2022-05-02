import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(text: string, length: number = 25, suffix: string = '...'): string {
    if (text.length > length) {
      return text.substring(0, length).trim() + suffix;
    }
    return text;
  }
}
