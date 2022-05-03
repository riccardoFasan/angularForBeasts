import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  truncate(text: string, length: number = 25, suffix: string = '...'): string {
    if (text.length > length) {
      return text.substring(0, length).trim() + suffix;
    }
    return text;
  }
}
